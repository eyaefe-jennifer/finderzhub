import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  cartTotal: 0,
  totalItems: 0,
  add: ({ product, quantity }) =>
    set((state) => {
      // (Dogunfx-note-- the find index method is not doing the job well, so i change it to for)
      let existingProductIndex = -1;
      // state.cart.map((item, index) => item.id === product.id);

      for (let index = 0; index < state.cart.length; index++) {
        const item = state.cart[index];
        if (item.id == product.id) {
          existingProductIndex = index;
          break;
        }
      }

      const newQuantity = parseInt(quantity, 10);

      if (newQuantity <= 0) {
        // If the new quantity is less than or equal to zero, remove the item from the cart
        const updatedCart = state.cart.filter(
          (item) => item._id !== product._id
        );
        return {
          cart: updatedCart,
          cartTotal: calculateCartTotal(updatedCart),
          totalItems: calculateTotalItems(updatedCart),
        };
      }

      if (existingProductIndex !== -1) {
        // If the product already exists, update the quantity to the new quantity
        const existingProduct = state.cart[existingProductIndex];
        let updatedCart = [];
        //(dogunfx-note) get the product that was clicked on
        if (existingProduct.id == product.id) {
          // (dogunfx-note-- adjust the products quantity)
          existingProduct.quantity++;
          // replace with the current product
          updatedCart = state.cart.map((p) => {
            if (p.id == existingProduct.id) return existingProduct;
            return p;
          });
        } else {
          updatedCart = [...state.cart, existingProduct];
        }

        // console.log(updatedCart);

        // (Dogunfx-note-  Na Only God know wetin you dey use this line do before)
        // updatedCart[existingProductIndex].quantity = newQuantity;
        return {
          cart: updatedCart,
          cartTotal: calculateCartTotal(updatedCart),
          totalItems: calculateTotalItems(updatedCart),
        };
      } else {
        // If the product doesn't exist, add it to the cart with the new quantity
        // (dogunfx-note -- reduce code duplication)
        const newCart = [...state.cart, { ...product, quantity: newQuantity }];
        return {
          cart: newCart,
          cartTotal: calculateCartTotal(newCart),
          totalItems: calculateTotalItems(newCart),
        };
      }
    }),
  remove: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item._id !== productId);

      return {
        cart: updatedCart,
        cartTotal: calculateCartTotal(updatedCart),
        totalItems: calculateTotalItems(updatedCart),
      };
    }),
  removeAll: () => set({ cart: [], cartTotal: 0, totalItems: 0 }),
}));

function calculateCartTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateTotalItems(cart) {
  return cart.reduce((total, item) => total + 1, 0);
}

export default useCartStore;
