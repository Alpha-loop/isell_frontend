// src/api/quoteService.js
import api from './axiosInstance';

const quoteService = {
    createQuote: async (quoteData) => {
        try {
            const response = await api.post('/shipping-quote', quoteData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default quoteService;