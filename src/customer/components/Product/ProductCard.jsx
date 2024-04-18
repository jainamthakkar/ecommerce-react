import React from "react";
import "./ProductCard.css"; 

const ProductCard = () => {
  return (
    <div className="productCard cursor-pointer flex flex-col items-center bg-white rounded-lg overflow-hidden w-[15rem] mx-3 transition-all mb-4">
      <div className="h-[20rem]">
        <img
          className="object-cover object-left-top w-full h-full"
          src="https://www.ethnicplus.in/media/catalog/product/cache/77b9a44d9276879ccdde931a01149182/r/-/r-1.jpg"
          alt="p-img"
        />
      </div>

      <div className="textPart bg-white p-4">
        <div>
          <h3 className="font-bold opacity-60 text-gray-900">Aasopalav</h3>
          <p className="mt-2 text-sm text-gray-500">
            Red Georgette Party Wear Lehenga Choli With Dupatta
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">199/-</p>
          <p className="opacity-50 line-through"> 1999/-</p>
          <p className="text-green-600 font-semibold">70% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
