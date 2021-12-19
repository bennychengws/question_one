import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import moduleCss from "./index.module.css";
import App from "./App";
import Home from "./routes/home.jsx";
import TransOne from "./routes/trans_example_one";
import TranTwo from "./routes/trans_example_two";
import "./i18n"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} >
        <Route path="/home/trans_example_one" element={<TransOne />} />
        <Route path="/home/trans_example_two" element={<TranTwo />} />
        <Route
            index
            element={
              <main className={moduleCss.reminder}>
                <p>Pleases select an example to review</p>
              </main>
            }
          />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
