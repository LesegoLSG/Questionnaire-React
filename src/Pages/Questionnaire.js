import React from 'react';
import Quiz from '../Components/Quiz';
import { useState, useEffect } from 'react';
import QuizList from '../Components/QuizList';
import Dashboard from './Dashboard';
import DashDisplay from '../Components/DashDisplay';
import NoQuestion from '../Components/NoQuestion';

const Questionnaire = () => {

    const [questions, setQuestions] = useState([]);
    const [showDashboard, setShowDashboard] = useState(false);
    const [rowCount, setRowCount] = useState(0);

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
   

    //Loading data from server when page loads/refreshes
    useEffect(() => {
        const getQuestions = async () => {
            const questionsFromServer = await fetchQuestions();

            setQuestions(questionsFromServer);
            //console.log(questionsFromServer);
        }
        getQuestions();
    }, []);

    //Fetching questions from json-server
    const fetchQuestions = async () => {
        const res = await fetch('http://localhost:5001/questions');
        const data = await res.json();

        console.log(data);
        return data;
    }

    return (
        <div>
            {questions.length>0 ?(
            <QuizList questions={questions} />
            ) : (
                <NoQuestion noQuestion="Go to create to add a question"/>
            )}
            {!showDashboard &&
                <DashDisplay rowCount={rowCount} />
            }
        </div>
    );
};

export default Questionnaire;