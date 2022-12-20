import React from 'react';
import { useDispatch } from 'react-redux';
import {ICartItem} from '../../interfaces/index'
import { removeFromCart, plusQuantity, minusQuantity } from '../productsList/ProductsSlice';
import delPng from '../../images/icons/del.png'

import './cartItem.css'

const CartItem = ({product, quantity}: ICartItem) => {
    
    const dispatch = useDispatch<any>(); 

    return (
        <div className='cart-item__container'>
            <img className="cart-item__img"src={product.image} alt="" />
            <p>{product.title}</p>
            
            <div className="quantity-measure">
                <div className='btn' onClick={()=>{dispatch(minusQuantity(product.id))}} >-</div>
                <span>{quantity}</span>
                <div  className='btn' onClick={()=>{dispatch(plusQuantity(product.id))}} >+</div>
            </div>
            <div className="right">
                <p>{product.price} грн</p>
                <img src={delPng}  className='btn' alt="" onClick={()=>{dispatch(removeFromCart(product.id))}}/>
            </div>
            
        </div>
    );
};

export default CartItem;