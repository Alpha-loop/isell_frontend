// src/api/notificationService.js
import api from './axiosInstance';

const notificationService = {
    getNotifications: async () => {
        try {
            const response = await api.get('/notifications');
            return response.data; // Assuming data property contains notifications array
        } catch (error) {
            throw error;
        }
    },

    markNotificationAsRead: async (id) => {
        try {
            const response = await api.put(`/notifications/${id}/read`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    markAllNotificationsAsRead: async () => {
        try {
            const response = await api.put('/notifications/mark-all-read');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    deleteNotification: async (id) => {
        try {
            const response = await api.delete(`/notifications/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getUnreadNotificationCount: async () => {
        try {
            const response = await api.get('/notifications/unread-count');
            return response.data.count; // Assuming backend returns { success: true, count: N }
        } catch (error) {
            throw error;
        }
    }
};

export default notificationService;