import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";
import jwtDecode from 'jwt-decode';

export const registerUser = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
    try {
        return await authService.register(userData);
    } catch (error) {
        const serializableError = {
            message: error.message,
            name: error.name,
            code: error.code,
        };
        return thunkAPI.rejectWithValue(serializableError);
    }
});

export const LoginUser = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
    try {
        console.log(userData);
        return await authService.login(userData);
        

    } catch (error) {
        const serializableError = {
            message: error.message,
            name: error.name,
            code: error.code,
        };
        return thunkAPI.rejectWithValue(serializableError);
    }
});

const getCustomerfromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

const initialState = {
    user: getCustomerfromLocalStorage,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createdUser = action.payload;
                if (state.isSuccess === true) {
                    toast.info("User Create Successfully");
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.error);
                }
            })
            .addCase(LoginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload;

                if (state.isSuccess === true) {
                    const token = action.payload.token;
                    localStorage.setItem("token", token);

                    const decodedToken = jwtDecode(token);
                    const userId = decodedToken.id || decodedToken._id;

                    localStorage.setItem("userId", userId);

                    toast.info("User logged In ");
                }
            })
            .addCase(LoginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.error);
                }
            })

            ;
    },
});

export default authSlice.reducer;
