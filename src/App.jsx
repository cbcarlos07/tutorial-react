import React, { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'

import Tasks from './components/Tasks';
import  './App.css'
import AddTask from './components/AddTask';
import Header from './components/Header'
import TaskDetails from './components/TasksDetail';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import axios from 'axios';

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       message: 'hello world'
//     }
//   }

//   componentDidMount(){
//     console.log('foi renderizado pela primeira vez');
//   }

//   handleMessageChangeClick(){
//     this.setState({message: 'Helloo'})
//   }

//   render(){
//     return (
//       <>
//         <h1>{this.state.message}</h1>
//         <button onClick={this.handleMessageChangeClick.bind(this)}>Mudar mensagem</button>
//       </>
//     )
//   }
// }

// export default App;

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

  const handleTaskDeletion = taskId => {
    const newTaks = tasks.filter(task => task.id !== taskId )
    setTasks(newTaks)
  }

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
      )
      setTasks(data)
    }
    fetchTasks();
  })

  return (
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route 
                path="/" 
                exact
                element={
                  <>
                    <AddTask handleTaskAddition={handleTaskAddition}/>
                    <Tasks 
                      tasks={tasks} 
                      handleTaskClick={handleTaskClick}
                      handleTaskDeletion={handleTaskDeletion}  />
                  </>
            } />
            <Route 
              path="/:taskTitle"
              exact
              element={<TaskDetails />}
            />
          </Routes>  
        </div>
      </Router>
  );
};
export default App;