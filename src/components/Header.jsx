import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const isOnline = useOnlineStatus();
  return (
    <div className="flex justify-between items-center bg-white shadow-lg">
      <div className="py-1 w-44 h-24 ml-10">
        <img src={LOGO_URL} alt="swiggy-logo" className="w-24 h-24" />
      </div>
      <div className="px-10 py">
        <ul className="flex py-10">
          <li className=" px-2">
              <span>{isOnline ? "✅ Online" : "❌ Offline"}</span>
          </li  >
          <Link className=" px-2" to="/">
            <li>Home</li>
          </Link>
          <Link className=" px-2" to="/about">
            <li>About us</li>
          </Link>
          <Link className=" px-2" to="/contact">
            <li>Contact us</li>
          </Link>
          <Link className=" px-2" to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
