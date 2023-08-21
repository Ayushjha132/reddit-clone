
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { buttonVariants } from './ui/Button';
import { getAuthSession } from '@/lib/auth';


const Navbar = async () => {

    const session = getAuthSession();
    return (
        <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
            <div className=' container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
                <Link href="/" className='flex gap-2 items-center'>
                    <Image src="/logo.svg" alt='logo' width={35} height={35}/>
                    <p className='hidden text-zinc-950 text-xl font-medium md:block'>
                        reddit
                    </p>
                </Link>

                {/* Search Bar */}
                {await session ? (<p>looged in</p>) : (<Link href="/sign-in" className={buttonVariants() }>Sign In</Link> )}
                
            </div>
        </div>
    )
}

export default Navbar; 