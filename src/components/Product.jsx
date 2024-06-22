import ProductCard from "./ProductCard";

const Product = ({ products }) => {
  return (
    <div className="py-10">
      <div className=" flex flex-col items-center gap-4">
        <h2 className=" text-2xl bg-purple-900 text-white py-2 w-80 text-center">
          Shopping Everyday
        </h2>
        <span className="w-20 h-3 bg-black"></span>
        <p className=" max-w-[700px] text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore vero
          praesentium harum commodi, dolorum aut rem esse dolores quia
          voluptatem laborum accusantium at! Aliquid earum nihil delectus
          expedita enim eos ut distinctio! Tempora reiciendis ut magni aliquid
          delectus in exercitationem?
        </p>
      </div>
      <div className=" max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((product, index) => (
          <div className="" key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
