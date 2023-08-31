import React from 'react';
import Add from '../Components/Add';
import Question from '../Components/Question';
import QuestionList from '../Components/QuestionList';
import NoQuestion from '../Components/NoQuestion';
import Modal from '../Components/Modal';
import { useState, useEffect } from 'react';

const Create = () =>{
    const [questions , setQuestions]= useState( []);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    
   

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

    const OpenModal = (ooid) =>{
        setModalOpen(!modalOpen);
        //set Question selected
       
        console.log("question id = ",ooid);
        setSelectedQuestion(ooid);
        
    }
    /*
    const retrieveQuestion = (Qid) =>{
        const QuestionToUpdate = questions.find(q => q.id ===Qid);
        setSelectedQuestion(QuestionToUpdate);
    }
    */

    //Edit a question function
    const handleEditRow = async(stateFromModal) =>{

      
        //console.log(UpdateQ); gives ur Lesego Mhlongo from database
      
       try{
        const res = await fetch(`http://localhost:5001/questions/${stateFromModal.id}`,{
            method:'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(stateFromModal),
        });

        if(res.ok){
            const allquestions = questions.map(q =>
                q.id ===stateFromModal.id ? stateFromModal : q
                );
                setQuestions(allquestions);
                setSelectedQuestion(null);
        }else{
            alert("Could not update question");
        }
    }catch(error){
        alert("Error updating question:" + error);
    }

        //const data = await res.json();
        
        
       // console.log(questions.filter((eQuestion) => eQuestion.id));
        
     
        //setModalOpen(!modalOpen);
        console.log("selected question(whole):",selectedQuestion);
        console.log("selected question(id):",selectedQuestion.id);
        console.log("selected question(text):",selectedQuestion.text);
        console.log("From modal:",stateFromModal);
        console.log("button is clicked one");
        //console.log(id);
        
    }

    return(
        
        <div>
            <Add onAdd={addQuestion}/>
            <h1> List of questions </h1>
            {questions.length>0 ?(
            <QuestionList questions={questions} onDelete={deleteQuestion} onEdit={OpenModal} />
            ) : (
                <NoQuestion noQuestion="Kindly add a question above"/>
            )}
        
            {modalOpen &&
            <Modal closeModal={() => {
                setModalOpen(false);
            }}
            UpdateQuestion={handleEditRow}
            Qid={selectedQuestion.id}
            Qtext={selectedQuestion.text}
            />
        }
        </div>
         
    );
};

export default Create;