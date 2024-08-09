import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Loading } from './components'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000); // Durasi loading 3 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
          {isLoading ? (
        <Loading />
      ) : (
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero />
        </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <div className="raltive z-0">
            <Contact />
            <StarsCanvas />
          </div>
      </div>
      )}
    </BrowserRouter>
  );
}

export default App