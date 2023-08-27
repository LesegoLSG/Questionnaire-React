import React from 'react';
import Quiz from '../Components/Quiz';
import { useState, useEffect} from 'react';
import QuizList from '../Components/QuizList';


const Questionnaire = () =>{
    
    const [questions, setQuestions] = useState([]);
    //Loading data from server when page loads/refreshes
    useEffect(() =>{
        const getQuestions = async () =>{
            const questionsFromServer = await fetchQuestions();
            
            setQuestions(questionsFromServer);
            //console.log(questionsFromServer);
        }
        getQuestions();
    },[]);

    //Fetching questions from json-server
    const fetchQuestions = async () =>{
        const res = await fetch('http://localhost:5001/questions');
        const data = await res.json();
        
        console.log(data);
        return data;
    }
    
    return(
        <QuizList questions={questions} />
    );
};

export default Questionnaire;