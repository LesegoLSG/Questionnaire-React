import React from 'react';
import { useState, useEffect } from 'react';
import DashDisplay from '../Components/DashDisplay';
import DashDisplayList from '../Components/DashDisplayList';

const Dashboard = () =>{
    
    
    const [questions , setQuestions]= useState( []);
    const [rowCount, setRowCount] = useState(0);
    //fetching rowcount
    useEffect(() =>{
        fetch('http://localhost:5001/questions')
        .then(response => response.json())
        .then(data =>{
            setQuestions(data);
            setRowCount(data.length);
        })
        .catch(error =>{
            console.error('Error fetching JSON data:', error);
        });
    },[]);
    
   

    return(
        <div>
       {/*<h1>Number of questions:{rowCount}</h1> */} 
        <DashDisplay rowCount={rowCount}/>  
           {/*<DashDisplayList questions={questions}/>*/}
        </div>
    );
};

export default Dashboard;