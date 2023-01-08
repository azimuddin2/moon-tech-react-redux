import React from 'react';
import { BiListPlus } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri"
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/productActions';
import { useLocation } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { image, model, rating, price, quantity } = product;

    const dispatch = useDispatch();

    const { pathname } = useLocation();

    return (
        <div
            className='shadow-lg relative rounded-3xl border  p-6 flex flex-col text-indigo-900'
            key={product._id}
        >
            {pathname.includes("cart") && (
                <div className='grid place-items-center m-1 bg-indigo-500 text-white h-8 w-8 rounded-full absolute top-0 right-0'>
                    <p>{quantity}</p>
                </div>)}
            <div className='h-52 w-52 mx-auto'>
                <img src={image} alt={model} />
            </div>
            <h1 className='font-bold text-center'>{model}</h1>
            <h1 className='font-semibold text-lg text-center'>Price: {price}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {rating}</p>
            <div className=' flex-1'>
                <ul className='space-y-2'>
                    {product.keyFeature.map((feature) => {
                        return <li className='text-sm '>{feature}</li>;
                    })}
                </ul>
            </div>
            <div className='flex gap-2 mt-5'>
                {!pathname.includes("cart") && (
                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold flex items-center justify-center'
                    >
                        <span className='mr-2'>Add to cart </span>
                        <BsFillCartFill></BsFillCartFill>
                    </button>)}

                {pathname.includes("cart") && (
                    <button
                        onClick={() => dispatch(removeFromCart(product))}
                        className='bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold flex items-center justify-center'
                    >
                        <span className='mr-2'>Remove</span>
                        <RiDeleteBinLine className='text-xl'></RiDeleteBinLine>
                    </button>)}

                {!pathname.includes("cart") && (
                    <button
                        title='Add to wishlist'
                        className='bg-indigo-500  py-1 px-2 rounded-full'
                    >
                        <BiListPlus className='text-white' />
                    </button>)}
            </div>
        </div >
    );
};

export default ProductCard;