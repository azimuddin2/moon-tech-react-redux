import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';

const Cart = () => {
    const cart = useSelector(state => state.product.cart);

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
            {
                cart
                    .sort((a, b) => a.cartPosition - b.cartPosition)
                    .map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
            }
        </div>
    );
};

export default Cart;