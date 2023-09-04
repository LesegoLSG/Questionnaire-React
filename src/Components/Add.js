import React from 'react';
import '../Stylesheet/Add.css';
import { useState } from 'react';


const Add = ({ onAdd }) => {
    const [text, setText] = useState('');

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
        <div className="add-container">

            <form onSubmit={onSubmit}>

                <h1>Creating a Questionnaire</h1>
                <div className="input-box">
                <input type="text"
                    placeholder="Type your question here"
                    //required
                   
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