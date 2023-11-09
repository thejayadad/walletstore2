'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { addProduct } from '@/redux/cartSlice';

const ProductDetail = (ctx) => {
    const [product, setProduct] = useState(null);
    const id = ctx.params.id
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()


    
    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await axios.get(`/api/product/${id}`); 
            setProduct(response.data);
          } catch (error) {
            console.error('Error fetching product details:', error);
          }
        };
    
        fetchProduct();
      }, [id]);

      const handleAddToCart = () => {
        dispatch(addProduct({
            ...product,
            quantity: 1,
            price: product.price
        }))
    }

  return (
    <section className='max-w-screen-xl mx-auto px-4 py-8'>
        {product ? (
        <>
          <h2>{product.title}</h2>
          <img src={product.imageUrl} alt={product.title} />
          <p>{product.desc}</p>
          <span className="text-[20px] text-[#333]">Price: <span className='text-orange-500 ml-2'>${product?.price}</span></span>
          <button onClick={handleAddToCart}>Add To Cart</button>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </section>
  )
}

export default ProductDetail