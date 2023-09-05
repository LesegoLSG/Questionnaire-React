import React from 'react';
import '../Stylesheet/Add.css';
import { useState } from 'react';

/*
    Component for adding a question
*/
const Add = ({ onAdd }) => {
    //Initial state of our question to be added.
    const [text, setText] = useState('');

    // const [agree, setAgree] = useState(0);
    // const [neutral, setNeutral] = useState(0);
    // const [disagree, setDisagree] = useState(0);

    //Sending data to create.js, if input is empty pop-up is displayed.
    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert("Please add a question")
            return
        }

        onAdd({ text });
        setText("");
    }
    return (
        //Displaying input,headers and submit button
        <div className="add-container">

            <form onSubmit={onSubmit}>

                <h1>Creating a Questionnaire</h1>
                <div className="input-box">
                <input type="text"
                    placeholder="Type your question here"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                </div>
                <div className="input-btn">
                <button
                    className="btnAdd"
                    type="submit"
                    value="save">+ Add</button>
                    </div>
                
            </form>
        </div>
    );
};

export default Add;