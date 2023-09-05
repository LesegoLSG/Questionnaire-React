import React from 'react';
import Quiz from '../Components/Quiz';
import { useState } from 'react'
import DashDisplay from './DashDisplay';


const QuizList = ({ questions, updateResults}) => {
    const [userAnswer, setUserAnswer] = useState({});
    const [myQuestion, setMyQuestion] =useState([questions
        // id:questions.id,
        // text:questions.text,
        // agree:questions.agree,
        // neutral:questions.neutral,
        // disagree:questions.disagree
    ]);
    const [myState,setMyState] = useState({});

    const handleAnswerChange = (id, answer) => {
        setUserAnswer((prevAnswers) => ({
            ...prevAnswers,
            [id]: answer,
           
        }));
    };

    

    const handleSurveySubmit = (e) => {
        e.preventDefault();
        const results = questions.map((question) => ({
            id: question.id,
            mytext: question.text,
            agree :  (userAnswer[question.id] === "agree") ? question.agree + 5 : 0,
            neutral:  (userAnswer[question.id] === "neutral") ? question.neutral + 4 : 0,
            disagree: (userAnswer[question.id] === "disagree") ? question.disagree +  5 : 0,

            // Send results to a parent component or display them directly in Dashboard.js
            // You can pass the 'results' array to a parent component, which then passes it to Dashboard.
             
           
        }))
        /*
        const agree=(userAnswer[questions.id] === "agree") ? 5 : 0
        const Neutral= (userAnswer[questions.id] === "neutral") ? 5 : 0
        const Disagree= (userAnswer[questions.id] === "disagree") ? 5 : 0

        console.log("agree:", agree);
        console.log("Neutral:", Neutral);
        console.log("Disagree:", Disagree);
        */
        console.log("submit survey button")
        console.log("results", results);
        console.log("questions from Questionnaire:" , myQuestion);
        console.log("Answer:",userAnswer);
        setMyQuestion(results);
        console.log("noOfAgree",results[1].agree );
        console.log("noOfNeutral",results[1].neutral );

       
        

        setMyQuestion(results);

        updateResults(myQuestion);
        

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
            <button id="Quiz-btn" onClick={handleSurveySubmit}>Submit Quiz answers</button>

        </form>
    )

};

export default QuizList;