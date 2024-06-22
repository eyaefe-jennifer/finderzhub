import axios from "axios";

export async function ProductsData() {
  const products = await axios.get("https://fakestoreapi.com/products");
  return products;
  
}

export async function GetProductById(id) {
  const product = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return product;
}

export async function GetCategories() {
  const category = await axios.get(`https://fakestoreapi.com/products/categories`);
  return category;
}


export async function GetAllProductIds() {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    return response.data.map((product) => ({ id: product.id.toString() }));
  } catch (error) {
    console.error('Error fetching product IDs:', error);
    return [];
  }
}

