import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import './index.css';
import Middle from "./components/Middle";
import Login from "./Login";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Middle" element={<Middle />} />
        <Route path="/Login" element={<Login />} />
        
      </Routes>
    </Router>
  </React.StrictMode>
);
