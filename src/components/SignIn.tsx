import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import UserAuthForm from './UserAuthForm'

export const SignIn = () => {
    return (
        <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
            <div className='flex flex-col space-y-2 text-center items-center'>
                <Image src="/logo.svg" alt='logo' width={35} height={35} className='max-auto' />
                <h1 className='text-2xl font-semibold tracking-tight'>
                    Welcome back
                </h1>
                <p className='text-sm max-w-xs mx-auto'>
                    By continuing, you are settig up a reddit account and agree to our User Agreement and Privacy Policy.
                </p>
            </div>
            {/* sign in form  */}
            <UserAuthForm />

            <p className='px-8 text-center text-sm text-zinc-700'>
                New to Reddit?{' '}
                <Link href="/sign-up" className="hover:text-zinc-900 text-sm underline underline-offset-4">Sign up</Link>
            </p>


        </div>
    )
}
