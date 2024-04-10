import React, { useContext } from "react";
import Current from "./Current";
import { CurrentDataContext } from "../../contexts/CurrentDataState";
import Loader from "./Loader";

const Info = () => {
  const { data,load } = useContext(CurrentDataContext);
  return (
    <section className="h-screen bg-black text-white p-4 pt-24 flex justify-center items-center">
      {data != null && load ? <Current data={data} /> : <Loader/>}
    </section>
  );
};

export default Info;
