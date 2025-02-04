import { Button } from '@/components/ui/button';
import React from 'react';
import { NavLink } from 'react-router-dom';

const PaymentSucees = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='w-[400px] h-[400px] bg-gray-200 shadow-md flex flex-col items-center justify-center mx-auto rounded-[20px]'>
                    <h1 className=' text-5xl font-bold mb-5 text-green-600'>Payment Success</h1>
                    <NavLink to={'/'}><Button>Back To Home</Button></NavLink>
            </div>
        </div>
    );
};

export default PaymentSucees;