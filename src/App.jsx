import { useState } from "react";
// import './App.css'
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Cars from "./Pages/Cars";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";


export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/cars" element={<Cars/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}
