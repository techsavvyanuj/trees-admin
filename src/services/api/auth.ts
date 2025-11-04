import { api } from './config';

export interface LoginCredentials {
    identifier?: string; // For backwards compatibility
    email?: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: {
        _id: string;
        email: string;
        role: string;
        username: string;
    };
}

export const authService = {
    // Admin login
    login: async (credentials: LoginCredentials) => {
        const response = await api.post('/auth/admin/login', credentials);
        const { token, user } = response.data;
        localStorage.setItem('admin_token', token);
        return { token, user };
    },

    // Admin login (alias for regular login)
    adminLogin: async (credentials: LoginCredentials) => {
        // Convert identifier to email for API call
        const loginData = {
            identifier: credentials.identifier || credentials.email,
            password: credentials.password
        };
        
        const response = await api.post('/api/auth/login', loginData);
        const { token, user } = response.data;
        
        // Check if user has admin role
        if (user.role !== 'admin') {
            throw new Error('Access denied. Admin privileges required.');
        }
        
        localStorage.setItem('admin_token', token);
        return { token, user };
    },

    // Check authentication status
    checkAuth: async () => {
        const response = await api.get('/api/auth/me');
        return response.data;
    },

    // Logout
    logout: () => {
        localStorage.removeItem('admin_token');
        console.log('🔐 Admin token cleared');
        // Don't automatically redirect - let the app handle it
    },

    // Change password
    changePassword: async (oldPassword: string, newPassword: string) => {
        const response = await api.post('/auth/admin/change-password', {
            oldPassword,
            newPassword
        });
        return response.data;
    }
};