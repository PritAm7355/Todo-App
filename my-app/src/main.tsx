import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import './index.css';
import Middle from "./components/Middle";
import Login from "./Login";
import { Navigate, Outlet } from "react-router-dom";
import AuthGuard from "./components/AuthGuard";





ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        {/* Protect Middle.tsx */}
        <Route
          path="/middle"
          element={
            <AuthGuard>
              <Middle />
            </AuthGuard>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
