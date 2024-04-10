import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import CurrentDataState from "./contexts/CurrentDataState";
import SearchLocState from "./contexts/SearchLocState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchLocState>
      <CurrentDataState>
        <RouterProvider router={router} />
      </CurrentDataState>
    </SearchLocState>
  </React.StrictMode>
);
