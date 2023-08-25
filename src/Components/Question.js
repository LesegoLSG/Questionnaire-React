import React from 'react';
import '../Stylesheet/Question.css'
import { FaPen, FaTrash } from 'react-icons/fa'
const Question = ({quest,onDelete}) => {
    return (
         
       
       
       <div className="container">
            <div>
            <h3>{quest.text}</h3>
            </div>
            <div className="icons">
                <FaPen />
                <FaTrash style={{cursor:"pointer"}} onClick={() =>onDelete(quest.id)}/>
            </div>
       </div>
       
    );
};

export default Question;