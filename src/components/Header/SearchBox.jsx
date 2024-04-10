import React, { useContext } from "react";
import { RiSearchLine } from "react-icons/ri";
import { SearchLocContext } from "../../contexts/SearchLocState";
import { CurrentDataContext } from "../../contexts/CurrentDataState";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const { handleLoc } = useContext(SearchLocContext);
  const { handleSearch } = useContext(CurrentDataContext);
  return (
    <form
      onSubmit={handleSearch}
      className="flex justify-center items-center gap-4"
    >
      <input
        onChange={handleLoc}
        type="search"
        placeholder="Enter location"
        className="px-4 py-2 rounded-full outline-4 outline-blue-600 text-black "
        name=""
        id="search"
      />
      <Link
        to="/current"
        onClick={handleSearch}
        className="text-xl border-2 border-white p-2 rounded-full hover:bg-white hover:text-black"
      >
        <RiSearchLine />
      </Link>
    </form>
  );
};

export default SearchBox;
