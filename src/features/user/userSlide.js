import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";


export const registerUser = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
    try {
        return await authService.register(userData);
    } catch (error) {
        // แปลง AxiosError เป็น object ที่สามารถ serialize ได้
        const serializableError = {
          message: error.message,
          name: error.name,
          code: error.code,
          // เพิ่ม properties อื่น ๆ จาก AxiosError ที่คุณต้องการแปลง
        };
        return thunkAPI.rejectWithValue(serializableError);
    }
});

const initialState = {
    user: "",
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
                    toast.info("User Create Success");
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
            });
    },
});

export default authSlice.reducer;
