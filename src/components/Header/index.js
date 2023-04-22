import "./index.css";
import { Title } from "./Title";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector(store => store.cart.items);
  return (
    <div className="header">
      <Title />
      <div className="header-items">
        <h3>
          <Link to="/">Home </Link>
        </h3>
        <h3>
          {" "}
          <Link to="/about">About Us </Link>
        </h3>
        <h3>SignIn</h3>
        <Link to="/cart"> <h3>Cart-{cartItems.length} items</h3></Link>
        <h3>
          <Link to="/instamart">Instamart</Link>
        </h3>
      </div>
    </div>
  );
};

export default Header;
