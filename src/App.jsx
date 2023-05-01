import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Register } from "./components/register"; // import the Register component
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  // check if the URL path is '/register'
  const isRegisterPath = window.location.pathname === "/register";

  return (
    <div>
      {/* conditionally render the Navigation component */}
      {!isRegisterPath && <Navigation />}
      {/* conditionally render the Header component */}
      {!isRegisterPath && <Header data={landingPageData.Header} />}
      {/* conditionally render the Features component */}
      {!isRegisterPath && <Features data={landingPageData.Features} />}
      {/* conditionally render the About component */}
      {!isRegisterPath && <About data={landingPageData.About} />}
      {/* conditionally render the Services component */}
      {!isRegisterPath && <Services data={landingPageData.Services} />}
      {/* conditionally render the Gallery component */}
      {!isRegisterPath && <Gallery data={landingPageData.Gallery} />}
      {/* conditionally render the Testimonials component */}
      {!isRegisterPath && <Testimonials data={landingPageData.Testimonials} />}
      {/* conditionally render the Team component */}
      {/* {!isRegisterPath && <Team data={landingPageData.Team} />} */}
      {/* conditionally render the Contact component */}
      {!isRegisterPath && <Contact data={landingPageData.Contact} />}
      {/* conditionally render the Register component */}
      {isRegisterPath && <Register />}
    </div>
  );
};

export default App;
