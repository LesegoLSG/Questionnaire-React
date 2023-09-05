import React from 'react'
import '../Stylesheet/NoQuestion.css'

/*
    Component for displaying a message (in div form) 
    when list of questions is empty.
    Takes in a prop for reusability
*/
const NoQuestion = (props) =>{
    
    return(
        <div className="no-question-container">
            
            
            <h1>No question in the list</h1>
            <h1>{props.noQuestion}</h1>
        </div>
    );
};

export default NoQuestion;