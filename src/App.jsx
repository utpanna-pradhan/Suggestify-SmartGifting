import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Formsec from "./components/Formsec";
import "./App.css";
import GiftCard from "./components/GiftCard";

import Privacy from "./components/Privacy";
import Notfound from "./components/Notfound";
import Terms from "./components/Terms";

function App() {
  return (
   <div className="app min-h-screen flex flex-col">
  <BrowserRouter>
    <Navbar />
    <div className="pt-[80px] flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Formsec />} />
        <Route path="/about" element={<About />} />
        <Route path="/getgift" element={<GiftCard />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
</div>
  );
}

export default App;
