import React from 'react';
import Chatbot from './Chatbot';
import Terminal from './Terminal';
import CIAAuth from './auth/CIAAuth';

function App() {
    return (
        <div className="container">
            <h1>Welcome to My Web App</h1>
            <CIAAuth />
            <Chatbot />
            <Terminal />
        </div>
    );
}

export default App;
