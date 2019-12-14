import React from 'react';
import OurPen from './OurPen';
import OurBoxes from './OurBoxes';
import TripleBlend from './TripleBlend';
import Fractal from './Fractal';

export default function(props) {
    return (
      

				<div className="content-box" id="packaging">
					<OurPen />
					<OurBoxes />
					<TripleBlend />
					<Fractal />
				</div>


    );
}