import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Academics,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import Footer from "./components/footer";

const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      {/* Main wrapper with shared background */}
      <div
        className="relative z-0 bg-black bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/assets/background-image.jpg')" }} // 🔹 change path if needed
      >
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          <Hero />
        </div>

        <About />
        <Academics />
        <Tech />
        <Works />
        <Feedbacks />

        {/* Contact + Stars */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
