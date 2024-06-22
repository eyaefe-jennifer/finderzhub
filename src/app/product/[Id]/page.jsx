"use client";
import { GetCategories, GetProductById } from "../../../api/Api";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import SkeletonEffect from "@/components/SkeletonEffect";
import Category from "@/components/Category";

const Product = ({ params }) => {
  const path = usePathname();
  const [productDetails, setProductDetails] = useState();
  // const [categoryList, setCategoryList] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params?.Id) {
      productId();
    }
  }, [params?.Id]);

  const productId = async () => {
    try {
      const resp = await GetProductById(params?.Id);
      setProductDetails(resp.data);
      // categoryId();
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setError(error);
      setLoading(false);
    }
  };

  // const categoryId = async () => {
  //   const res = await GetCategories(productDetails?.category);
  //   console.log("categories", res.data);
  //   setCategoryList(res.data);
  // };

  if (loading)
    return (
      <div>
        <SkeletonEffect />
      </div>
    );
  if (error) return <div>Error fetching product data.</div>;
  return (
    <div>
      <ProductDetails productDetails={productDetails} />
      <div className="">
        <Category categoryList={[0]} />
      </div>
    </div>
  );
};

export default Product;
