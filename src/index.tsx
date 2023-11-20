import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App22-useRef";
import reportWebVitals from "./reportWebVitals";
import { create } from "domain";
import { createContext } from "vm";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// const Child: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
//   <div style={style}>Child prop</div>
// );

type ProductContextType = {
  selectedProductId: number;
};

// export const ProductContext = createContext<ProductContextType | null>(null);

root.render(
  <React.StrictMode>
    {/* <App onClick={() => alert(123)} test={<div>Hi</div>}>
      <Child style={{ color: "red" }} />
    </App> */}
    <App />
    {/* <ProductContext.Provider value={{ selectedProductId: 1 }}>
      <App />
    </ProductContext.Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
