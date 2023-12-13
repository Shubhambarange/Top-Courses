import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    {/* <h1> Welcome to my React app</h1> */}
    <button onClick={() => toast.success('Item added to Cart')}> Add to Cart</button>
    <ToastContainer></ToastContainer>
  </div>
);
