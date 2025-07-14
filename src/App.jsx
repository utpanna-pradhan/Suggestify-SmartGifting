import React from "react";
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Formsec from "./components/Formsec";
import "./App.css"
import GiftCard from "./components/GiftCard";


function App() {
  return (
    <div className="app min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
           <Route path="/form" element={<Formsec />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/getgift" element={<GiftCard />}></Route> 
         
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
