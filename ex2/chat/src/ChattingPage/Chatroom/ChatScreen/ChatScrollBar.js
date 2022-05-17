import './ChatScrollBar.css';


function ChatScrollBar(props) {
    return(
        <div className='scroll-bg'>
        <div className='scroll-div' id='chatScroll'>
            <div className='scroll-object'>
                {props.children}
            </div>
        </div>
    </div> 
    );
}

export default ChatScrollBar;