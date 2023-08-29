import React from 'react';
import '../Stylesheet/Quiz.css'
import { FaPen, FaTrash } from 'react-icons/fa'
const Question = ({quest,onDelete,onEdit}) => {
    
    return (
         
       
       
       <div className="container-question">
            <div className="question">
                {/*Capitalize the first letter of the question*/}
            <h3>{quest.text}</h3>
            </div>
            <div className="icons" >
                <FaPen style={{cursor:"pointer"}} onClick={() =>onEdit(quest.id)}/>
                <FaTrash id="trashicon" style={{cursor:"pointer"}} onClick={() =>onDelete(quest.id)}/>
            </div>
       </div>
       
    );
};

export default Question;