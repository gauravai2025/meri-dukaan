import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import FeaturesPage from "./components/FeaturesPage";
import AboutUs from "./components/AboutUs";
import OurPartners from "./components/OurPartners";
import ShopNow from "./components/ShopNow";
import '@fortawesome/fontawesome-free/css/all.min.css';
import FAQPage from './components/FAQPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/features" element={<FeaturesPage />} /> {/* Features Page */}
        <Route path="/about" element={<AboutUs />} /> {/* About Us Page */}
        <Route path="/partners" element={<OurPartners />} />
        <Route path="/shop" element={<ShopNow />} />
       <Route path="/faq" element= {<FAQPage />}/>
       <Route path="/privacy" element= { <PrivacyPolicy />}/>
       <Route path="/terms" element= { <TermsOfService/>}/>

      </Routes>
    </Router>
  );
}

export default App;
