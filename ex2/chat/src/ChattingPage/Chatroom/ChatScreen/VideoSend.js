import './PicSend.css';

function VideoSend(video){
    return(
        <div className="mb-2 sendPic">
            <div className="media-body">
                <div className="py-2 px-3">
                    <video className='myPic' controls>
                        <source src={video} />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default VideoSend;
