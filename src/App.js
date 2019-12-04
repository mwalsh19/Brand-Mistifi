import React from 'react';
import BackToTop from 'react-back-to-top-button';
import Navigation from './components/layouts/Navigation';
import AnchorNav from './components/layouts/AnchorNav';
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

        <div className="content-box" id="about-mistifi">


          <div className="second-border">
            <h2 className="content-headings cursive">About Mistifi</h2>
            <div className="below-header"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-4">
                  <h3 className="title alehouse">
                    WHAT IS MISTIFI™?
                  </h3>
                </div>
                <div className="col-8">
                  <p className="din">
                    Discover the purest, most natural, premium flower vaping experience, exclusively by MISTIFI™. Our triple-strain blends are expertly crafted for the discerning cannabis connoisseur to deliver unparalleled consistency, sensuous aromas, and powerful experiences like no other. Powered by Hi-Phi™ Extraction Technology, we tap straight into the flower to produce the world’s finest, uncut Extra Virgin Cannabis Oils; free from additives, flavorings, diluents, thickening agents, or carrier oils. Our extraordinary triple-strain blends are then crafted in the spirit of fine wine and whiskeys, combining these pure, uncut Extra Virgin Cannabis Oils into exquisite super-strain blends that go beyond the dimensions of a single strain. Discover a level of unmatched consistency previously thought unachievable. MISTIFI™ is the purest, flower vaping experience; a symphony of natural taste and aroma so wondrous, we believe it’s better than smoking the flower itself. Celebrate the wondrous power of nature when you explore our sensuous, triple-strain blends; Over The Rainbow, Houdini, and Phantom; experienced in a premium pen to ensure the perfect draw. Finally, The Flower Lover’s Pen is here, exclusively by MISTIFI™.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="second-border">
            <div className="below-header"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-5">
                  <h3 className="title alehouse">
                    OUR IDENTITY
                  </h3>
                  <p className="din">The elements of our identity include our word mark, our emotive strapline and our cannabis signifier.  
                  <br /><br />
                  <ul>
                      <li>The wordmark is the main element. </li>
                      <li>The signifier is reserved for use when it is important to communicate cannabis. </li>
                      <li>The strapline can be included with or without the signifier.</li>
                    </ul>
                  </p>  
                </div>
                <div className="col-7">
                  <img src="/images/sections/about/our-identity-mistifi.svg" alt="identity logo" />
                </div>
              </div>
            </div>
          </div>


        </div>
        
        <div className="content-box" id="logo">


          <div className="second-border">
            <h2 className="content-headings cursive">Logo</h2>
            <div className="below-header"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-5">
                  <h3 className="title alehouse">
                    Our Logo Family
                  </h3>
                  <p className="din">
                    MISTIFI™ represents crafted luxury. We do not have a corporate identity we have a crafted identity, with several variants in color and mono to suit different treatments.
                    <br /><br />
                    <ul>
                      <li>Gold outline and solid are our main logos.</li>
                      <li>Crafted variants are created for special usage.</li>
                    </ul>
                  </p>
                  <div>
                    <p className="din">PLEASE CLICK THE BUTTON BELOW TO DOWNLOAD.</p>
                    <div className="dropdown">
                      <button className="btn find-store-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Download
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/images/sections/logo/images-OUR-LOGO-FAMILY.zip">California</a>
                        <a className="dropdown-item" href="/images/sections/logo/images-OUR-LOGO-FAMILY.zip">Colorado</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-7">
                  <div className="row">
                    <div className="col">
                      <p className="description border-image">COLOR LOGOS</p>
                      <img src="/images/sections/logo/our-logo-family-gold-outline-mistifi.svg" alt="identity logo" />
                      <br />
                      <p className="description">Gold Outline</p>
                      <br /><br />
                      <img src="/images/sections/logo/our-logo-family-gold-crafted-mistifi.svg" alt="identity logo" />
                      <br />
                      <p className="description">Gold Crafted</p>
                    </div>
                    <div className="col">
                      <p className="description border-image">MONO LOGOS</p>
                      <img src="/images/sections/logo/our-logo-family-solid-mistifi.svg" alt="identity logo" />
                      <br />
                      <p className="description">Solid</p>
                      <br /><br />
                      <img src="/images/sections/logo/our-logo-family-crafted-mistifi.svg" alt="identity logo" />
                      <br />
                      <p className="description">Crafted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>


      </div>

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
