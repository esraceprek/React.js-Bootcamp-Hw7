import React, {useEffect} from 'react';
import axios from 'axios';
import {useSelector ,useDispatch} from 'react-redux';
import {setProducts} from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductList = () => {

    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchProducts = async () => {

        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log("Err" , err);
        });

        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
        }, [fetchProducts]);


    console.log(products);
    
    return(
        <div className="ui grid container">
            <ProductComponent/>
        </div>

    );
};

export default ProductList;