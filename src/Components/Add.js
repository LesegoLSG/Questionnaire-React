import React from 'react'
import '../Stylesheet/Add.css'


const Add = () => {
    return (
        <div className="add-container">

            <form>

                <table>
                    <tr>
                        <h1>Creating a Questionnaire !</h1>
                    </tr>
                    <tr>
                        <input type="text"
                            placeholder="Type your question here"
                            required
                            id="add-input"
                        />
                    </tr>
                    <tr>
                        <button className="btnAdd">Add</button>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default Add;