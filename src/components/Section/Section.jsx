import React from "react";
import Bg_1 from "../../assets/svgs/bg-1.svg";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <section className="h-screen bg-black text-white p-4 pt-24 flex justify-center items-center">
      <article>
        <main className="flex justify-center items-center gap-8 flex-col sm:flex-row text-center sm:text-left">
          <div className="text-2xl sm:text-5xl font-bold uppercase flex flex-col justify-center items-center sm:items-start gap-4">
            <h2>Welcome at Weather.Info</h2>
            <p className="font-semibold text-lg">
              Get accurate weather here...
            </p>
            <Link
              to="/home"
              className="text-lg uppercase px-2 py-3 bg-blue-400 hover:bg-blue-500 rounded-lg"
            >
              Check now
            </Link>
          </div>
          <img src={Bg_1} className="h-[25rem] sm:w-[40%]" alt="" />
        </main>
      </article>
    </section>
  );
};

export default Section;
