import './massageSent.css';

function MassageSent({content}){
    return(

        <div className="media w-50 mb-2 mySent">
            <div className="media-body">
                <div className="bg-secondary rounded py-2 px-3">
                    <p className="text-small mb-0 text-white">{content}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MassageSent;


