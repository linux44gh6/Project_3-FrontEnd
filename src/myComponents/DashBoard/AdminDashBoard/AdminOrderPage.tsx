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
import { useGetAllOrderQuery } from '@/Redux/Features/ProductMangement/getAllOrder';
import { Button } from '@/components/ui/button';

const AdminOrderPage = () => {
    const { data } = useGetAllOrderQuery(undefined)
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
                    <TableHead className="w-[100px]">Order</TableHead>
                    <TableHead>User Name</TableHead>
                    <TableHead>User Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.data?.map((order,index)=>(
                     <TableRow key={order._id}>
                     <TableCell className="font-medium">{index+1}</TableCell>
                     <TableCell>{order?.userId?.name}</TableCell>
                     <TableCell>{order?.userEmail}</TableCell>
                     <TableCell>{order?.status}</TableCell>
                     <TableCell className="text-right">{order?.totalAmount}</TableCell>
                     <TableCell className="text-right">
                        <Button>Shipping</Button>
                     </TableCell>
                 </TableRow>
                ))
                  
                }
            </TableBody>
        </Table>
    );
};

export default AdminOrderPage;
