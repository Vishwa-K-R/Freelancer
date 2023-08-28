import { Link } from "react-router-dom";
import Footer from "../homepage/Footer";
import img1 from "../img/user-1.jpg"
import img2 from "../img/user-2.jpg"

function Resumes() {
    return ( <>
    <div className="bg-title py-5" data-overlay="0">
				<div className="ht-30"></div>
				<div className="container">
					<div className="row">
						<div className="colxl-12 col-lg-12 col-md-12">
							<h1 className="ft-medium">Browse Resumes</h1>
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="#" className="text-light">Home</a></li>
									<li className="breadcrumb-item"><a href="#" className="text-light">Job</a></li>
									<li className="breadcrumb-item active theme-cl" aria-current="page">Browse Candidates</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
				<div className="ht-30"></div>
			</div>
    <section className="bg-light">
				<div className="container">
					<div className="row">
						
						<div className="col-lg-4 col-md-12 col-sm-12">
							<div className="bg-white rounded mb-4">							
							
								<div className="sidebar_header d-flex align-items-center justify-content-between px-4 py-3 br-bottom">
									<h4 className="ft-medium fs-lg mb-0">Search Filter</h4>
									<div className="ssh-header">
										<a href="javascript:void(0);" className="clear_all ft-medium text-muted">Clear All</a>
										<a href="#search_open" data-bs-toggle="collapse" aria-expanded="false" role="button" className="collapsed _filter-ico ms-2"><i className="lni lni-text-align-right"></i></a>
									</div>
								</div>
								
								
								<div className="sidebar-widgets collapse miz_show" id="search_open" data-parent="#search_open">
									
									<div className="search-inner">
										
										<div className="filter-search-box px-4 pt-3 pb-0">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Search by keywords..."/>
											</div>
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Location, Zip.."/>
											</div>
										</div>
										
										<div className="filter_wraps">
											
											
											<div className="single_search_boxed px-4 pt-0 br-bottom">
												<div className="widget-boxed-header">
													<h4>
														<a href="#categories" className="ft-medium fs-md pb-0" data-bs-toggle="collapse" aria-expanded="true" role="button">Job Categories</a>
													</h4>
													
												</div>
												<div className="widget-boxed-body collapse show" id="categories" data-parent="#categories">
													<div className="side-list no-border">
										
														<div className="single_filter_card">
															<div className="card-body p-0">
																<div className="inner_widget_link">
																	<ul className="no-ul-list filter-list">
																		<li>
																			<input id="a1" className="checkbox-custom" name="ADA" type="checkbox" checked=""/>
																			<label for="a1" className="checkbox-custom-label">IT Computers (62)</label>
																			<ul className="no-ul-list filter-list">
																				<li>
																					<input id="aa1" className="checkbox-custom" name="ADA" type="checkbox"/>
																					<label for="aa1" className="checkbox-custom-label">Web Design (31)</label>
																				</li>
																				<li>
																					<input id="aa2" className="checkbox-custom" name="Parking" type="checkbox"/>
																					<label for="aa2" className="checkbox-custom-label">Web development (20)</label>
																				</li>
																				<li>
																					<input id="aa3" className="checkbox-custom" name="Coffee" type="checkbox"/>
																					<label for="aa3" className="checkbox-custom-label">SEO Services (43)</label>
																				</li>
																			</ul>
																		</li>
																		<li>
																			<input id="a2" className="checkbox-custom" name="Parking" type="checkbox"/>
																			<label for="a2" className="checkbox-custom-label">Financial Service (16)</label>
																		</li>
																		<li>
																			<input id="a3" className="checkbox-custom" name="Coffee" type="checkbox"/>
																			<label for="a3" className="checkbox-custom-label">Art, Design, Media (22)</label>
																		</li>
																		<li>
																			<input id="a4" className="checkbox-custom" name="Mother" type="checkbox"/>
																			<label for="a4" className="checkbox-custom-label">Coach & Education (21)</label>
																		</li>
																		<li>
																			<input id="a5" className="checkbox-custom" name="Outdoor" type="checkbox"/>
																			<label for="a5" className="checkbox-custom-label">Apps Developements (17)</label>
																			<ul className="no-ul-list filter-list">
																				<li>
																					<input id="ab1" className="checkbox-custom" name="ADA" type="checkbox"/>
																					<label for="ab1" className="checkbox-custom-label">IOS Development (12)</label>
																				</li>
																				<li>
																					<input id="ab2" className="checkbox-custom" name="Parking" type="checkbox"/>
																					<label for="ab2" className="checkbox-custom-label">Android Development (04)</label>
																				</li>
																			</ul>
																		</li>
																		<li>
																			<input id="a6" className="checkbox-custom" name="Pet" type="checkbox"/>
																			<label for="a6" className="checkbox-custom-label">Writing & Translation (04)</label>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										<div className="form-group filter_button pt-2 pb-4 px-4">
											<button type="button" className="btn btn-md theme-bg text-light rounded full-width">22 Results Show</button>
										</div>
									</div>							
								</div>
							</div>
							
						
						</div>
						
						
						<div className="col-lg-8 col-md-12 col-sm-12">
							
							<div className="row">
								<div className="col-xl-12 col-lg-12 col-md-12 col-12">
									<div className="row align-items-center justify-content-between mx-0 bg-white rounded py-2 mb-4">
										<div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
											<h6 className="mb-0 ft-medium fs-sm">302 New Jobs Found</h6>
										</div>
										
										<div className="col-xl-9 col-lg-8 col-md-7 col-sm-12">
											<div className="filter_wraps elspo_wrap d-flex align-items-center justify-content-end">
												<div className="single_fitres pe-3 br-right">
													<select className="form-select">
													  <option value="1" selected="">Default Sorting</option>
													  <option value="2">Recent jobs</option>
													  <option value="3">Featured jobs</option>
													  <option value="4">Trending Jobs</option>
													  <option value="5">Premium jobs</option>
													</select>
												</div>
												<div className="single_fitres ps-2">
													<a href="browse-resumes.html" className="simple-button active theme-cl me-1"><i className="ti-layout-grid2"></i></a>
													<a href="browse-resumes-list.html" className="simple-button"><i className="ti-view-list"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
					
							
							<div className="row align-items-center g-xl-3 g-lg-3 g-3">
							
								
								<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
									<div className="job_grid border rounded ">
										<div className="position-absolute ab-left"><button type="button" className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"><i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i></button></div>
										<div className="job_grid_thumbmb-2 text-center pt-4 px-3 mb-2">
											<a href="candidate-detail.html" className="d-inline-flex text-center m-auto circle border p-2"><img src={img1} className="img-fluid circle" width="70" alt="" /></a>
										</div>
										<div className="job_grid_caption text-center pb-3 px-3">
											<h4 className="mb-0 ft-medium medium"><a href="candidate-detail.html" className="text-dark fs-md">Sam</a></h4>
											<div className="jbl_location"><i className="lni lni-map-marker me-1"></i><span>Chennai</span></div>
										</div>
										<div className="job_grid_footer px-3">
											<ul className="p-0 skills_tag text-center">
												<li><span className="px-2 py-1 medium skill-bg rounded text-skill">Joomla</span></li>
												<li><span className="px-2 py-1 medium skill-bg rounded text-skill">WordPress</span></li>
												<li><span className="px-2 py-1 medium skill-bg rounded text-skill">PHP</span></li>
												<li><span className="px-2 py-1 medium skill-bg rounded text-skill">HTML5</span></li>
												<li><span className="px-2 py-1 medium bg-danger rounded text-light">+3 More</span></li>
											</ul>
										</div>
										<div className="job_grid_footer pb-4 px-3">
											<div className="df-1 text-dark ft-medium col-12 mt-3"><Link to="/CandDet" className="btn gray apply-btn rounded full-width">View Candidate<i className="lni lni-arrow-right-circle ms-1"></i></Link></div>
										</div>
									</div>
								</div>
								
								
								<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
									<div className="job_grid border rounded ">
										<div className="position-absolute ab-left"><button type="button" className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"><i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i></button></div>
										<div className="job_grid_thumbmb-2 text-center pt-4 px-3 mb-2">
											<a href="candidate-detail.html" className="d-inline-flex text-center m-auto circle border p-2"><img src={img2} className="img-fluid circle" width="70" alt="" /></a>
										</div>
										<div className="job_grid_caption text-center pb-3 px-3">
											<h4 className="mb-0 ft-medium medium"><a href="candidate-detail.html" className="text-dark fs-md">Anu</a></h4>
											<div className="jbl_location"><i className="lni lni-map-marker me-1"></i><span>Coimbatore</span></div>
										</div>
										<div className="job_grid_footer px-3">
											<ul className="p-0 skills_tag text-center">
												<li><span className="px-2 py-1 medium skill-bg rounded text-skill">Joomla</span></li>
												<li><span className="px-2 py-1 medium skill-bg rounded text-skill">WordPress</span></li>
												<li><span className="px-2 py-1 medium skill-bg rounded text-skill">PHP</span></li>
												<li><span className="px-2 py-1 medium skill-bg rounded text-skill">HTML5</span></li>
												<li><span className="px-2 py-1 medium bg-danger rounded text-light">+3 More</span></li>
											</ul>
										</div>
										<div className="job_grid_footer pb-4 px-3">
											<div className="df-1 text-dark ft-medium col-12 mt-3"><a href="candidate-detail.html" className="btn gray apply-btn rounded full-width">View Candidate<i className="lni lni-arrow-right-circle ms-1"></i></a></div>
										</div>
									</div>
								</div>
								
							</div>
							
							
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12">
									<ul className="pagination">
										<li className="page-item">
										  <a className="page-link" href="#" aria-label="Previous">
											<span className="fas fa-arrow-circle-right"></span>
											<span className="sr-only">Previous</span>
										  </a>
										</li>
										<li className="page-item"><a className="page-link" href="#">1</a></li>
										<li className="page-item"><a className="page-link" href="#">2</a></li>
										<li className="page-item active"><a className="page-link" href="#">3</a></li>
										<li className="page-item"><a className="page-link" href="#">...</a></li>
										<li className="page-item"><a className="page-link" href="#">18</a></li>
										<li className="page-item">
										  <a className="page-link" href="#" aria-label="Next">
											<span className="fas fa-arrow-circle-right"></span>
											<span className="sr-only">Next</span>
										  </a>
										</li>
									</ul>
								</div>
							</div>
							
						</div>
						
					</div>
				</div>
			</section>
            <Footer/>
    </> );
}

export default Resumes;