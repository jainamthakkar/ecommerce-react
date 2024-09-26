import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)} 
      className="productCard cursor-pointer flex flex-col items-center shadow-md bg-white rounded-lg overflow-hidden w-[15rem] mx-3 transition-all mb-4"
    >
      <div className="h-[20rem]">
        <img
          className="object-cover object-left-top w-full h-full"
          src={product.imageUrl}
          alt="p-img"
        />
      </div>

      <div className="textPart bg-white p-4">
        <div>
          <h3 className="font-bold opacity-60 text-gray-900">
            {product.brand}
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            {product.title} 
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.discountedPrice}/-</p>
          <p className="opacity-50 line-through">{product.price}/-</p>
          <p className="text-green-600 font-semibold">
            {product.discountPersent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
