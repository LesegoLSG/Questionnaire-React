import React from 'react';
import '../Stylesheet/DashDisplay.css';



const DashDisplay = ({ rowCount }) => {

    return (
        <div className="main-dash-container">
            <h1>Dashboard</h1>
            <div className="sub-dash-grid-containers">
                <div className="cont numofquestions">
                    <p>Number of questions:</p>
                    <h1>145</h1>
                </div>
                <div className="cont numofagree">
                    <p>Agreements:</p>
                    <h1>145</h1>
                </div>
                <div className="cont numofdisagree">
                    <p>Disagreements:</p>
                    <h1>145</h1>
                </div>
                <div className='cont numofneutral'>
                    <p>Neutrals:</p>
                    <h1>145</h1>
                </div>
            </div>

        </div>
    );
};

export default DashDisplay;