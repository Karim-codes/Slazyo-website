import React from 'react'
import './App.css';
import vidbg from "./assets/vid-bg.mp4";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from './pages/Home';
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Videos from './pages/Videos';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
    <Router>
        <Navbar/>
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Menu' element={<Menu />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/Contact' element={<Contact />} />  
        <Route exact path='/Videos' element={<Videos />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
