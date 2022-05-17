import './audioSend.css';

function AudioSend(audio){
    return(
        <div className="mb-2 sendPic">
            <div className="media-body">
                <div className="py-2 px-3">
                    <audio className='myAudio' controls src={audio}/>
                </div>
            </div>
        </div>
    );
}

export default AudioSend;



