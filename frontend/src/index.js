import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>  
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
