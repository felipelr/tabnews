"use client";

import React from "react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useLoginHandler } from "@/hooks/login/use-login-handler";

const formSchema = z.object({
    email: z.string().email({
        message: "Email must be a valid email",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters",
    }),
})

export const LoginForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })
    const { submitting, handleLogin } = useLoginHandler()

    const onSubmit = ({ email, password, ...values }: z.infer<typeof formSchema>) => {
        handleLogin(email, password)
    }
    return (
        <div >
            <Form {...form}>
                <form data-testid="login-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input data-testid="input-email" type="email" placeholder="xxx@xxx.com" {...field} />
                                </FormControl>
                                <FormDescription>This is your e-mail.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input data-testid="input-password" type="password" placeholder="******" {...field} />
                                </FormControl>
                                <FormDescription>This is your password.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant="default" type="submit">{submitting ? 'Submitting' : 'Submit'}</Button>
                </form>
            </Form>
        </div>
    )
}