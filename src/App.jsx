import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "/pages/Login"; // Asume que está en /pages

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* otros <Route /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
