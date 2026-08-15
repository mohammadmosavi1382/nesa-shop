/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Product } from "../components/product/ProductCard";
import { products as initialProducts } from "../data/products";

interface ProductContextType {
  products: Product[];

  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: number) => void;

  getProductById: (
    productId: number
  ) => Product | undefined;
}

const ProductContext = createContext<
  ProductContextType | undefined
>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "nesa_products";

export function ProductProvider({
  children,
}: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>(
    () => {
      const savedProducts =
        localStorage.getItem(STORAGE_KEY);

      if (savedProducts) {
        try {
          return JSON.parse(savedProducts);
        } catch {
          return initialProducts;
        }
      }

      return initialProducts;
    }
  );

  const addProduct = useCallback(
    (product: Product) => {
      setProducts((currentProducts) => {
        const updatedProducts = [
          ...currentProducts,
          product,
        ];

        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(updatedProducts)
        );

        return updatedProducts;
      });
    },
    []
  );

  const updateProduct = useCallback(
    (updatedProduct: Product) => {
      setProducts((currentProducts) => {
        const updatedProducts =
          currentProducts.map((product) =>
            product.id === updatedProduct.id
              ? updatedProduct
              : product
          );

        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(updatedProducts)
        );

        return updatedProducts;
      });
    },
    []
  );

  const deleteProduct = useCallback(
    (productId: number) => {
      setProducts((currentProducts) => {
        const updatedProducts =
          currentProducts.filter(
            (product) =>
              product.id !== productId
          );

        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(updatedProducts)
        );

        return updatedProducts;
      });
    },
    []
  );

  const getProductById = useCallback(
    (productId: number) => {
      return products.find(
        (product) =>
          product.id === productId
      );
    },
    [products]
  );

  const value = useMemo(
    () => ({
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      getProductById,
    }),
    [
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      getProductById,
    ]
  );

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context =
    useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProducts must be used inside ProductProvider"
    );
  }

  return context;
}