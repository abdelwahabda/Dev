import React, { useState } from 'react';

function Chatbot() {
    const [messages, setMessages] = useState([]);

    const sendMessage = (message) => {
        setMessages([...messages, { text: message, user: 'You' }]);
        // Add chatbot response logic here
    };

    return (
        <div>
            <h2>Chatbot</h2>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg.user}: {msg.text}</div>
                ))}
            </div>
            <input type="text" onKeyDown={(e) => {
                if (e.key === 'Enter') sendMessage(e.target.value);
            }} />
        </div>
    );
}

export default Chatbot;
