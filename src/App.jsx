import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login"; // Asume que está en /pages
import Dashboard from "./pages/dashboard"; // Asume que está en /pages
import Regist from "./pages/registrer"; // Asume que está en /pages
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registrer" element={<Regist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
