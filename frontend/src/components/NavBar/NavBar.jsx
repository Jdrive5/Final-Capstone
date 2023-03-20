import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import {BsCart4} from "react-icons/bs"


const brand = (
  <div className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <h2>
            Just For Kicks
            </h2>
          </Link>
        </div>
);

const cart = (
  <span className="cart">
              <Link to="/cart">
                Cart
                <BsCart4 size={20}/>
                <p>0</p>
              </Link>
            </span>
);


const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <navbar>
      <div className="navBar">
        {brand}

        <nav>    
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="rightLinks">
            <span className="links">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/order-history">My Orders</Link>
              {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
            </span>
            {cart}
          </div>
        </nav>

      </div>


    </navbar>
  );
};

export default Navbar;
