import React from 'react';
import Task from './Task'
const Tasks = ({tasks, handleTaskClick, handleTaskDeleltion}) => {    
  

    return (
    <>
        {tasks.map(task => (
            <Task 
                task={task} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeleltion={handleTaskDeleltion}/>
        ))}
    </>
    )
}

export default Tasks