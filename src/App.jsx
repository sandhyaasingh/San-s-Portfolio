import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Hero Section with Stars */}
        <div className="relative w-full h-screen">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>

        {/* Other Sections */}
        <About />
        <Experience />
        <Tech />
        <Works />

        {/* Contact Section with Stars */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
