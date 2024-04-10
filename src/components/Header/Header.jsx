import React from "react";
import Nav from "./Nav";
import Icon from "../../assets/icon.png";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header className="p-4 w-full border-white border-b-2 bg-black text-white flex justify-between items-center fixed top-0 z-20">
      <div className="text-xl sm:text-2xl font-bold capitalize flex justify-center items-center gap-4">
        <img src={Icon} className="h-10 sm:h-12" alt="" />
        <h1>Weather.info</h1>
      </div>
      <div className="flex justify-center items-center gap-6">
        <SearchBox />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
