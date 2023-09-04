import React from 'react';
import '../Stylesheet/Quiz.css'
import { FaPen, FaTrash } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Question = ({quest,onDelete,onEdit}) => {

    
    return (
         
       
       
        
       <div className="container-question">
        
            <div className="question">
                {/*Capitalize the first letter of the question*/}
            <h5>{quest.text}</h5>
            </div>
            <div className="icons" >
              
               <FaPen id="penicon" style={{cursor:"pointer"}} onClick={() =>onEdit(quest)}/>
              
               <FaTrash id="trashicon" style={{cursor:"pointer"}} onClick={() =>onDelete(quest.id)}/>
            </div>
       </div>
    
       
    );
};

export default Question;