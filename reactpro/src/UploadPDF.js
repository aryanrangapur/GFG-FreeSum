// frontend/src/UploadPDF.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadPDF = () => {
    const [file, setFile] = useState(null);
    const [text, setText] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('pdf', file);
        try {
            const response = await axios.post('http://localhost:5000/upload', formData);
            setText(response.data.text);
        } catch (error) {
            console.error('Error uploading PDF:', error);
        }
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Upload PDF</h2>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button onClick={handleUpload} style={{ marginLeft: '10px' }}>Upload</button>
            {text && (
                <div>
                    <h3>PDF Text:</h3>
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
};

export default UploadPDF;
