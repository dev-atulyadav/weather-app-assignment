import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { SearchLocContext } from "./SearchLocState";

export const CurrentDataContext = createContext();
const CurrentDataState = ({ children }) => {
  const { loc } = useContext(SearchLocContext);
  const [search, setSearch] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const key = import.meta.env.VITE_WEATHER_API_KEY;
    let url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${loc}&days=8`;
    let resp = axios.get(url);
    resp
      .then((res) => {
        setTimeout(() => {
          setData(res.data);
        }, 1500);
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
      });
  }, [search]);
  const handleSearch = (e) => {
    setData({});
    setSearch(!search);
  };
  console.log(data);
  return (
    <CurrentDataContext.Provider value={{ data, search, handleSearch }}>
      {children}
    </CurrentDataContext.Provider>
  );
};

export default CurrentDataState;
