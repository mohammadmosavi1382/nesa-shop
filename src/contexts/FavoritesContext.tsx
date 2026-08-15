/* eslint-disable react-refresh/only-export-components */
import {
    createContext,
    useContext,
    useMemo,
    useState,
    type ReactNode,
  } from "react";
  
  import type { Product } from "../components/product/ProductCard";
  
  interface FavoritesContextType {
    favorites: Product[];
    favoritesCount: number;
    isFavorite: (productId: number) => boolean;
    toggleFavorite: (product: Product) => void;
    removeFavorite: (productId: number) => void;
    clearFavorites: () => void;
  }
  
  const FavoritesContext = createContext<
    FavoritesContextType | undefined
  >(undefined);
  
  interface FavoritesProviderProps {
    children: ReactNode;
  }
  
  export function FavoritesProvider({
    children,
  }: FavoritesProviderProps) {
    const [favorites, setFavorites] = useState<Product[]>([]);
  
    const favoritesCount = useMemo(
      () => favorites.length,
      [favorites]
    );
  
    const isFavorite = (productId: number) => {
      return favorites.some(
        (product) => product.id === productId
      );
    };
  
    const toggleFavorite = (product: Product) => {
      setFavorites((currentFavorites) => {
        const exists = currentFavorites.some(
          (item) => item.id === product.id
        );
  
        if (exists) {
          return currentFavorites.filter(
            (item) => item.id !== product.id
          );
        }
  
        return [...currentFavorites, product];
      });
    };
  
    const removeFavorite = (productId: number) => {
      setFavorites((currentFavorites) =>
        currentFavorites.filter(
          (product) => product.id !== productId
        )
      );
    };
  
    const clearFavorites = () => {
      setFavorites([]);
    };
  
    const value = {
      favorites,
      favoritesCount,
      isFavorite,
      toggleFavorite,
      removeFavorite,
      clearFavorites,
    };
  
    return (
      <FavoritesContext.Provider value={value}>
        {children}
      </FavoritesContext.Provider>
    );
  }
  
  export function useFavorites() {
    const context = useContext(FavoritesContext);
  
    if (!context) {
      throw new Error(
        "useFavorites must be used inside FavoritesProvider"
      );
    }
  
    return context;
  }