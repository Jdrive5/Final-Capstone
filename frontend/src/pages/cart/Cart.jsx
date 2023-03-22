import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    return total.toFixed(2);
  };

  return (
    <div className="cart">
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
      </div>
    </div>
  );
};

export default Cart;
