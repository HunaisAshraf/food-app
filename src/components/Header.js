import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <a className="logo" href="/">
        Logo
      </a>
      <ul>
      <li> <Link to="/">
          Home
        </Link></li>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
