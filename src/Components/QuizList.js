import React from 'react';
import Quiz from '../Components/Quiz';


const QuizList = ({ questions }) => {
    

    return (
       <div>
       {questions.map((quest) =>(
        <Quiz 
        key={quest.id} 
        quest={quest} 
        />
       ))}
       </div>
    );
};

export default QuizList;