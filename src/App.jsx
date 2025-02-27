import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";  // Import Route
import SpecialityMenu from "./Components/SpecialityMenu";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar should be outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* Wrap Home inside Route */}
        <Route path="" element={<SpecialityMenu />} />  {/* Add About Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
