import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-black text-white border-t-2 flex justify-center items-start flex-col gap-4 relative z-10">
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-bold">Weather.Info</h2>
        <ul className="flex gap-4 w-full justify-center items-center">
          <li>Current</li>
          <li>Forecast</li>
          <li>History</li>
        </ul>
      </div>
      <div className="w-full text-center font-semibold text-sm">
        <p>© Copyright by Weather.Info 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
