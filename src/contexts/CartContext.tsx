/* eslint-disable react-refresh/only-export-components */
import {
    createContext,
    useContext,
    useMemo,
    useReducer,
    type ReactNode,
  } from "react";
  
  import type { Product } from "../components/product/ProductCard";
  
  interface CartItem {
    product: Product;
    quantity: number;
  }
  
  interface CartState {
    items: CartItem[];
  }
  
  type CartAction =
    | {
        type: "ADD_TO_CART";
        product: Product;
      }
    | {
        type: "INCREASE";
        productId: number;
      }
    | {
        type: "DECREASE";
        productId: number;
      }
    | {
        type: "REMOVE";
        productId: number;
      }
    | {
        type: "CLEAR";
      };
  
  interface CartContextType {
    items: CartItem[];
    totalItems: number;
    totalPrice: number;
  
    addToCart: (product: Product) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
  }
  
  const CartContext = createContext<CartContextType | undefined>(
    undefined
  );
  
  const initialState: CartState = {
    items: [],
  };
  
  function cartReducer(
    state: CartState,
    action: CartAction
  ): CartState {
    switch (action.type) {
      case "ADD_TO_CART": {
        const existingItem = state.items.find(
          (item) => item.product.id === action.product.id
        );
  
        if (existingItem) {
          return {
            ...state,
            items: state.items.map((item) =>
              item.product.id === action.product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
          };
        }
  
        return {
          ...state,
          items: [
            ...state.items,
            {
              product: action.product,
              quantity: 1,
            },
          ],
        };
      }
  
      case "INCREASE":
        return {
          ...state,
          items: state.items.map((item) =>
            item.product.id === action.productId
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
  
      case "DECREASE":
        return {
          ...state,
          items: state.items
            .map((item) =>
              item.product.id === action.productId
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
        };
  
      case "REMOVE":
        return {
          ...state,
          items: state.items.filter(
            (item) => item.product.id !== action.productId
          ),
        };
  
      case "CLEAR":
        return initialState;
  
      default:
        return state;
    }
  }
  
  interface CartProviderProps {
    children: ReactNode;
  }
  
  export function CartProvider({
    children,
  }: CartProviderProps) {
    const [state, dispatch] = useReducer(
      cartReducer,
      initialState
    );
  
    const totalItems = useMemo(
      () =>
        state.items.reduce(
          (total, item) => total + item.quantity,
          0
        ),
      [state.items]
    );
  
    const totalPrice = useMemo(
      () =>
        state.items.reduce(
          (total, item) =>
            total + item.product.price * item.quantity,
          0
        ),
      [state.items]
    );
  
    const value = {
      items: state.items,
      totalItems,
      totalPrice,
  
      addToCart: (product: Product) =>
        dispatch({
          type: "ADD_TO_CART",
          product,
        }),
  
      increaseQuantity: (productId: number) =>
        dispatch({
          type: "INCREASE",
          productId,
        }),
  
      decreaseQuantity: (productId: number) =>
        dispatch({
          type: "DECREASE",
          productId,
        }),
  
      removeFromCart: (productId: number) =>
        dispatch({
          type: "REMOVE",
          productId,
        }),
  
      clearCart: () =>
        dispatch({
          type: "CLEAR",
        }),
    };
  
    return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
    );
  }
  
  export function useCart() {
    const context = useContext(CartContext);
  
    if (!context) {
      throw new Error(
        "useCart must be used inside CartProvider"
      );
    }
  
    return context;
  }