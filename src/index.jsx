import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/Pages/MainPages";
import { AlertHandlerProvider } from "path/to/contexts/alert_handler";
import "./style.css";

const AlertHandlerProvider = AlertHandlerProvider();

AlertHandlerProvider(
  ReactDOM.render(<MainPage />, document.getElementById("app"))
);
