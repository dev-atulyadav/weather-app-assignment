import React, { useContext } from "react";
import { CurrentDataContext } from "../../contexts/CurrentDataState";
import Loader from "./Loader";
import WeatherReport from "./WeatherReport";
import Forecast from "./Forecast";

const Info = () => {
  const { data } = useContext(CurrentDataContext);
  return (
    <>
      <section className={`${data.location==undefined?"h-screen":""} bg-black text-white p-4 pt-24 flex justify-center items-center flex-col w-full gap-4`}>
        {
          data.location==undefined?<Loader/> :
          <>
            <WeatherReport data={data} />
            <h2 className="text-3xl font-semibold border-b p-4 uppercase">
              8 Day Forecast
            </h2>
            <Forecast />
          </>
        }
      </section>
    </>
  );
};

export default Info;
