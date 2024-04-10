import React, { useContext } from "react";
import { CurrentDataContext } from "../../contexts/CurrentDataState";

const Current = ({data}) => {
  return (
    <article className="h-full w-full rounded-xl flex justify-center items-center relative overflow-hidden border-2">
      <img
        src={`https://source.unsplash.com/1600x900/?${data.weather[0].main}`}
        className="absolute h-screen w-screen"
        alt=""
      />
      <main className="flex flex-col justify-center items-center gap-6 relative z-10 h-full w-full bg-[#0000006b] p-4">
        <div className="flex gap-10 text-6xl font-bold">
          <h3>{data.name}</h3>
          <h4>{Math.floor(data.main.temp - 273.15)}°C</h4>
        </div>
        <div className="flex text-2xl justify-center items-center gap-4 font-semibold">
          <p>{data.weather[0].main}</p>
          <p>Feels like : {Math.floor(data.main.feels_like - 273.15)}°C</p>
          <p>Humidity : {data.main.humidity}%</p>
          <p>Wind : {data.wind.speed} km/h</p>
        </div>
      </main>
    </article>
  );
};

export default Current;
