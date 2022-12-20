import React, { useEffect, useMemo, useState } from 'react';
import { IProduct } from '../../interfaces';
import { useSelector,useDispatch  } from 'react-redux';
import './productItem.css'
import { addToCart } from '../productsList/ProductsSlice';
import { RootState } from '../../store';
type Props = {product:IProduct};

const ProductItem = (props : Props) => {
    const {product :{id, title, price, availability, image}} =props

    const [inCart, setInCart] = useState(false)

    const cart = useSelector((state:RootState) => state.products.cart);
    const sizes = useMemo(()=>{return ['XS','S','M','L','XL']},[])
    const dispatch = useDispatch<any>();
    
    function checkAvailability(availability : string[]){
        return sizes.map((size,i)=>{
            if(availability.includes(size))return (<p key={i} className='available'>{size}<div className=""></div></p>)
            return <p key={i}>{size}</p>
        })
    }
    const addItemToCart = (): void=>{
        console.log('cart')
        const updatedCart = {product: {...props.product}, quantity:1}
        dispatch(addToCart(updatedCart)) ;
        setInCart(true)
        // localStorage.setItem('cart', JSON.stringify(updatedCart))
    }

    useEffect(()=>{
        console.log(cart)
    //    var t = cart.filter(i=>JSON.stringify(Object.entries(i).sort()) == JSON.stringify(Object.entries({id: id, quantity:1}).sort())  ).length > 0
        var ifInCart = cart.filter(i=> i.product.id === id).length > 0
        if(ifInCart)setInCart(true);
    },[])

    const a = checkAvailability(availability);
    // console.log(image)
    return (
        <div className='product-item' key={id}>
            <img src={image} alt="" />
            <p>{title}</p>
            <p className='priceP'>{price}</p>
            <div className="product-item__availability">
                {a}
            </div>
            <button className="cartbutton" disabled={inCart} onClick={addItemToCart}>{inCart ? "Вже в кошику": "Додати у кошик"}</button>
        </div>
    );
};

export default ProductItem;