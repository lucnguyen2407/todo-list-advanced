import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Tạo instance axios với cấu hình mặc định
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Thêm interceptor để xử lý request
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // Lấy token từ localStorage nếu có
        const token = localStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Thêm interceptor để xử lý response
api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        // Xử lý lỗi ở đây
        if (error.response?.status === 401) {
            // Xử lý khi token hết hạn
            localStorage.removeItem('token');
        }
        return Promise.reject(error);
    }
);

// Interface cho dữ liệu đăng ký
interface RegisterData {
    name: string;
    email: string;
    password: string;
}

// Interface cho dữ liệu đăng nhập
interface LoginData {
    email: string;
    password: string;
}

// Các hàm gọi API
export const authApi = {
    // Đăng ký tài khoản
    register: (data: RegisterData) =>
        api.post('/auth/register', data),

    // Đăng nhập
    login: (data: LoginData) =>
        api.post('/auth/login', data),
};

// export const todoApi = {
//     // Lấy danh sách todo
//     getTodos: () => api.get('/todos'),

//     // Tạo todo mới
//     createTodo: (data: { title: string; description?: string }) =>
//         api.post('/todos', data),

//     // Cập nhật todo
//     updateTodo: (id: string, data: { title?: string; description?: string; completed?: boolean }) =>
//         api.put(`/todos/${id}`, data),

//     // Xóa todo
//     deleteTodo: (id: string) =>
//         api.delete(`/todos/${id}`),
// };

export default api; 