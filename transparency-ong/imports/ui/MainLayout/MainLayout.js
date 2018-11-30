import React from 'react';

export const MainLayout = ({content}) => (
	<div className="main-layout">
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="header_content d-flex flex-row align-items-center justify-content-start">
							<div className="logo">
								<a href="#"></a>
							</div>
							<nav className="main_nav">
								<ul>
									<li className="active"><a href="/">Home</a></li>
									<li><a href="/create">Register</a></li>
									<li><a href="">Properties</a></li>
									<li><a href="">News</a></li>
									<li><a href="contact.html">Contact</a></li>
								</ul>
							</nav>
							<div className="phone_num ml-auto">
								<div className="phone_num_inner">
								</div>
							</div>
							<div className="hamburger ml-auto"><i className="fa fa-bars" aria-hidden="true"></i></div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<br/><br/><br/><br/><br/>
		<main className="row">
			{content}
		</main>
	</div>
)