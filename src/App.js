import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="portofolio-react">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <BottomBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
