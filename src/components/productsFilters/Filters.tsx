import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filtersChanged,sortByChanged } from '../productsList/ProductsSlice';
import { debounce } from 'lodash';
import { AppDispatch } from '../../store';

interface IFilters{
    price: string
    availability: boolean
}

const Filters = () => {
    const [priceFrom, setPriceFrom] = useState('0');
    const [priceTo, setPriceTo] = useState('10000')
    // const [filtersList, setFiltersList] = useState<IFilters>({price: '', availability: false});
    const [availability, setAvail] = useState(false)

    const dispatch = useDispatch<AppDispatch>();

    const onFilter = ()=>{
        console.log('filtering')
       dispatch(filtersChanged(`?price_gte=${priceFrom}&price_lte=${priceTo}` 
       + (availability ? '&availability_ne[0]': ''))) 
    }

    // const onSortChange = (key:string) =>(e: any)=>{
    //     const {target: {value}} = e;
    //     // dispatch(sortByChanged(value))
    // }
    const onSortChange =(e: any)=>{
        const {target: {value}} = e;
        dispatch(sortByChanged(value))
    }

    useEffect(()=>{
       onFilter()
    },[availability, priceTo])

    const setd = (e: any)=>{
        setPriceTo(e.target.value)
    }

    return (
        <div>
            <input type="number" value={priceFrom} onChange={(e)=>setPriceFrom(e.target.value)}/>
            <input type="number"  onChange={debounce(setd,3000)}/>
            <label htmlFor=""><input type="checkbox" 
            // onChange={(e)=>setFiltersList({...filtersList, availability: true})}
            onChange={()=>{setAvail(a =>!a); }}
            /> наявність</label>

            <select name="" id="" onChange={onSortChange}>
                <option value="LOW">LOW to Hight</option>
                <option value="HIGH">Hight to low</option>
            </select>
        </div>
    );
};

export default Filters;