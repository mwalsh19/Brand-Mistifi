import React from 'react';

export default function(props) {
    return (


          

<div className="second-border">
    <h2 className="content-headings cursive">Logo</h2>
    <div className="below-header"></div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-5">
                <h3 className="title alehouse">
                    Our Logo Family
                </h3>
                <p className="din-regular">
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
                        <button className="btn find-store-btn dropdown-toggle alehouse" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Download
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/images/sections/logo/images-OUR-LOGO-FAMILY.zip">California</a>
                            <a className="dropdown-item" href="/images/sections/logo/images-OUR-LOGO-FAMILY.zip">Colorado</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="row">
                    <div className="col-lg">
                        <p className="description border-image center">COLOR LOGOS</p>
                        <img src="/images/sections/logo/our-logo-family-gold-outline-mistifi.svg" alt="identity logo" />
                        <br />
                        <p className="description center">Gold Outline</p>
                        <br /><br />
                        <img src="/images/sections/logo/our-logo-family-gold-crafted-mistifi.svg" alt="identity logo" />
                        <br />
                        <p className="description center">Gold Crafted</p>
                    </div>
                    <div className="col-lg">
                        <p className="description border-image center">MONO LOGOS</p>
                        <img src="/images/sections/logo/our-logo-family-solid-mistifi.svg" alt="identity logo" />
                        <br />
                        <p className="description center">Solid</p>
                        <br /><br />
                        <img src="/images/sections/logo/our-logo-family-crafted-mistifi.svg" alt="identity logo" />
                        <br />
                        <p className="description center">Crafted</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


    );
}