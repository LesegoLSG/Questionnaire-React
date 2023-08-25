import React from 'react';
import Add from '../Components/Add';
import Question from '../Components/Question';
import QuestionList from '../Components/QuestionList';
import NoQuestion from '../Components/NoQuestion';
import { useState } from 'react';

const Create = () =>{
    const [questions , setQuestions]= useState( [
        {
            id:1,
            text:'How old are you???'
        },

        {
            id:2,
            text:'Where do you stay?'
        },

        {
            id:3,
            text:'last questionttttttttttttttttt?'
        },
    ]);

    //Add a question function
    const addQuestion = (addQ) =>{
       const id = Math.floor(Math.random() * 10000) + 1;
       const newQuestion =  {id, ...addQ};
       setQuestions([...questions,newQuestion]);
    }

    //Delete a question function
    const deleteQuestion = (id) =>{
        setQuestions(questions.filter((eQuestion) => eQuestion.id !==id))
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