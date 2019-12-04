import React from 'react';
import '../../css/navigation.css';

export default function(props) {
    return (
    	<div className="App">
	      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
	          <div className="navbar-brand abs">
	          	<a className="desktop-only" href="https://mistifi.com/" target="_blank" rel="noopener noreferrer"><img className="brand" src="/images/mistifi-logo.png" alt="desktop logo" /></a>
	          	<a className="mobile-only" href="https://mistifi.com/" target="_blank" rel="noopener noreferrer"><img className="brand" src="/images/mistifi-icon-black.png" alt="mobile logo" /></a>
	          </div>	
	          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
	              <span className="navbar-toggler-icon"></span>
	          </button>
	          <div className="navbar-collapse collapse" id="collapsingNavbar">
	              <ul className="navbar-nav">
	                  <li className="nav-item dropdown">
	                    <a href="https://mistifi.com/blends/" target="_blank" rel="noopener noreferrer" className="nav-link dropdown-toggle" data-toggle="dropdown">
	                      BLENDS
	                    </a>
	                    <ul className="dropdown-menu">
	                      <a className="dropdown-item mobile-only" href="https://mistifi.com/blends/" target="_blank" rel="noopener noreferrer">All BLENDS</a>
	                      <a className="dropdown-item" href="https://mistifi.com/over-the-rainbow/" target="_blank" rel="noopener noreferrer">OVER THE RAINBOW</a>
	                      <a className="dropdown-item" href="https://mistifi.com/houdini/" target="_blank" rel="noopener noreferrer">HOUDINI</a>
	                      <a className="dropdown-item" href="https://mistifi.com/phantom/" target="_blank" rel="noopener noreferrer">PHANTOM</a>
	                    </ul>
	                  </li>
	                  <li className="nav-item dropdown">
	                    <a href="https://mistifi.com/philosophy" target="_blank" rel="noopener noreferrer" className="nav-link dropdown-toggle" data-toggle="dropdown">
	                      PHILOSOPHY
	                    </a>
	                    <ul className="dropdown-menu">
	                      <a className="dropdown-item mobile-only" href="https://mistifi.com/philosophy" target="_blank" rel="noopener noreferrer">ABOUT US</a>
	                      <a className="dropdown-item" href="https://mistifi.com/hi-phi/" target="_blank" rel="noopener noreferrer">HI-PHI</a>
	                    </ul>
	                  </li>
	                  <li className="nav-item">
	                      <a className="nav-link" href="https://mistifi.com/mistifi-pen/" target="_blank" rel="noopener noreferrer">MISTIFI PEN</a>
	                  </li>
	              </ul>
	              <ul className="navbar-nav ml-auto">
	                  <li className="nav-item">
	                      <a className="nav-link" href="https://mistifi.com/blog/" target="_blank" rel="noopener noreferrer">BLOG</a>
	                  </li>
	                  {/* <li className="nav-item">
	                      <a className="nav-link" href="#exclusives">EXCLUSIVES</a>
	                  </li> */}
	                  <li className="nav-item">
	                      <a className="nav-link" href="https://mistifi.com/contact-us/" target="_blank" rel="noopener noreferrer">CONTACT US</a>
	                  </li>
	                  <li className="nav-item">
	                      <a href="https://mistifi.com/find-a-store/" target="_blank" rel="noopener noreferrer"><button type="submit" className="btn find-store-btn nav-link">FIND A STORE</button></a>
	                  </li>
	              </ul>
	          </div>
	      </nav>
    </div>
    );
}