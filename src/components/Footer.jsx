import { Link } from "react-router-dom";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div>
        <Link to="/home">
          <img src="//pintola.in/cdn/shop/files/Pintola_Logo_PNG_1600x.png?v=1655118347" />
        </Link>
        <p>Follow Us:</p>
        <div className="part_1">
          <FiTwitter />
          <FiInstagram />
          <FiYoutube />
          <FiFacebook />
          <FiLinkedin />
        </div>
      </div>
      <div>
        <h2>Shop</h2>
        <h4>All Products</h4>
        <h4>Peanuts Butter</h4>
        <h4>Breakfast Cereals</h4>
        <h4>Premium Nuts Butters</h4>
        <h4>Wood Pressed Oil</h4>
      </div>
      <div>part3</div>
      <div>part4</div>
      <div>part5</div>
    </footer>
  );
}

export default Footer;
