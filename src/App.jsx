import { BrowserRouter, Routes, Route } from "react-router-dom";
import  { useState } from 'react';
import "./index.css";
import Navbar from "./components/Navbar";
import WelcomeScreen from "./pages/WelcomeScreen";
import AnimatedBackground from "./components/Background";
import Home from "./pages/Home";
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";
import Skills from "./Pages/Skills";
import Portofolio from "./Pages/Portofolio";
import PropTypes from "prop-types";



const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Skills />
          <Portofolio />
          
          </>
      )}
    </>
  );
};

LandingPage.propTypes = {
  showWelcome: PropTypes.bool.isRequired,
  setShowWelcome: PropTypes.func.isRequired,
};

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;