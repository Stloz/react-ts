import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App18";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Child: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div style={style}>Child prop</div>
);

root.render(
  <React.StrictMode>
    <App test={<div>Hi</div>}>
      <Child style={{ color: "red" }} />
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
