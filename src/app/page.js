"use client";
import { ProductsData } from "@/api/Api";
import Cart from "@/components/Cart";
import { HeroesPage } from "@/components/HeroesPage";
import Product from "@/components/Product";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await ProductsData();
        setProducts(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  return (
    <main className="">
      <HeroesPage />
      <Product products={products} />
    </main>
  );
}
