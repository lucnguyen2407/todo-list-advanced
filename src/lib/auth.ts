import { store } from '@/store';

const TOKEN_KEY = 'auth_token';

export const authService = {
    getToken: () => {
        // Ưu tiên lấy từ Redux store
        const token = store.getState().auth.token;
        if (token) return token;

        // Fallback: lấy từ localStorage
        return localStorage.getItem(TOKEN_KEY);
    },

    setToken: (token: string) => {
        // Lưu vào localStorage
        localStorage.setItem(TOKEN_KEY, token);
    },

    removeToken: () => {
        localStorage.removeItem(TOKEN_KEY);
    }
}; 