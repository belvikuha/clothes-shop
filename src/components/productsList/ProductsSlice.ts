import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
// import {useHttp} from '../../hooks/http.hook';
import { IMainReducerState, IAction, IProduct } from "../../interfaces";

const cart = localStorage.getItem('cart')



const initialState: IMainReducerState = {
    loading: false,
    products: [],
    searchstring: '',
    cart: cart ? JSON.parse(cart) :[],
    sortBy: 'LOW',
    currency: 'USD',
    filterString: ''
    // '?price_gte=10&price_lte=3000&category=пальто'
}


export const fetchProducts = createAsyncThunk<IProduct[],
number,
{ state: RootState }>(
    'products/fetchProducts',
    async (limit? : number, thunkAPI? )  => {
        const {products} = thunkAPI.getState();
        const response = await axios.get(`http://localhost:3001/products${products.filterString}`)
        return response.data
    }
    
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filtersChanged: (state, action) => {
            // console.log(action.payload)
            state.filterString = action.payload;
        },
        sortByChanged: (state, action) => {
            state.sortBy = action.payload;
        },
        productCreated: (state, action) => {
            state.products.push(action.payload);
        },
        productDeleted: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.loading = true; })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, state => {
                state.loading = false;
            })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = productsSlice;

export default reducer;
export const {
    productCreated,
    productDeleted,
    filtersChanged,
    sortByChanged
} = actions;