import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<div className="home">
				<div className="parallaxCust"></div>
				<div className="home_container">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="home_content d-flex flex-row align-items-end justify-content-start">
									<div className="home_title">{this.props.children}</div>
									<div className="breadcrumbs ml-auto">
										<ul>
											<li><a href="/home">Home</a></li>
											<li>{this.props.children}</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}