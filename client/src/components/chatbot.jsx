import React from "react";
import "../styles/chatbot.css";

function Chatbot(){
    return(
        <button className="chatbot-btn" src="/chatbot" title="ChatBot">
        <div className="chatbot-section" title="ChatBot">
        <img className="chatbot-img" src="media/8.png" alt="chatboticon" title="ChatBot"></img>
        </div>
        </button>
    );
}

export default Chatbot;