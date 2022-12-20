import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filtersChanged,sortByChanged } from '../productsList/ProductsSlice';
import { debounce } from 'lodash';
import Dropdown from 'react-bootstrap/Dropdown';
import { AppDispatch } from '../../store';
import Form from 'react-bootstrap/Form';
import { MDBRange } from 'mdb-react-ui-kit';
import './filters.css'

interface IFilters{
    price: string
    availability: boolean
}

const Filters = () => {
    const [priceFrom, setPriceFrom] = useState('0');
    const [priceTo, setPriceTo] = useState('5000')
    const [availability, setAvail] = useState(false)

    const dispatch = useDispatch<AppDispatch>();

    const onFilter = ()=>{
        console.log('filtering')
       dispatch(filtersChanged(`?price_gte=${priceFrom}&price_lte=${priceTo}` 
       + (availability ? '&availability_ne[0]': ''))) 
    }

    // const onSortChange =(e: any)=>{
    //     const {target: {value}} = e;
    //     dispatch(sortByChanged(value))
    // }
    const onSortChange =(value: string)=>{
        // const {target: {value}} = e;
        dispatch(sortByChanged(value))
    }

    useEffect(()=>{
       onFilter()
    },[availability, priceTo])

    const setd = (e: any)=>{
        setPriceTo(e.target.value)
    }

    return (
        <div className='filters__container'>
            {/* <input type="number" value={priceFrom} onChange={(e)=>setPriceFrom(e.target.value)}/>
            <input type="number"  onChange={debounce(setd,3000)}/> */}
           

            {/* <select name="" id="" onChange={onSortChange} placeholder="Сортувати по">
                <option value="LOW">Від дешевих до дорогих</option>
                <option value="HIGH">Від дорогих до дешевих</option>
            </select> */}
            <Form.Label>Ціна до:</Form.Label>
            <MDBRange
                id='customRange'
                onChange={debounce(setd,3000)}
                defaultValue={5000}
                min='500'
                max='10000'
                step='500'
             />
            <Dropdown>
                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                    Сортувати по
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={()=>onSortChange("LOW")}>Від дешевих до дорогих</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={()=>onSortChange("HIGH")}>Від дорогих до дешевих</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <label htmlFor="" className='avail'>
                <input type="checkbox"
                        onChange={()=>{setAvail(a =>!a); }}
            /> наявність</label>
        </div>
    );
};

export default Filters;