import React,{useEffect} from "react";
import Card from './cardBrand'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions/get_products';
import Loading from "../loading/loading";


export default function Marcas(){

    const dispatch = useDispatch();
    const products = useSelector( state => state.brand)
    
    useEffect(() => {  // Didmount and DidUpdate controlled
        dispatch(getAllProducts());
    },[dispatch]) 
    console.log(products)
    return(
        products[0] && products[0].brand ? <div>
            <div className="brandTable">
                { products.map(a => a.brand === 0 ? null : <Card brand={a.brand}/>) }
            </div>
        </div> : <Loading/>
    )
}