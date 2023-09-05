import React from 'react';
// import '../Stylesheet/Quiz.css';
import DashDisplay from './DashDisplay';

const DashDisplayList = ({questions}) => {
    return (
        <div>
       {questions.map((quest) =>(
        <DashDisplay 
        key={quest.id} 
        quest={quest} 
        />
       ))}
       </div>
      

    );
};

export default DashDisplayList;