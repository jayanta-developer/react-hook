import React from "react";
import reactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./component/App";
import reducers from "./reducers";

reactDOM.createRoot(document.querySelector("#root")).render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
