import { useGetAllProductsQuery } from '@/Redux/Features/ProductMangement/getAllProdcuts';
import React from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button';
  
const Featured = () => {
    const { data: product } = useGetAllProductsQuery(undefined);
    console.log(product);
    return (
        <div className='mt-10'>
           <h2 className="text-4xl font-bold text-center mb-6">Featured Products</h2>
           <div>
                <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2">
                     {product?.data?.map((product) => (
                         <Card key={product.id}>
                         <CardHeader>
                          <img className='' src={product.image} alt="" />
                         </CardHeader>
                         <CardContent>
                         <CardTitle>${product.price}</CardTitle>
                         <CardTitle>{product.title}</CardTitle>
                         </CardContent>
                         <CardFooter className='flex justify-between'>
                            <Button className="bg-black text-white">Add to Cart</Button>
                            <Button className="bg-black text-white">Buy Now</Button>
                         </CardFooter>
                       </Card>
                     ))}
                </div>
           </div>
           <Button className="mt-10 bg-black text-white flex justify-self-center">View All Products</Button>
        </div>
    );
};

export default Featured;