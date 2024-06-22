"use client";
import useCartStore from "@/stateManager/CartState";
import Image from "next/image";

const Cart = () => {
  const { cart, cartTotal, totalItems, remove, removeAll } = useCartStore(
    (state) => ({
      cart: state.cart,
      cartTotal: state.cartTotal,
      totalItems: state.totalItems,
      remove: state.remove,
      removeAll: state.removeAll,
    })
  );

  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index} className="flex items-center gap-4">
            <Image
              src={product.image}
              alt={product.title}
              className="size-16 rounded object-cover"
              width={150}
              height={150}
            />
            <div>
              <h3 className="text-sm text-gray-900">{product.title}</h3>
              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt className="inline">Size:</dt>
                  <dd className="inline">XXS</dd>
                </div>
                <div>
                  <dt className="inline">Color:</dt>
                  <dd className="inline">White</dd>
                </div>
              </dl>
            </div>
            <div className="flex flex-1 items-center justify-end gap-10 ">
              <p className="text-center text-xs text-gray-600">
                <span className="line-through text-sm">N</span>
                {product.price}
              </p>
              <span className="h-8 w-12 rounded border-gray-200 pt-2 bg-gray-50 mr-[20px] text-center text-xs text-gray-600">
                {product.quantity}
              </span>
              <button
                onClick={() => remove(product._id)}
                className="text-gray-600 transition hover:text-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.021-.165m-.332 0L5.84 19.674A2.25 2.25 0 008.084 21.75h7.832a2.25 2.25 0 002.244-2.077L19.23 5.79m-14.458 0a48.108 48.108 0 013.479-.397m0 0L9.12 4.317A2.25 2.25 0 0110.772 3.75h2.456a2.25 2.25 0 011.652.567l1.89 1.473m0 0a48.108 48.108 0 013.479.397"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <h3>Total: {cartTotal}</h3>
        <h3>Items: {totalItems}</h3>
      </div>
      <button onClick={removeAll} className="text-red-600">
        Remove All
      </button>
    </div>
  );
};

export default Cart;
