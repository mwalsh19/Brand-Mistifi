import React from 'react';
import BackToTop from 'react-back-to-top-button';
import Navigation from './components/layouts/Navigation';
import AnchorNav from './components/layouts/AnchorNav';
import AboutMistifi from './components/layouts/About-Mistifi/Index';
import Logos from './components/layouts/Logos/Index';
import TypefaceFonts from './components/layouts/Typeface-Fonts';
import ColorPalette from './components/layouts/Color-Palette';
import Packaging from './components/layouts/Packaging/Index';
import BrandImagery from './components/layouts/Brand-Imagery/Index';
import MarketingMaterials from './components/layouts/MarketingMaterials';
import BestPractices from './components/layouts/BestPractices';
import HiPhi from './components/layouts/HiPhi';
import Contact from './components/layouts/Contact';
import Footer from './components/layouts/Footer';
import './css/App.css';

function App() {
  return (
    <div className="App">

      <div className="hero-image">
        <Navigation />
        <div className="text-overlay">
          <h1 className="cursive">The Mistifi Brand</h1>
          <h1 className="alehouse">Digital Brand Guidelines</h1>
          <h1 className="din">USE OF ALL LOGOS AND MATERIALS AVAILABLE ON THIS PORTAL ARE SUBJECT TO OUR BRAND GUIDELINES.</h1>
        </div>  
      </div>

      <AnchorNav />

      <div className="content">

        <AboutMistifi />

        <Logos />

        <TypefaceFonts />

        <ColorPalette />

        <Packaging />

        <BrandImagery />

        <MarketingMaterials />

        <BestPractices />

        <HiPhi />

        <Contact />

      </div>

      <Footer />

      <BackToTop
        showAt={100}
        speed={1500}
        easing="easeInOutQuint">
        <span><i className="fas fa-arrow-up"></i></span>
      </BackToTop>

    </div>
  );
}

export default App;
