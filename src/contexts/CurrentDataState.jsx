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
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=9ceaac0464c91b9c57546c3466a44908`;
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
    <CurrentDataContext.Provider value={{ data, load, handleSearch }}>
      {children}
    </CurrentDataContext.Provider>
  );
};

export default CurrentDataState;
