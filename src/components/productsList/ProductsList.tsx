import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch,useSelector,  } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import {  fetchProducts } from './ProductsSlice';
import { IMainReducerState, IProduct } from '../../interfaces';
import './products.css'

import ProductItem from '../productItem/ProductItem';
// import { RootState } from 'app/redux/store';

import { RootState, AppDispatch } from '../../store';

import Filters from '../productsFilters/Filters';

const ProductsList = () => {

    const [limit, setLimit] = useState(5);
    
    const filteredProductsSelector = createSelector(
            (state:RootState) => state.products.sortBy,
            (state:RootState) => state.products.products,
            (sortBy, products) => {
                var i =[...products];
               
                i.sort((a,b)=> sortBy === 'LOW' ? +a.price - +b.price : +b.price - +a.price);
                i.sort((a,b)=> (b.availability.length === 0 && a.availability.length !== 0 ? -1 : 0))
                return i;
            }
        );

    const dispatch = useDispatch<any>();
 
    const productsi = useSelector(filteredProductsSelector);
    const cart = useSelector((state:RootState) => state.products.cart);
    const filters = useSelector((state:RootState) => state.products.filterString);
    const loadingType = useSelector((state:RootState) => state.products.loading)
    useEffect(() => {
        dispatch(fetchProducts(limit));
    }, [fetchProducts, filters]);


    function renderProductsList(products: IProduct[]){
        return products.map((product, i)=>{
            return <ProductItem
                    key={i}
                    product={product}           
                />
        })
    }

    
    const products = renderProductsList(productsi)
    return (
        <div className='catalog'>
            <Filters/>
            <div className="product-list__container">
                {loadingType ? '...loading' :products }
            </div>
            
        </div>
    );
};

export default ProductsList;