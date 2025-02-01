import { useGetAllProductsQuery } from '@/Redux/Features/ProductMangement/getAllProdcuts';
import React from 'react';

const Featured = () => {
    const { data: product } = useGetAllProductsQuery(undefined);
    console.log(product);
    return (
        <div className='mt-10'>
           <h2 className="text-4xl font-bold text-center mb-6">Featured Products</h2>
        </div>
    );
};

export default Featured;