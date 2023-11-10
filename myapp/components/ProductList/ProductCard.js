'use client'
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product: { title, _id, imageUrl } }) => {
  return (
    <div className='w-full h-92 p-3'>
      <Link href={`/product/${_id}`} className='relative flex w-96 flex-col text-gray-700'>
        <div className='relative mx-4 mt-4 h-96 overflow-hidden bg-white text-gray-700'>
          <img className="h-full w-full object-cover" src={imageUrl} alt={title} />
        </div>
        <div className='mt-8 mb-8'>
          <h3 className='text-gray-500 text-md tracking-widest title-font mb-1 px-4 text-center'>{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
