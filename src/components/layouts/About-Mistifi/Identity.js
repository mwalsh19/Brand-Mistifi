import React from 'react';

export default function(props) {
    return (
    	<div className="second-border">
            <div className="below-header"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-5">
                  <h3 className="title alehouse">
                    OUR IDENTITY
                  </h3>
                  <p className="din-regular">The elements of our identity include our word mark, our emotive strapline and our cannabis signifier.  
                  <br /><br />
                  <ul>
                      <li>The wordmark is the main element. </li>
                      <li>The signifier is reserved for use when it is important to communicate cannabis. </li>
                      <li>The strapline can be included with or without the signifier.</li>
                    </ul>
                  </p>  
                </div>
                <div className="col-lg-7">
                  <img src="/images/sections/about/our-identity-mistifi.svg" alt="identity logo" />
                </div>
              </div>
            </div>
      </div>
    );
}