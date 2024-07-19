import "./Head.css";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";
// import { useEffect, useState } from "react";
// import { AiOutlineArrowUp } from "react-icons/ai";
function Head() {
  // const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="head-container ">
      <div className="header_2">
        <div className="logo">
          <NavLink to="/home">
            <img src="//pintola.in/cdn/shop/files/Pintola_Logo_PNG_1600x.png?v=1655118347" />
          </NavLink>
        </div>
        <div className="list">
          <div className="link">
            <NavLink to="/store">
              Store
              <span>
                <AiOutlineArrowDown />
              </span>
            </NavLink>
          </div>
          <div>
            <NavLink to="/pintola">Why Pintola ?</NavLink>
          </div>
          <div>
            <NavLink to="/recipes">Recipes</NavLink>
          </div>
          <div>
            <NavLink to="/about">About Us</NavLink>
          </div>
          <div>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </div>
        <div className="trackOrder">
          <Link to="/trackOrder">Track Your Order</Link>
        </div>
        <div className="cart">cart</div>
      </div>
    </div>
  );
}

export default Head;
