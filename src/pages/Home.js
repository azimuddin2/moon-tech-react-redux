import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
            {
                products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default Home;