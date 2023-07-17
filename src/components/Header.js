import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { useState } from "react";

const Header = () => {

  return (
    <div className="flex justify-between items-center px-20 py-5 bg-yellow-500 text-green-950">
      <Link to="/" className="text-3xl font-bold">
        Logo
      </Link>
      
      <ul className="flex">
        <li className="mx-3 font-bold">
          <Link to="/">Home</Link>
        </li>
        <Link to="/about" className="mx-3 font-bold">
          <li>About</li>
        </Link>
        <Link to="/cart" className="mx-3 font-bold">
          <li>Cart</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
