import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import './index.css';
import Todo from "./components/Todo";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Todo" element={<Todo />} />
        
      </Routes>
    </Router>
  </React.StrictMode>
);
