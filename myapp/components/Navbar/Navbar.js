'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {signIn, signOut, useSession} from 'next-auth/react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const {data: session} = useSession()
  const products = useSelector((state) => state.cart.products)


  return (
    <header className='section-padding'>
        <div className='flex justify-between items-center mx-auto max-w-screen-xl'>
        <Link href={'/'}>
      <span className='text-3xl font-semibold'>
        <span className='text-oran'>Wallet</span>
        <span className='text-secondary'>World</span>
      </span>
    </Link>
        <div className='flex gap-4'>
        {
        session?.user
                    ? (
                        <div className='flex gap-4 items-center'>
                        <Link className='flex flex-col relative' href={'/cart'}>
                          <span className='text-black absolute -top-4 -right-2 bg-white rounded-full px-2'>
                            {products?.length}
                          </span>
                          <AiOutlineShoppingCart />
                        </Link>
                            <Link href={'/cart'}>
                            <AiOutlineHeart />
                            </Link>
                            <span>{session?.user.email}</span>
                          <button onClick={() => {signOut()}}>Logout</button>
                        </div>
                    ) : (
                        <>
                        <Link href={'/register'}>Register</Link>
                        <Link href={'/login'}>Login</Link>
                        </>
                    )
                }
        </div>
        </div>
    </header>
  )
}

export default Navbar