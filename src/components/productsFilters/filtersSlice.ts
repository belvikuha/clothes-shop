import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {IFiltersReducerState, IMainReducerState, IAction, IProduct } from "../../interfaces";

const initialState :IFiltersReducerState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'ALL'
}

// export const fetchFilters = createAsyncThunk(
//     'filters/fetchFilters',
//     async () => {
//         const {request} = useHttp();
//         return await request("http://localhost:3001/filters");
//     }
// );

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersChanged: (state, action) => {
            state.activeFilter = action.payload;
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchFilters.pending, state => {state.filtersLoadingStatus = 'loading'})
    //         .addCase(fetchFilters.fulfilled, (state, action) => {
    //             state.filtersLoadingStatus = 'idle';
    //             state.filters = action.payload;
    //         })
    //         .addCase(fetchFilters.rejected, state => {
    //             state.filtersLoadingStatus = 'error';
    //         })
    //         .addDefaultCase(() => {})
    // }
});

const {actions, reducer} = filtersSlice;

export default reducer;
export const {
    // filtersFetching,
    // filtersFetched,
    // filtersFetchingError,
    filtersChanged
} = actions;