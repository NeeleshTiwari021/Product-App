import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SmallProduct = ({ products }) => {
  return (
    <Link to={`/product/${products.id}`} className="flex flex-col gap-1 bg-gray-200 rounded-lg">
      <img
        src={products.thumbnail || 'https://via.placeholder.com/150'}
        alt={products.slug || 'No Title'}
      />
      <div className="p-2 flex justify-between gap-2">
        <div>
          <p className="font-medium text-lg">{products.slug || 'No Title'}</p>
          <p className="text-sm">{products.title || 'Uncategorized'}</p>
          <div className="flex items-center">
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <p className="ml-1">(121)</p>
          </div>
          <button className="mt-2 rounded-xl py-1 px-4 text-green-500 border border-green-500">
            Buy Now
          </button>
        </div>
        <div>
          <p className="font-semibold">$32.03</p>
        </div>
      </div>
    </Link>
  );
};

export default SmallProduct;
