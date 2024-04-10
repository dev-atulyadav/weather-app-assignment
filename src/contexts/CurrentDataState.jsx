import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { SearchLocContext } from "./SearchLocState";

export const CurrentDataContext = createContext();
const CurrentDataState = ({ children }) => {
  const { loc } = useContext(SearchLocContext);
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    let url = `http://api.weatherapi.com/v1/forecast.json?key=f8366378fb174ab183681435241004&q=${loc}&days=8`;
    let resp = axios.get(url);
    resp.then((res) => {
      setData(res.data);
      if (data.weather === undefined) {
        setTimeout(() => {
          setLoad(!load);
        }, 2000);
      }
    });
  }, [search]);
  const handleSearch = (e) => {
    setSearch(!search);
  };
  return (
    <CurrentDataContext.Provider value={{ data, load, search, handleSearch }}>
      {children}
    </CurrentDataContext.Provider>
  );
};

export default CurrentDataState;
