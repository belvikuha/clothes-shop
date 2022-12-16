import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
// import reducer from "./reducer";
import products from "../components/productsList/ProductsSlice";
// import filters from "../components/productsFilters/filtersSlice.js"

export const store = configureStore({
    reducer:{
        products
    },
    middleware: [thunkMiddleware],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
