import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function(props) {
    return (
    	<div className="anchor-bar">

	        <ul>
	          <li>
	            <AnchorLink href="#about-mistifi">ABOUT MISTIFI</AnchorLink> <span>|&nbsp;</span>
	          </li>
	          <li>
	            <AnchorLink href="#logo">LOGO</AnchorLink> <span>|&nbsp;</span>
	          </li>
	          <li>
	            <AnchorLink href="#typeface-fonts">TYPEFACE/FONTS</AnchorLink> <span>|&nbsp;</span>
	          </li>
	          <li>
	            <AnchorLink href="#color-palette">COLOR PALETTE</AnchorLink> <span>|&nbsp;</span>
	          </li>
	          <li>
	            <AnchorLink href="#packaging">PACKAGING</AnchorLink> <span>|&nbsp;</span>
	          </li>
	          <li>
	            <AnchorLink href="#brand-imagery">BRAND IMAGERY</AnchorLink> <span className="tablet-view-minimum">|&nbsp;</span>
	          </li>
	          <li className="tablet-break"></li>
	          <li>
	            <AnchorLink href="#marketing-materials">MARKETING MATERIALS</AnchorLink> <span>|&nbsp;</span>
	          </li>
	          <li>
	            <AnchorLink href="#best-practices">BEST PRACTICES</AnchorLink> <span>|&nbsp;</span>
	          </li>
	          <li>
	            <AnchorLink href="#hi-phi">HI-PHI</AnchorLink> <span>|&nbsp;</span>
	          </li>
	          <li>
	            <AnchorLink href="#contact">CONTACT</AnchorLink>
	          </li>
	          
	        </ul>

	    </div>
    );
}