import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
  const [user, token] = useAuth();
  const [sneakers, setSneakers] = useState([]);

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

  return (
    <div className="sneakers-container">
      <h1>Home Page!</h1>
      <div className="sneakers-grid">
        {sneakers &&
          sneakers.map((sneaker) => (
            <div className="sneaker-item" key={sneaker.id}>
              <img src={`/assets/${sneaker.name.toLowerCase()}.jpg`} alt={sneaker.name} />
              <p>{sneaker.name}</p>
              <p>{sneaker.style}</p>
              <p>${sneaker.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;

