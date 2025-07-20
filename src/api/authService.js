// src/api/authService.js
import api from './axiosInstance';

export const register = async (userData) => {
    try {
        const response = await api.post('/auth/register', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const login = async (credentials) => { // <-- This is the 'login' export
    try {
        const response = await api.post('/auth/login', credentials);
        if (response) {
            localStorage.setItem('userToken', response.data.token);
            console.log('Token stored:', response.data.token);
        }else {
            console.warn('Login response did not contain a token:', response.token);
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem('userToken');
};

export const getUserProfile = async () => {
    try {
        const response = await api.get('/users/profile');
        if (response) {
            console.log('this is profile response', response)
        }else {
            console.log('No response from server')
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getDashboardData = async () => {
    try {
        const response = await api.get('/users/dashboard');
        if (response) {
            console.log('this is dashboard response', response)
        }else {
            console.log('No response from server')
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};