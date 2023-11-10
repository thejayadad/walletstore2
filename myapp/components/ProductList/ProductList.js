'use client'
import ProductCard from "./ProductCard"

import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('/api/product'); 
          setProducts(response.data); 
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);

  return (
    <section className="py-8 max-w-screen-xl mx-auto flex flex-col items-center">
        <h2 className="text-center">All Wallets</h2>
        <div className="items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[600px] gap-2">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;