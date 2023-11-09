
"use client"
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '@/redux/cartSlice'
import { loadStripe } from '@stripe/stripe-js'



const Cart = () => {
    const { products } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    let totalPrice = 0;
    products.map((product) => totalPrice += (product.quantity * product.price))

    const handleRemoveProduct = (product) => {
        dispatch(removeProduct({ id: product?.id }))
    }

    const handleCheckout = async () => {
        const lineItems = products.map((product) => {
            return {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: product.title
                    },
                    unit_amount: product.price * 100
                },
                quantity: product.quantity
            }
        })

        const res = await fetch("http://localhost:3000/api/checkout", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(lineItems)
        })

        const data = await res.json()

        const stripe = await stripePromise
        handleRemoveProduct()
        await stripe.redirectToCheckout({ sessionId: data.id })


    }
  return (
    <section className='px-4 py-8 max-w-screen-xl mx-auto'>
          <div>
            {products?.length > 0 && <h2>Your cart</h2>}
            <div>
                <div>
                    {products?.length > 0
                        ? products?.map((product) => {
                            return <div key={product.id}>
                                <div onClick={() => handleRemoveProduct(product)}>
                                    <AiOutlineClose />
                                </div>
                                 <div>
                                    <h3>{product?.title}</h3>
                                    <div>
                                        <span>
                                            {product.quantity} x
                                        </span>
                                        <span>
                                            <span>$</span>
                                            {product?.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        })
                        : <h1>No products in the cart. Go Shopping!</h1>
                    }
                </div>
                <div>
                    <div>
                        Total products: {products?.length}
                    </div>
                    <div>
                        <span>
                            Subtotal: ${totalPrice > 100 ? totalPrice : totalPrice + 5}
                        </span>
                        <span onClick={handleCheckout} disabled={products?.length === 0}>
                            Order
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cart