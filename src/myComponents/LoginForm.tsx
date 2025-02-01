import React from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
type TLoginProps = {
    email: string;
    password: string;
}
const LoginForm = () => {
     const form = useForm<{ email: string,password:string }>({
            defaultValues: {
              email: "john.doe@example.com",
              password: "user1234",
            },
          });
          const onSubmit = async (data:TLoginProps) => {
            console.log(data);
          };
    return (
        <div className='w-1/2 mx-auto'>
        <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       <FormField
         control={form.control}
         name="email"
         render={({field }) => (
           <FormItem className='flex items-center justify-center'>
             <FormLabel>Email</FormLabel>
             <FormControl>
             <Input type='email' placeholder='Type Your Email' {...field}></Input>
             </FormControl>
           </FormItem>
         )}
       />
       <FormField
         control={form.control}
         name="password"
         render={({field }) => (
           <FormItem>
             <FormLabel>Password</FormLabel>
             <FormControl>
             <Input type='password' placeholder='Type Your Email' {...field}></Input>
             </FormControl>
           </FormItem>
         )}
       />
       <Button type="submit">Submit</Button>
     </form>
   </Form>
  </div>
    );
};

export default LoginForm;