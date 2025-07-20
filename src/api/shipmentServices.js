// src/api/shipmentService.js
import api from './axiosInstance';

export const getRecentShipments = async () => {
    try {
        const response = await api.get('/recent-shipments');
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getAllShipments = async () => {
    try {
        const response = await api.get('/shipments');
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const createShipment = async (shipmentData) => {
    try {
        const response = await api.post('/shipments', shipmentData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getShipmentDetails = async (id) => {
    try {
        const response = await api.get(`/shipments/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateShipmentStatus =  async (id, statusData) => {
    try {
        // statusData should be an object like { status: 'shipped' }
        const response = await api.put(`/shipments/${id}/status`, statusData);
        return response.data;
    } catch (error) {
        throw error;
    }
}