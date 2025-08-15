import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { Footer } from "./components/Footer";
import Integrations from "./components/Integrations";
import ContactMe from "./components/ContactMe";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />

        <Experience />
        {/* <Tech /> */}
        <Integrations />
        <Feedbacks />
        <div className="relative z-0">
          {/* <Contact /> */}
          <ContactMe />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
