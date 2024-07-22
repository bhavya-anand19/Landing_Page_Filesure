"use client";
import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    phone_no: z.string().regex(/^\d{10}$/, {
        message: 'Phone number must be exactly 10 digits long.',
    }),
    business_name: z.string().min(2, {
        message: 'Business Name must be at least 2 characters.',
    }),
    business_mail: z.string().email(),
});

const ContactForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {},
    });

    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <div className="bg-white shadow-lg p-9 rounded-md">
            <p className="text-xl font-bold mb-5">
                Leave your contacts and we will call you back within 30 minutes
            </p>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid md:grid-cols-2 gap-7 p-2 "
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-[0.96rem]'>User Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone_no"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-[0.96rem]'>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="business_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-[0.96rem]'>Business Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Business Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="business_mail"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-[0.96rem]'>Business Mail</FormLabel>
                                <FormControl>
                                    <Input placeholder="Business Mail" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="col-span-2 flex justify-center mt-4">
                        <Button size="lg" type="submit" className="w-full text-md">
                            Get Consultation
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default ContactForm;
