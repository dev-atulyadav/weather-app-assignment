import React from "react";
import { MdMenuOpen } from "react-icons/md";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <button className="sm:hidden text-4xl">
        <MdMenuOpen />
      </button>
      <ul className="sm:flex gap-4 hidden font-semibold text-lg">
        <Link
          to="/info"
          className="p-2 hover:bg-blue-200 hover:text-black rounded-lg "
        >
          Current
        </Link>
        <Link
          to="/forecast"
          className="p-2 hover:bg-blue-200 hover:text-black rounded-lg "
        >
          Forecast
        </Link>
        <Link
          to="/history"
          className="p-2 hover:bg-blue-200 hover:text-black rounded-lg "
        >
          History
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
