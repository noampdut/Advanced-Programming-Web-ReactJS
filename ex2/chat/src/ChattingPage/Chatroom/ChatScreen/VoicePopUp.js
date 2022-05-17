import './voicePopUp.css';
import React, { useState } from 'react'; 

function VoicePopUp(props){
    const [buttonText, setButtonText] = useState("Record");
    let [mediaRecorder, setMediaRecorder] = useState(null);

    const record =()=>{
       if(buttonText === "Record"){
           setButtonText("Stop and send");
           navigator.mediaDevices.getUserMedia({audio:true}).then(stream =>{
                mediaRecorder = new MediaRecorder(stream);
                setMediaRecorder(mediaRecorder);
                mediaRecorder.start();
                let chunck =[];
 
                mediaRecorder.ondataavailable = (e)=>{
                    chunck.push(e.data);
                };
                mediaRecorder.onstop = (e)=>{
                 let blob=new Blob(chunck);
                 let audio_url=URL.createObjectURL(blob);
                 mediaRecorder.stream.getAudioTracks().forEach(track => track.stop());
                 props.addAudio(audio_url, props.user);
                 };
 
            })
       }
       else{
           setButtonText("Record")
            mediaRecorder.stop();
            props.setValue(false);
       }
   }

   const dismiss =()=>{
        if(buttonText == "Stop and send") {
            setButtonText("Record")
            mediaRecorder.onstop = (e)=>{
                mediaRecorder.stream.getAudioTracks().forEach(track => track.stop());
               };
            mediaRecorder.stop()
        }
   }

    if(props.value){
        return(
            <div className="voicePopUp">
                <button type="button" className="btn-close myClose" aria-label="Close" onClick={() => props.setValue(false)}></button>
                <div className="mb-3 placeRecord" id="record_div">
                    <button type="button" className="btn btn-outline-danger pad" onClick={dismiss}>Dismiss record</button>
                    <button type="button" id="record_btn" className="btn btn-outline-success pad" onClick={record}>{buttonText}</button>
                </div>
            </div>
        );
    }
    else
    return("");
}

export default VoicePopUp;