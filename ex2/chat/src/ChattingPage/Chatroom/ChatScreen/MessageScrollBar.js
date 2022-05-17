import './messageScrollBar.css';


function MessageScrollBar(props) {
    return(
        <div className='scroll-bg'>
        <div className='scroll-div-box'>
            <div className='scroll-object'>
                {props.children}
            </div>
        </div>
    </div> 
    );
}

export default MessageScrollBar;