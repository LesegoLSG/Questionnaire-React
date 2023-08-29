import React from 'react';
import '../Stylesheet/Modal.css';
import { useState } from 'react';

const Modal = ({ closeModal}) => {

    const [editedName, setEditedName] = useState("");
    const [formState, setFormState] = useState({
        text: "",
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

        console.log(formState);
        closeModal();
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
                    <input name="text" value={formState.text} onChange={handleChange} />
                    <br />
                    {errors && <div className="error">{`Please include:${errors}`}</div>}
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;