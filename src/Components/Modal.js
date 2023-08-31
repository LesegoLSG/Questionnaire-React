import React from 'react';
import '../Stylesheet/Modal.css';
import { useState } from 'react';

const Modal = ({ closeModal,UpdateQuestion,Qid,Qtext}) => {

    const [editedName, setEditedName] = useState("");
    const [formState, setFormState] = useState({
        id:Qid,
        text: Qtext,
    });
    const [errors, setErrors] = useState("");

    //Validate textfield
    const validateForm = () =>{
        if(formState.text){
            return true;
        }else{
            let errorFields = [];
            for(const [key,value] of Object.entries(formState)){
                if(!value){
                   errorFields.push(key);
                }
            }
            setErrors(errorFields.join(","))
            return false;
        }
    }

    //handles the changes for input
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateForm()) return;


        const QuestionToUpdate ={
            
        }

        

        UpdateQuestion(formState);
        console.log(formState);
        console.log("This is where i am here")
        closeModal();
        console.log("-----------")
        console.log(Qid);
    }
    /*
    ----------------------------------------------------------------------------
    */
  


    return (
        <div className="modal-container"
            onClick={(e) => {
                if (e.target.className === "modal-container")
                    closeModal()
            }}>
            <div className="modal">
                <h2>Edit Question</h2>
                <form>
                    <textarea name="text" value={formState.text} onChange={handleChange} id="modal-input"/>
                    <br />
                    {errors && <div className="error">{`Please include:${errors}`}</div>}
                    <button type="submit" onClick={handleSubmit} id="modal-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;