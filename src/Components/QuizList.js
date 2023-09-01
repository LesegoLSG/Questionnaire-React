import React from 'react';
import Quiz from '../Components/Quiz';
import { useState } from 'react'
import DashDisplay from './DashDisplay';


const QuizList = ({ questions }) => {
    const [userAnswer, setUserAnswer] = useState({});

    const handleAnswerChange = (questionId, answer) => {
        setUserAnswer((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answer,
        }));
    };

    const handleSurveySubmit = (e) => {
        e.preventDefault();
        const results = questions.map((question) => ({
            questionId: question.id,
            agree: (userAnswer[question.id] === "agree") ? 1 : 0,
            neutral: (userAnswer[question.id] === "neutral") ? 1 : 0,
            disagree: (userAnswer[question.id] === "disagree") ? 1 : 0,

            // Send results to a parent component or display them directly in Dashboard.js
            // You can pass the 'results' array to a parent component, which then passes it to Dashboard.
            
        }));
        console.log("submit survey button")
        console.log(results);
       {/*<DashDisplay  results={results}/> */} 
    }

   

    return (

        <form>
            <div className="main-Quiz">
                {questions.map((quest) => (
                    <Quiz
                        key={quest.id}
                        quest={quest}
                        //onChange
                        onAnswerChange = {handleAnswerChange}
                    />

                ))}
               

            </div>
            <button onClick={handleSurveySubmit}>Submit Quiz answers</button>

        </form>
    )

};

export default QuizList;