import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import Tasks from './components/Tasks';
import  './App.css'
import AddTask from './components/AddTask';
import Header from './components/Header'
import TaskDetails from './components/TasksDetail';
import { BrowserRouter as Router, Route} from 'react-router-dom'
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false
    },  
    {
      id: '2',
      title: 'Ler livros',
      completed: true
    }  
  ]);

  const handleTaskClick = taskId => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task;
    })
    setTasks(newTasks)
  }

  const handleTaskAddition = taskTitle => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]
    setTasks(newTasks)
  }

  const handleTaskDeleltion = taskId => {
    const newTaks = tasks.filter(task => task.id !== taskId )
    setTasks(newTaks)
  }

  return (
      <Router>
        <div className='container'>
          <Header />
            <Route 
                path="/" 
                exact
                render={() => (
                  <>
                    <AddTask handleTaskAddition={handleTaskAddition}/>
                    <Tasks 
                      tasks={tasks} 
                      handleTaskClick={handleTaskClick}
                      handleTaskDeleltion={handleTaskDeleltion}  />
                  </>
            )}/>
            <Route 
              path="/:taskTitle"
              exact
              component={TaskDetails}
            />
        </div>
      </Router>
  );
};
export default App;