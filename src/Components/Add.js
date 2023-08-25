import React from 'react';
import '../Stylesheet/Add.css';
import { useState } from 'react';


const Add = ({onAdd}) => {
    const [text,setText] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        if(!text){
            alert("Please add a question")
            return
        }

        onAdd({text});
        setText("");
    }
    return (
        <div className="add-container">

            <form onSubmit={onSubmit}>

                <table>
                    <tr>
                        <h1>Creating a Questionnaire !</h1>
                    </tr>
                    <tr>
                        <input type="text"
                            placeholder="Type your question here"
                            //required
                            id="add-input"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </tr>
                    <tr>
                        <button 
                        className="btnAdd" 
                        type="submit" 
                        value="save">Add</button>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default Add;