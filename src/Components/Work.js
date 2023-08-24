import React from "react";

const Work = ({id, label,btn}) => {
  


    
    return (  
        <button onClick={btn} id={id}>{label}</button>
    );

}
 
export default Work;