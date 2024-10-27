// frontend/src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const uploadPDF = (file) => {
    const formData = new FormData();
    formData.append('pdf', file);
    return axios.post(`${API_URL}/upload`, formData);
};

export const askQuestion = (question, context) => {
    return axios.post(`${API_URL}/ask`, { question, context });
};
