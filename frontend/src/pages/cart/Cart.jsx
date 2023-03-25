import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./Cart.css";
import { BsCart4 } from "react-icons/bs";
import axios from "axios";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(0);

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    return total.toFixed(2);
  };

  useEffect(() => {
    const newCartItems = cart.reduce((total, item) => total + item.quanity, 0);
    setCartItems(newCartItems);
  }, [cart]);

  const handleOrder = () => {
    const stripeLink = "https://buy.stripe.com/test_aEU9BNcCv6cT5QQ6oo";
    window.open(stripeLink, "_blank");
  }

  return (
    <div className="cart">
      <span className="cart">
        <Link to="/cart">
          Cart
          <BsCart4 size={20}/>
          <p>{cartItems}</p>
        </Link>
      </span>
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>Price: ${parseFloat(item.price).toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>
      <div className="cart-total">
        <h3>Total: ${calculateTotal()}</h3>
        <button onClick={handleOrder}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
