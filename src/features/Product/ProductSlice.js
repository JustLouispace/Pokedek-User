import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { productService } from "./ProductService";

export const getAllProducts = createAsyncThunk("product/get", async (thunkAPI) => {
    try {
        return await productService.getProducts();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    };
}

);

export const getAProduct = createAsyncThunk("product/geta", async (id, thunkAPI) => {
    try {
        return await productService.getAProduct();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    };
}

);

export const addToMyCollection = createAsyncThunk("product/addtomycollection", async (prodId, thunkAPI) => {
    console.log(prodId);
    try {
        return await productService.addToMyCollection(prodId);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    };
}


);

export const resetState = createAction("Reset_all");

const initialState = {
    products: "",
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};


const productState = {
    product: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}



export const productsSlice = createSlice({
    name: "products",
    initialState: productState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
            }).addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.product = action.payload;
            }).addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            }).addCase(addToMyCollection.pending, (state) => {
                state.isLoading = true;
            }).addCase(addToMyCollection.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.addToMyCollection = action.payload;
                state.message = "Product Added To My Collection"
            }).addCase(addToMyCollection.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            }).addCase(resetState, () => initialState);
    },
});

export default productsSlice.reducer;
