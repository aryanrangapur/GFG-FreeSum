// frontend/src/App.js
import React from 'react';
import Chatbot from './Chatbot';
import UploadPDF from './UploadPDF';

const App = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Chatbot with PDF Upload</h1>
            <UploadPDF />
            <Chatbot />
        </div>
    );
};

export default App;
