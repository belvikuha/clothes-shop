import { useEffect, useState } from 'react';
import { useDispatch,useSelector,  } from 'react-redux';
import { RootState, AppDispatch } from '../../store';

import CartItem from '../cartItem/CartItem';
import './cart.css'
const Cart = () => {
    const [totalPrice, setTotalPrice] = useState<number>()
    const dispatch = useDispatch<any>();
    const cart = useSelector((state:RootState) => state.products.cart);

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
        var pr = 0;
        cart.forEach(item=>{
            pr += +item.product.price * item.quantity
        })
        setTotalPrice(pr);
    },[cart])

    function renderCartItems(){
       return cart.map(item => {
            return(
                <CartItem
                    product={item.product}
                    quantity={item.quantity}
                />
            )
        })
    }
    const productsCartList = renderCartItems()
    return (
        <> 
        
            <div className='cart'>
                <h2>Ваше замовлення</h2>
                {productsCartList}
                <div className="totalSum">
                    <h2>До спалати: {totalPrice} грн</h2>
                </div>
                
            </div>
        </>
        
    );
};

export default Cart;