import React, {useState} from "react";
import "../styles/chat.css";

function Chat(){

    const [style, setStyle] = useState("hide");

    function chatBoxClose(){
        if(style === "hide"){
            setStyle("show");
        }
        else if(style === "show"){
            setStyle("hide");
        }
    }

    function sendMessage(){

    }


    return(
        <div className="chat-section">
        <div className="chat-btn-div">
            <button className="chat-btn" onClick={chatBoxClose}>Chat Now</button>
        </div>

        <div className={style} id="chatBox">
        <button className='chat-close-btn' onClick={chatBoxClose}>X</button>
        <div className="wel-div">
        <p className="wel-text">Hi! I am Swift. I would love to solve your query.</p>
        </div>
        <input className="chat-bar" type="text" placeholder="Type your message"></input>
        <button className='send-btn' onClick={sendMessage}>Send</button>
        </div>

        </div>
    );
}

export default Chat;