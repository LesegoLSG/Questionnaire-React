import React from 'react';
import '../Stylesheet/Quiz.css'

/*
    Component for displaying questionnaire
*/
const Quiz = ({ quest, onAnswerChange }) => {
    return (
        //Displaying questionnaire
        <div className="Quiz-container">
            <div className="Quiz-question">
                <h5>{quest.text}</h5>
            </div>
            <div className="radio-question">
                <div className="radio-separator">
                    <label>Agree</label>
                    <input
                        type="radio"
                        name={quest.id}
                        value="Agree"
                        //checked={isSelected("radio1")}
                        onChange={() => onAnswerChange(quest.id, "agree")}
                    />
                </div>
                <div className="radio-separator">
                    <label>Neutral</label>
                    <input
                        type="radio"
                        name={quest.id}
                        value="Neutral"
                        //checked={isSelected("radio1")}
                        onChange={() => onAnswerChange(quest.id, "neutral")}
                    />
                </div >
                <div className="radio-separator">
                    <label>Disagree</label>
                    <input
                        type="radio"
                        name={quest.id}
                        value="Disagree"
                        //checked={isSelected("radio1")}
                        onChange={() => onAnswerChange(quest.id, "disagree")}
                    />
                </div>

            </div>
        </div>


    );
};

export default Quiz;