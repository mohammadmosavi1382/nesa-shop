import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./contexts/CartContext";
import "./index.css";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { ProductProvider } from "./contexts/ProductContext";
import { AuthProvider } from "./contexts/AuthContext";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
 <CartProvider>
  <FavoritesProvider>
    <BrowserRouter>
    <ProductProvider>
    <AuthProvider>
      <App />
      </AuthProvider>
      </ProductProvider>
    </BrowserRouter>
  </FavoritesProvider>
</CartProvider>
</StrictMode>
);