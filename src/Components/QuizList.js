import React from 'react';
import Quiz from '../Components/Quiz';
import { useState } from 'react'


const QuizList = ({ questions}) => {
 
    return (
        
        <form>
            <div className="main-Quiz">
                {questions.map((quest) => (
                    <Quiz
                        key={quest.id}
                        quest={quest}
                    />
                    
                ))}
                <p>Agree: </p>
                <p>neutral: </p>
                <p>Disagree: </p>

            </div>
            <button>Submit Quiz answers</button>

        </form>
    )
     
};

export default QuizList;