import React from 'react';

import Header from '../Header.js';

export default class HomeUser extends React.Component {
	render() {
		return (
			<div>
				<Header> Eventos </Header>
				<div className="news">
					<div className="container">
						<div className="row">

							<div className="col-lg-8">
								<div className="news_posts">

									<div className="news_post">
										<div className="news_post_title_container d-flex flex-row align-items-center justify-content-start">
											<div><div className="news_post_date_container d-flex flex-column align-items-center justify-content-center">
												<div className="news_post_day">15</div>
												<div className="news_post_month">Apr 18</div>
											</div></div>
											<div className="news_post_title_content">
												<div className="news_post_title"><a href="#">How to invest in real estate?</a></div>
												<div className="news_post_info">
													<ul>
														<li>By <a href="#">James Morrison</a></li>
														<li>in <a href="#">Real Estate</a></li>
														<li><a href="#">3 Comments</a></li>
													</ul>
												</div>
											</div>
										</div>
										<div className="news_post_image"><img src="/img/news_1.jpg" alt=""/></div>
										<div className="news_post_text">
											<p>Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.Sed lectus urna, ultricies sit amet risus eget, euismod imperdiet augue. Duis imperdiet, purus a pellentesque sodales, sapien mauris rhoncus eros, ac blandit elit leo ac diam.</p>
										</div>
									</div>

									<div className="news_post">
										<div className="news_post_title_container d-flex flex-row align-items-center justify-content-start">
											<div><div className="news_post_date_container d-flex flex-column align-items-center justify-content-center">
												<div className="news_post_day">15</div>
												<div className="news_post_month">Apr 18</div>
											</div></div>
											<div className="news_post_title_content">
												<div className="news_post_title"><a href="#">The best 10 cities to buy a house</a></div>
												<div className="news_post_info">
													<ul>
														<li>By <a href="#">James Morrison</a></li>
														<li>in <a href="#">Real Estate</a></li>
														<li><a href="#">3 Comments</a></li>
													</ul>
												</div>
											</div>
										</div>
										<div className="news_post_image"><img src="/img/news_2.jpg" alt=""/></div>
										<div className="news_post_text">
											<p>Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.Sed lectus urna, ultricies sit amet risus eget, euismod imperdiet augue. Duis imperdiet, purus a pellentesque sodales, sapien mauris rhoncus eros, ac blandit elit leo ac diam.</p>
										</div>
									</div>

									<div className="news_post">
										<div className="news_post_title_container d-flex flex-row align-items-center justify-content-start">
											<div><div className="news_post_date_container d-flex flex-column align-items-center justify-content-center">
												<div className="news_post_day">15</div>
												<div className="news_post_month">Apr 18</div>
											</div></div>
											<div className="news_post_title_content">
												<div className="news_post_title"><a href="#">5 Tips for a vacation home</a></div>
												<div className="news_post_info">
													<ul>
														<li>By <a href="#">James Morrison</a></li>
														<li>in <a href="#">Real Estate</a></li>
														<li><a href="#">3 Comments</a></li>
													</ul>
												</div>
											</div>
										</div>
										<div className="news_post_image"><img src="images/news_3.jpg" alt=""/></div>
										<div className="news_post_text">
											<p>Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.Sed lectus urna, ultricies sit amet risus eget, euismod imperdiet augue. Duis imperdiet, purus a pellentesque sodales, sapien mauris rhoncus eros, ac blandit elit leo ac diam.</p>
										</div>
									</div>

								</div>

								<div className="pagination">
									<ul>
										<li className="active"><a href="#">01.</a></li>
										<li><a href="#">02.</a></li>
										<li><a href="#">03.</a></li>
										<li><a href="#">04.</a></li>
									</ul>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="sidebar">

									<div className="sidebar_top_search">
										<form action="#" className="sidebar_top_search_form">
											<button className="sidebar_top_search_button"><i className="fa fa-search" aria-hidden="true"></i></button>
										</form>
									</div>

									<div className="categories">
										<div className="sidebar_title">Categories</div>
										<div className="categories_list">
											<ul>
												<li><a href="#" className="d-flex flex-row align-items-start justfy-content-start">
													<div>Real Estate</div>
													<div className="ml-auto">20</div>
												</a></li>
												<li><a href="#" className="d-flex flex-row align-items-start justfy-content-start">
													<div>Properties</div>
													<div className="ml-auto">33</div>
												</a></li>
												<li><a href="#" className="d-flex flex-row align-items-start justfy-content-start">
													<div>Selling Information</div>
													<div className="ml-auto">44</div>
												</a></li>
												<li><a href="#" className="d-flex flex-row align-items-start justfy-content-start">
													<div>Vacation homes</div>
													<div className="ml-auto">52</div>
												</a></li>
												<li><a href="#" className="d-flex flex-row align-items-start justfy-content-start">
													<div>Uncategorized</div>
													<div className="ml-auto">12</div>
												</a></li>
											</ul>
										</div>
									</div>

									<div className="sidebar_latest">
										<div className="sidebar_title">Latest Posts</div>
										<div className="sidebar_latest_posts">

											<div className="latest_post d-flex flex-row align-items-start justify-content-start">
												<div><div className="latest_post_image"><img src="images/latest_1.jpg" alt=""/></div></div>
												<div className="latest_post_content">
													<div className="latest_post_date"><a href="#">April 02, 2018</a></div>
													<div className="latest_post_title"><a href="#">How to choose a house?</a></div>
													<div className="latest_post_author">By <a href="#">William Smith</a></div>
												</div>
											</div>

											<div className="latest_post d-flex flex-row align-items-start justify-content-start">
												<div><div className="latest_post_image"><img src="images/latest_2.jpg" alt=""/></div></div>
												<div className="latest_post_content">
													<div className="latest_post_date"><a href="#">April 02, 2018</a></div>
													<div className="latest_post_title"><a href="#">How to spot bargains</a></div>
													<div className="latest_post_author">By <a href="#">William Smith</a></div>
												</div>
											</div>

											<div className="latest_post d-flex flex-row align-items-start justify-content-start">
												<div><div className="latest_post_image"><img src="images/latest_3.jpg" alt=""/></div></div>
												<div className="latest_post_content">
													<div className="latest_post_date"><a href="#">April 02, 2018</a></div>
													<div className="latest_post_title"><a href="#">3 Tips to get a bargain on a home</a></div>
													<div className="latest_post_author">By <a href="#">William Smith</a></div>
												</div>
											</div>

											<div className="latest_post d-flex flex-row align-items-start justify-content-start">
												<div><div className="latest_post_image"><img src="images/latest_4.jpg" alt=""/></div></div>
												<div className="latest_post_content">
													<div className="latest_post_date"><a href="#">April 02, 2018</a></div>
													<div className="latest_post_title"><a href="#">The best cities to own a house</a></div>
													<div className="latest_post_author">By <a href="#">William Smith</a></div>
												</div>
											</div>

										</div>
									</div>

									<div className="sidebar_search">
										<div className="sidebar_search_title">Search your home</div>
										<div className="sidebar_search_form_container">
											<form action="#" className="sidebar_search_form" id="sidebar_search_form">
												<div className="row sidebar_search_row">
													<div className="col-lg-6">
													</div>
													<div className="col-lg-6">
													</div>
												</div>

												<div className="price_filter">
													<div className="price_filter_values d-flex flex-row align-items-center justfy-content-start">
														<div>Min Price</div>
														<div className="ml-auto">Max Price</div>
													</div>
												</div>

												<div className="area_filter">
													<div className="price_filter_values d-flex flex-row align-items-center justfy-content-start">
														<div>Min Price</div>
														<div className="ml-auto">Max Price</div>
													</div>
												</div>
												<button className="sidebar_search_button_2 search_form_button_2">search</button>
											</form>
										</div>
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