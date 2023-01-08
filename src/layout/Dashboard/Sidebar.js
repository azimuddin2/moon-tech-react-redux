import React from 'react';
import { Link } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { CgList } from 'react-icons/cg';
import { MdPostAdd } from 'react-icons/md';
import { HiOutlineHome } from 'react-icons/hi';


const Sidebar = () => {
    return (
        <div className='col-span-2 bg-indigo-200 h-[calc(100vh-25px)] p-5 rounded-lg'>
            <ul className='flex gap-3  flex-col h-full'>
                <li className='flex items-center'>
                    <RxDashboard className='text-lg mr-1'></RxDashboard>
                    <span>Admin Dashboard</span>
                </li>
                <li>
                    <Link to='/dashboard' className='flex items-center'>
                        <CgList className='text-lg mr-1'></CgList>
                        <span>Product List</span>
                    </Link>
                </li>
                <li>
                    <Link to='add-product' className='flex items-center'>
                        <MdPostAdd className='text-lg mr-1'></MdPostAdd>
                        <span> Add Product </span>
                    </Link>
                </li>
                <li className='mt-auto'>
                    <Link to='/' className='flex items-center'>
                        <HiOutlineHome className='text-lg mr-1'></HiOutlineHome>
                        <span>Back to Home</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;