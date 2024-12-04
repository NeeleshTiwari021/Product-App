import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../redux/productSlice';
import { FaStar } from 'react-icons/fa';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productDetails);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-2 gap-2 p-2">
      <div>
        <img
          src={product?.thumbnail || "https://t4.ftcdn.net/jpg/03/28/37/93/360_F_328379347_xEKgEB2wkjAJmcqSTmrg4uKxfWrlL7D9.jpg"}
          alt={product?.title || "No Title"}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-2xl font-semibold">{product?.title || "No Title"}</p>
          <p>{product?.body || "No Description"}</p>
          <div className="flex items-center">
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <p className="ml-1">(121)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
