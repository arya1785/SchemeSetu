import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./App.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>
    <div className="page-animation">
      <App />
    </div>
  </React.StrictMode>
);