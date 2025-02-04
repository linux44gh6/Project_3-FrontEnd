import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { useGetAllProductsQuery } from '@/Redux/Features/ProductMangement/getAllProdcuts';

const AdminProduct = () => {
    const { data } = useGetAllProductsQuery(undefined)
    console.log(data?.data);
    // data?.data?.map((product) =>
    //     product?.products?.map((p)=>{
    //         console.log(p?.productId?.title);
    //     })
    // );
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Product</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.data?.map((order,index)=>(
                     <TableRow key={order._id}>
                     <TableCell className="font-medium">{index+1}</TableCell>
                     <TableCell>{order?.title}</TableCell>
                     <TableCell>{order?.rating}</TableCell>
                     <TableCell className="text-right">{order?.price}</TableCell>
                     <TableCell className="text-right">
                        <Button className='me-4'>Delete</Button>
                        <Button>Update</Button>
                     </TableCell>
                 </TableRow>
                ))
                  
                }
            </TableBody>
        </Table>
    );
};

export default AdminProduct;
