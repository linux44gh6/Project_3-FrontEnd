import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetAllProductsQuery } from '@/Redux/Features/ProductMangement/getAllProdcuts';
import { TProduct } from '@/Types/productsType';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
    const navigate = useNavigate();
    const {data:product}=useGetAllProductsQuery(undefined)
    const handleToShowDetails = (id:string) => {
        console.log('Show Details');
        console.log(id);
       navigate(`/details/${id}`);
    }
    return (
        <div>
                <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2">
                     {product?.data?.map((product:TProduct) => (
                         <Card key={product._id}>
                         <CardHeader>
                          <img className='' src={product.image} alt="" />
                         </CardHeader>
                         <CardContent>
                         <CardTitle>${product.price}</CardTitle>
                         <CardTitle>{product.title}</CardTitle>
                         </CardContent>
                         <CardFooter className='flex justify-between'>
                            <Button onClick={()=>handleToShowDetails(product?._id)}  className=" bg-white text-black border border-black w-full hover:bg-white hover:scale-105 transition duration-200">View Details</Button>
                         </CardFooter>
                       </Card>
                     ))}
                </div>
           </div>
    );
};

export default AllProducts;