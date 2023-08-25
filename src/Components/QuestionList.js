import React from 'react';
import Question from '../Components/Question';

const QuestionList = ({questions, onDelete}) => {
    

    return (
       <>
       {questions.map((quest) =>(
        <Question key={quest.id} quest={quest} onDelete={onDelete}/>
       ))}
       </>
    );
};

export default QuestionList;