import React from 'react';
import Modal from '../components/Modal/Modal';
import Table from '../components/Table/Table'
const Main = () => {
    return (
        <div>


            <div className=' relative'>
                <h1 className='text-5xl font-bold bg-red-900 text-white px-4 py-2'>Power House</h1>
                <h2 className='text-2xl font-bold text-white px-4 py-2 absolute right-6 -top-0'>Logout</h2>
            </div>
            <div className='flex justify-between items-center px-12 py-10'>
                <input className='w-[400px] h-[50px] border-2 ' placeholder='Search here' />

                <button className='text-xl font-bold bg-red-900 text-white px-4 py-2'>TOTAL PAID</button>

                <a href="#my-modal-2" className="btn bg-red-900 ">Add New</a>
            </div>
            <Modal />
            <Table />

        </div>
    );
};

export default Main;