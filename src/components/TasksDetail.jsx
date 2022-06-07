import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from './Button'
import './TaskDetails.css'
const TaskDetails = () => {
    const history = useNavigate();
    const params = useParams()

    const handleBackButtonClick = () =>{
        history(-1)
    }

    return ( 
        <>
            <div className='back-button-container'>
                <Button
                 onClick={handleBackButtonClick}
                >
                    Voltar
                </Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sint ipsam possimus, commodi tempora repellat?</p>
            </div>
        </>
     );
}
 
export default TaskDetails;