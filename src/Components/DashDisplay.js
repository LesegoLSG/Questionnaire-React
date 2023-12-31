import React from 'react';
import '../Stylesheet/DashDisplay.css';
import QuizList from '../Components/QuizList';

/*
    Component for displaying results 
*/

const DashDisplay = ({ rowCount, quest }) => {
    //Displaying results to the Dashboard
    return (
        <div className="main-dash-container">
            
            <h1>Dashboard</h1>
            
            <div className="sub-dash-grid-containers">
                <div className="cont numofquestions">
                    <p>Number of questions:</p>
                    <h1>{rowCount}</h1>
                </div>
                <div className="cont numofagree">
                    <p>Agreements:</p>
                    <h1>0</h1>
                </div>
                <div className="cont numofdisagree">
                    <p>Disagreements:</p>
                    <h1>0</h1>
                </div>
                <div className='cont numofneutral'>
                    <p>Neutrals:</p>
                    <h1>0</h1>
                </div>
            </div>
    
        {/* 
            <h1>Each question results</h1>
            <div>
                {results.map((result) => (
                    <div key={result.questionId}>
                        <p>Question {result.questionId}:</p>
                        <p>Agree: {result.agree}</p>
                        <p>Neutral: {result.neutral}</p>
                        <p>Disagree: {result.disagree}</p>
                    </div>
                ))}
            </div>
            */}

            {/*
            <div className="newDisplay">
                <p>id: {quest.id}</p>
                <p>text: {quest.text}</p>
                <p>agree:{quest.agree}</p>
                <p>neutral: {quest.neutal}</p>
                <p>disagree: {quest.disagree}</p>
            </div>
            */}
        </div>
    );
};

export default DashDisplay;