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
    <header className='px-4 py-12 bg-blue-300'>
        <div className='flex justify-between items-center mx-auto max-w-screen-xl'>
        <Link href={'/'}>WalletWorld</Link>
        <div className='flex gap-4'>
        {
        session?.user
                    ? (
                        <div className='flex gap-4 items-center'>
                            <Link className='flex flex-col ' href={'/cart'}>
                                <span className='text-black'>
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