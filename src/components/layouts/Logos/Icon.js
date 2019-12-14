import React from 'react';

export default function(props) {
    return (

<div className="second-border icon">
	<div className="below-header"></div>
	<div className="container-fluid">
		<div className="row">
			<div className="col-lg-4">
				<h3 className="title alehouse">
					Our Mistifi Icon
				</h3>
				<p className="din-regular">
					We have three alternate color variants for our MISTIFI™-Icon. The M-Icon is created for use as the glowing light on the end of our vape. It also makes our social media profile picture.
					<br /><br />
				<ul>
					<li>NB: Not to be used next to or near the MISTIFI™ wordmark.</li>
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
			<div className="col-lg-8">
				<div className="row">
					<div className="col center">
						<img src="/images/sections/icon/our-mistifi-icon-deco.svg" alt="identity logo" />
						<br />
						<div className="text center">
							<p className="description-title">Deco Icon</p>
							<p className="description">For decorative use at large scale</p>
						</div>
						<br /><br />
						<img src="/images/sections/icon/our-mistifi-icon-bullet.svg" alt="identity logo" />
						<br />
						<div className="text center">
							<p className="description-title">Bullet Icon</p>
							<p className="description">For use as bullet points on information graphics</p>
						</div>
					</div>
					<div className="col center">
						<img src="/images/sections/icon/our-mistifi-icon-tip.svg" alt="identity logo" />
						<br />
						<div className="text center">
							<p className="description-title">Tip Icon</p>
							<p className="description">For use as our Social Media Profile Pic and in Social Media</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

    );
}
