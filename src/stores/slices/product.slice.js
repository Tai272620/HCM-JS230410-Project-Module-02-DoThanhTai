import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const findAllProducts = createAsyncThunk(
    "findAllProducts",
    async () => {
        let res = await axios.get(process.env.REACT_APP_SERVER_JSON + 'products');
        return res.data
    }
)

const searchProductById = createAsyncThunk(
    "searchProductById",
    async (id) => {
        let res = await axios.get(`${process.env.REACT_APP_SERVER_JSON}products/${id}`)
        return res.data
    }
)

const searchProductByName = createAsyncThunk(
    "searchProductByName",

    async (name) => {
        let res = await axios.get(`${process.env.REACT_APP_SERVER_JSON}products?name_like=${name}`)
        return res.data
    }
)

const filterProductByType = createAsyncThunk(
    "filterProductByType",
    async (type) => {
        let res = await axios.get(`${process.env.REACT_APP_SERVER_JSON}products?type=${type}`);
        return res.data
    }
)

const productSlice = createSlice(
    {
        name: "product",
        initialState: {
            listProducts: [],
            product: {}
        },
        extraReducers: (builder) => {
            // find all products
            builder.addCase(findAllProducts.fulfilled, (state, action) => {
                state.listProducts = [...action.payload]
            })
            // filter product by type
            builder.addCase(filterProductByType.fulfilled, (state, action) => {
                state.listProducts = [...action.payload]
            })
            // seacrh product by id
            builder.addCase(searchProductById.fulfilled, (state, action) => {
                state.product = { ...action.payload }
            })
            // search product by name
            builder.addCase(searchProductByName.fulfilled, (state, action) => {
                console.log(action.payload);
                state.searchData = [...action.payload]
            })
        }
    }
)

export const productActions = {
    ...productSlice.actions,
    findAllProducts,
    filterProductByType,
    searchProductById,
    searchProductByName

}
export default productSlice.reducer;