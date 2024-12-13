import React, { useState } from 'react';
import Image from './Image';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
      {/* Logo */}
      <Link to='/' className='flex items-center gap-4 text-2xl font-bold'>
       <Image src='logo.png' alt='logo' w={32} h={32} />
        <span>lamalog</span>
      </Link>
      {/* Mobile Menu */}
      <div className='md:hidden'>
        {/* Mobile Button */}
        <div className='cursor-pointer text-4xl'
        onClick={() => setOpen(prev => !prev)}
        >
          { open ? "X" : "≡"}
        </div>
        <div className={`w-full h-screen flex flex-col items-center gap-8 font-medium text-lg justify-center absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
        <Link href="/">Home</Link>
        <Link href="/">Trending</Link>
        <Link href="/">Most Popular</Link>
        <Link href="/">About</Link>
        <Link href="">
          <button className='px-4 py-2 rounded-3xl bg-blue-800 text-zinc-50'>Login 👋</button>
        </Link>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
        <Link href="/">Home</Link>
        <Link href="/">Trending</Link>
        <Link href="/">Most Popular</Link>
        <Link href="/">About</Link>

        <SignedOut>
        <Link to="/login">
          <button className='px-4 py-2 rounded-3xl bg-blue-800 text-zinc-50'>Login 👋</button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
    </div>
  )
}
