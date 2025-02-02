
import { Card, CardContent,  CardHeader } from '@/components/ui/card';
import { RootState } from '@/Redux/Store';
import React from 'react';

import { useSelector } from 'react-redux';
import { FaRegTrashCan } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
const Cart = () => {
    const data=useSelector((state:RootState)=>state.cart)
    console.log(data);
    const sumTotal=data.items.map((item)=>item.price*item.totalQuantity).reduce((a,b)=>a+b,0).toFixed(2)
    console.log(sumTotal);
    return (
        <div className='mt-10 px-5 flex justify-between '>
           <div className='flex flex-col gap-5 w-1/2 '>
           {
                data.items.map((item)=>{
                    return(
                     <div key={item.id} className='flex flex-col '>
                          <Card className='flex w-full  mb-5'>
                        <CardHeader className=''>
                            <img className='w-24' src={item.image} alt="" />
                        </CardHeader>
                        <CardContent className=''>
                        <p className='text-2xl font-semibold mb-2'>{item.title}</p>
                            <p className='font-semibold'>${item.price}</p>
                           <div className='flex gap-10 mt-10 items-center'>
                           <div className="flex items-center justify-between border border-black  rounded-md">
                        <button className="px-3 bg-slate-200 py-1 font-bold text-xl text-black rounded-l">-</button>
                        <span className="px-4">{item.totalQuantity}</span>
                        <button className="px-3 py-1 font-bold text-xl bg-slate-200 text-black rounded-r">+</button>
                    </div>
                       <button className=' text-2xl'><FaRegTrashCan/></button>
                           </div>
                        </CardContent>
                       <CardContent>
                        <h1 className='text-2xl font-semibold'>${item.price*item.totalQuantity}</h1>
                       </CardContent>
                       </Card>
                     </div>
                    )
                })
            }
           </div>
           <div>
            <Card className=' w-full  mb-5'>
                <CardHeader>
                    <h1 className='text-3xl font-bold'>Order summary</h1>
                    <hr className='mb-10' />
                    <hr />
                </CardHeader>
                <CardContent>
                <p>Taxes, discounts and shipping calculated at checkout</p>
                    <div className='flex justify-between mt-10 mb-5'>
                        <h1 className='text-2xl font-bold'>SubTotal:</h1>
                        <h2 className='text-2xl font-bold'>${sumTotal}</h2>
                    </div>
                    <Button className='w-full'>CheckOut</Button>
                </CardContent>
            </Card>
           </div>
        </div>
    );
};

export default Cart;