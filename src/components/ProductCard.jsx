"use client";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import useCartStore from "@/stateManager/CartState";

const ProductCard = ({ product }) => {
  // const _id = product.title;
  // const idString = (id) => {
  //   return String(id).toLowerCase().split(" ").join("");
  // };
  // const rootId = idString(_id);

  const { add: addToCart } = useCartStore();

  return (
    <div className=" group ">
      <Link href={`/product/${product.id}`}>
        <div className=" w-full h-96 cursor-pointer ">
          <Image
            src={product.image}
            alt="productImage"
            width={150}
            height={150}
            className="w-[80%] h-[80%] object-cover group-hover:scale-110 duration-500"
          />
        </div>
      </Link>
      <div className="w-full border-[1px] px-2 ">
        <div className="flex justify-between items-center ">
          <div className="">
            <h2 className="font-bold text-sm">
              {product.title.substring(0, 18)}{" "}
            </h2>
          </div>
          <div className="flex justify-end gap-2 relative w-28 overflow-hidden  text-sm">
            <div className="flex gap-2 transform  group-hover:translate-x-24 transition-transform duration-500">
              <p className=" font-semibold ">
                <span className=" line-through text-sm">N</span>
                {product.price}
              </p>
            </div>

            <p
              onClick={addToCart}
              className="absolute z-20  text-gray-500 hover:text-gr flex items-center gap-1 top-0  text-sm transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
            >
              add to Cart
              <span>
                <GoArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div className="">
          <p> {product.category} </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
