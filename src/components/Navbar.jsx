"use client";
import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";
import useCartStore from "@/stateManager/CartState";

export const Navbar = () => {
  const { totalItems } = useCartStore((state) => ({
    totalItems: state.totalItems,
  }));

  return (
    <div className="header">
      <div className="logo-section">
        <Link href="/">
          <h1 className="">FinderzHub</h1>
        </Link>
      </div>
      <div className="list-items">
        <ul>
          <li>Home</li>
          <li>Pages</li>
          <li>Shop</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="profile flex justify-between gap-3">
        <div className="relative">
          <Link href="/cart">
            <TiShoppingCart className="text-[30px]" />
          </Link>
          {totalItems > 0 && <span>{totalItems} </span>}
        </div>
        <button>Login</button>
        <p>{/* username */}</p>
      </div>
    </div>
  );
};
