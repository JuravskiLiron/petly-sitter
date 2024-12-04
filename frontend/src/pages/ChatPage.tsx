import React from 'react';
import '../styles/ChatPage.css';

const ChatPage: React.FC = () => {
    return (
        <div className="chat-container">
            <h2>Chat with your sitter</h2>
            <div className="chat-box">
                <div className="chat-messages">
                    <div className="message received">Hello! How can I help you?</div>
                    <div className="message sent">I need a sitter for my dog.</div>
                </div>
                <input className="chat-input" placeholder="Type a message..."/>
                <button className="send-btn">Send</button>
            </div>
        </div>
    );
};

export default ChatPage;
