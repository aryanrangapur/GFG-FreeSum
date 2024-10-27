// frontend/src/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = ({ pdfText }) => {  // Accept pdfText as a prop
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleAsk = async () => {
        if (!pdfText) {
            alert('Please upload a PDF first.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/ask', {
                question,
                context: pdfText,  // Use the PDF text directly
            });
            setAnswer(response.data);
        } catch (error) {
            console.error('Error asking the question:', error);
        }
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Ask a Question</h2>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask your question"
                style={{ width: '300px', marginTop: '10px' }}
            />
            <button onClick={handleAsk} style={{ marginLeft: '10px' }}>Ask</button>
            {answer && <p><strong>Answer:</strong> {answer}</p>}
        </div>
    );
};

export default Chatbot;
