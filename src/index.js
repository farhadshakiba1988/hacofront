import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './tailwind.generated.css';
import "./i18next";
import * as serviceWorker from "./serviceWorker";
import App from "./components/app/App";
import "./index.css";
import "antd/dist/antd.css";


ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<h1>Loading</h1>}>
        <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);

// with this condition you can see your changes in th browser without page reload

if (module.hot) {
  module.hot.accept();
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
