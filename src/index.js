import React from "react";
import reactDOM from "react-dom/client";
import App from "./component/App";
import { BrowserRouter } from "react-router-dom";

reactDOM.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
