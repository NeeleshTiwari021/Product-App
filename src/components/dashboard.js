import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../redux/productSlice';
import SmallProduct from './smallProduct';

const Dashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.product || []);
  const productStatus = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProduct());
    }
  }, [productStatus, dispatch]);

  return (
    <div>
      <div className="bg-amber-200 rounded-md p-4 flex justify-between items-center">
        <div>
          <p className="text-3xl font-bold">Grab Upon 50% Off on Big Billion Days</p>
          <button className=" mt-3 rounded-lg bg-green-900 text-white py-1 px-4 transition-all duration-200 hover:bg-green-950 text-lg">
            Buy Now
          </button>
        </div>
        <img className=' h-60' src='https://static.vecteezy.com/system/resources/thumbnails/024/558/883/small/black-wireless-headphones-isolated-on-transparent-background-ai-generated-png.png' alt=''/>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl">Best Deals</p>
        {productStatus === 'loading' && <p>Loading...</p>}
        {productStatus === 'failed' && <p>Error: {error}</p>}
        <div className="grid grid-cols-4 gap-2">
          {products.map((product) => (
            <SmallProduct key={product.id} products={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
