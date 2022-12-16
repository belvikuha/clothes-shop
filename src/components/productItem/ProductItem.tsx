import React, { useMemo } from 'react';
import { IProduct } from '../../interfaces';
import './productItem.css'
type Props = IProduct;

const ProductItem = (props : Props) => {
    const {title, price, availability} =props
    const sizes = useMemo(()=>{return ['XS','S','M','L','XL']},[])

    function checkAvailability(availability : string[]){
        return sizes.map(size=>{
            if(availability.includes(size))return (<p className='available'>{size}</p>)
            return <p>{size}</p>
        })
    }

    const a = checkAvailability(availability);
    return (
        <div className='product-item'>
            <p>{title}</p>
            <p>{price}</p>
            <div className="product-item__availability">
                {a}
            </div>
        </div>
    );
};

export default ProductItem;