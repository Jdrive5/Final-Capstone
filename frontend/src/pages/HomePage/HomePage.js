import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./HomePage.css";
import CartContext from "../../context/CartContext";

const HomePage = () => {
  const [user, token] = useAuth();
  const [sneakers, setSneakers] = useState([]);
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/sneakers/all/");
        setSneakers(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchSneakers();
  }, []);

  const handleAddToCart = (sneaker) => {
    addToCart(sneaker)
  }

  return (
    <div className="sneakers-container">
      <h1>Home Page!</h1>
      <div className="sneakers-grid">
        {sneakers &&
          sneakers.map((sneaker) => (
            <div className="sneaker-item" key={sneaker.id}>
              <img src={sneaker.image} alt={sneaker.name} />
              <p>{sneaker.name}</p>
              <p>{sneaker.style}</p>
              <p>${sneaker.price}</p>
              <p>{sneaker.size}</p>
              <button onClick={() => handleAddToCart(sneaker)}>Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;

