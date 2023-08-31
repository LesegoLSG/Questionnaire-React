import React from 'react'
import '../Stylesheet/NoQuestion.css'

const NoQuestion = (props) =>{
    
    return(
        <div className="no-question-container">
            
            
            <h1>No question in the list</h1>
            <h1>{props.noQuestion}</h1>
        </div>
    );
};

export default NoQuestion;