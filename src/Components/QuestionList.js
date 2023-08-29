import React from 'react';
import Question from '../Components/Question';
import '../Stylesheet/Question.css';

const QuestionList = ({questions, onDelete, onEdit}) => {
    

    return (
       <div className='main-question'>
       {questions.map((quest) =>(
        <Question 
        key={quest.id} 
        quest={quest} 
        onDelete={onDelete}
        onEdit={onEdit}/>
       ))}
       </div>
    );
};

export default QuestionList;