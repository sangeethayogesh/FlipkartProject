import { useStoreActions, useStoreState, action } from 'easy-peasy';
import React, { useEffect } from 'react'
import CardBox from './CardBox';



function Home() {

    const products = useStoreState((state) => state.products.products);
    const setProducts = useStoreActions((action) => action.products.set);

    const API_URL = `https://clanizon-ecommerce.getsandbox.com/products`;

    useEffect(() => {
        createData();
    }, []);

    const createData = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data);
        console.log(data);
    }

    return (
        <div className="Home_card">
            <CardBox products={products} />
        </div>
    )
}

export default Home
