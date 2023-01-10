import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { toggleBrand, toggleStock } from '../../redux/actions/filterActions';

import loadProductData from '../../redux/thunk/products/fetchProducts';

const Home = () => {
    const products = useSelector((state) => state.product.products);

    const filters = useSelector(state => state.filter.filters);
    const { brands, stock } = filters;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProductData());
    }, [dispatch]);

    const activeClass = "bg-indigo-500 text-white border-white ";

    let content;

    if (products.length) {
        content = products.map(product => <ProductCard
            key={product._id}
            product={product}
        ></ProductCard>)
    }

    if (products.length && (stock || brands.length)) {
        content = products
            .filter((product) => {
                if (stock) {
                    return product.status === true;
                }
                return product;
            })
            .filter((product) => {
                if (brands.length) {
                    return brands.includes(product.brand);
                }
                return product;
            })
            .map((product) => <ProductCard key={product.model} product={product} />);
    }

    return (
        <section className='mt-12'>
            <div className='flex justify-center gap-5'>
                <button
                    onClick={() => dispatch(toggleStock())}
                    className={`border px-4 py-2 rounded-full font-semibold ${stock ? activeClass : null
                        }`}
                >
                    In Stock
                </button>
                <button
                    onClick={() => dispatch(toggleBrand('amd'))}
                    className={`border px-4 py-2 rounded-full font-semibold ${brands.includes("amd") ? activeClass : null
                        }`}
                >
                    AMD
                </button>
                <button
                    onClick={() => dispatch(toggleBrand('intel'))}
                    className={`border px-4 py-2 rounded-full font-semibold ${brands.includes("intel") ? activeClass : null
                        }`}
                >
                    Intel
                </button>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
                {
                    content
                }
            </div>
        </section>
    );
};

export default Home;