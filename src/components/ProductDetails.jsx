"use client";
import useCartStore from "@/stateManager/CartState";
import Image from "next/image";
import { useState } from "react";
import { MdStarRate } from "react-icons/md";

const ProductDetails = ({ productDetails }) => {
  const { cart, add } = useCartStore((state) => ({
    cart: state.cart,
    add: state.add,
    remove: state.remove,
  }));
  const [baseQty, setBaseQty] = useState(1);

  // console.log("Current cart:", cart);

  const handleAddToCart = () => {
    add({ product: productDetails, quantity: baseQty });
  };

  const handleRemove = () => {
    if (baseQty > 1) {
      setBaseQty(baseQty - 1);
    }
  };

  const handleAddQty = () => {
    setBaseQty(baseQty + 1);
  };

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="">
          <Image
            src={productDetails.image}
            alt={productDetails.title}
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
            priority
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-10 ">
          <div className="">
            <h1 className="text-4xl font-bold">{productDetails.title}</h1>
            <div className="">
              <p className=" font-semibold ">
                <span className=" line-through text-sm">N</span>
                {productDetails.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
            </div>
            <p className="text-xs text-gray-500">
              Rating: {productDetails.rating?.rate} (
              {productDetails.rating?.count} reviews)
            </p>
          </div>
          <p className="text-base text-gray-500">
            {productDetails.description}
          </p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p>Quantity</p>
              <div className="flex items-center gap-4 text-xs font-semibold">
                <button
                  onClick={handleRemove}
                  className="border h-5 font-normal text-lg flex items-center justify-center gap-2 px-2 hover:bg-purple-900 hover:text-white cursor-pointer duration-300 active:bg-purple-900"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={handleAddQty}
                  className="border h-5 font-normal text-lg flex items-center justify-center gap-2 px-2 hover:bg-purple-900 hover:text-white cursor-pointer duration-300 active:bg-purple-900"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-purple-900 text-white py-3 px-6 active:bg-purple-900 rounded-md cursor-pointer"
            >
              Add to cart
            </button>
          </div>
          <p className=" text-base text-gray-500">
            Category:
            <span className="font-medium capitalize ">
              {productDetails.category}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
