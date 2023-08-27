import React from 'react';
import Add from '../Components/Add';
import Question from '../Components/Question';
import QuestionList from '../Components/QuestionList';
import NoQuestion from '../Components/NoQuestion';
import { useState, useEffect } from 'react';

const Create = () =>{
    const [questions , setQuestions]= useState( []);

    useEffect(() =>{
        const getQuestions = async () =>{
            const questionsFromServer = await fetchQuestions();
            setQuestions(questionsFromServer);
        }
        
        getQuestions();
    },[]);

    //Fetching questions from json-server
    const fetchQuestions = async () =>{
        const res = await fetch('http://localhost:5001/questions');
        const data = await res.json();
        return data;
    }

    //Add a question function
    const addQuestion = async (addQ) =>{
        const res = await fetch('http://localhost:5001/questions',{
            method: 'POST',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify(addQ),
        })

        const data = await res.json();
        setQuestions([...questions, data]);
        /*
       const id = Math.floor(Math.random() * 10000) + 1;
       const newQuestion =  {id, ...addQ};
       setQuestions([...questions,newQuestion]);
       */
    }

    //Delete a question function
    const deleteQuestion = async(id) =>{
        await fetch(`http://localhost:5001/questions/${id}`,{
            method:'DELETE',
        });
        setQuestions(questions.filter((eQuestion) => eQuestion.id !==id));
    }
    return(
        
        <div>
            <Add onAdd={addQuestion}/>
            {questions.length>0 ?(
            <QuestionList questions={questions} onDelete={deleteQuestion}/>
            ) : (
                <NoQuestion/>
            )}
            </div>
         
    );
};

export default Create;