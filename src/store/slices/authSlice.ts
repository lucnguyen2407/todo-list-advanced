import { User } from "@/lib/types";
import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";


interface AuthState {
    user: User | null
    token: string | null
    isLoading: boolean
    error: string | null
    isAuthenticated: boolean
}

const initialState: AuthState = {
    user: null,
    token: null,
    isLoading: false,
    error: null,
    isAuthenticated: false,
}

export const loginUser = createAsyncThunk(
    "auth/login",
    async ({ email, password }: { email: string; password: string }, thunkAPI) => {
        try {
            // Simulate API call - replace with real backend call
            await new Promise((resolve) => setTimeout(resolve, 5000));

            const mockUser: User = {
                id: "1",
                name: "John Doe",
                email,
                avatar: "/placeholder.svg?height=32&width=32",
            };

            const mockToken = "mock-jwt-token";

            return { user: mockUser, token: mockToken };
        } catch (error) {
            return thunkAPI.rejectWithValue("Login failed");
        }
    }
);

export const registerUser = createAsyncThunk(
    "auth/register",
    async ({ name, email, password }: { name: string; email: string; password: string }, thunkAPI) => {
        try {
            // Simulate API call - replace with real backend call
            await new Promise((resolve) => setTimeout(resolve, 1000))

            const mockUser: User = {
                id: "1",
                name,
                email,
                avatar: "/placeholder.svg?height=32&width=32",
            }

            const mockToken = "mock-jwt-token"

            return { user: mockUser, token: mockToken }
        } catch (error) {
            return thunkAPI.rejectWithValue("Registration failed")
        }
    },
)

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.error = null;
        },
        clearError(state) {
            state.error = null;
        },
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
    },
    extraReducers: (builder) => {
        // Handle login actions
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string || "Login failed";
                state.isAuthenticated = false;
            });

        // Handle logout actions
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
                state.isAuthenticated = false;
            })
    },
});

export const { logout, clearError, setUser } = authSlice.actions;
export default authSlice.reducer;