import './popUp.css';
import React, { useState } from 'react'; 

function PopUp(props){
    const [file, setFile] = useState();
    
    const onClick = e => {
        e.preventDefault();
        props.addImg(file, props.user);
        //console.log(file);
        props.setValue(false)
    }

    const imgChange = e =>{
        const files = e.target.files;
        const file = files[0];
        setFile(file);
    }

   if(props.value){
       return(
           <div className="popup">
               <div className="popup-inner">
                   <button type="button" className="btn-close myClose" aria-label="Close" onClick={()=>props.setValue(false)}></button>
                   <div className="mb-3">
                       <br></br>
                       <label htmlFor="formFile" className="form-label">please choose a file</label>
                       <br></br>
                       <input className="form-control" type="file" id="formFile" accept='.jpg, .jpeg, .png' onChange={imgChange} />
                       <button type="button" className="btn btn-outline-secondary" onClick={onClick}>Send</button>
                   </div>
               </div>
           </div>
       );
   }
   else
   return("");
}

export default PopUp;