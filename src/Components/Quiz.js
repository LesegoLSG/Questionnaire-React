import React from 'react';
import '../Stylesheet/Quiz.css'

const Quiz = ({quest}) => {
    return (
        <div className="Quiz-container">
        <div className="Quiz-question">
            <h3>{quest.text}</h3>
        </div>
        <div className="radio-question">
            <div className="radio-separator">
                <label>Agree</label>
            <input
            type="radio"
            name="react-radio-btn"
            value="Agree"
            //checked={isSelected("radio1")}
            //onChange={handleRadioClick}
            />
            </div>
            <div className="radio-separator">
            <label>Agree</label>
             <input
            type="radio"
            name="react-radio-btn"
            value="Agree"
            //checked={isSelected("radio1")}
            //onChange={handleRadioClick}
            />
            </div >
            <div className="radio-separator">
            <label>Agree</label>
             <input
            type="radio"
            name="react-radio-btn"
            value="Agree"
            //checked={isSelected("radio1")}
            //onChange={handleRadioClick}
            />
            </div>

        </div>
    </div>
    );
};

export default Quiz;