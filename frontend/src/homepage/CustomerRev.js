import img1 from "../img/bn-4.png"
import img2 from "../img/bn-5.png"
import icon1 from "../img/l-1.png"
import icon2 from "../img/l-2.png"
import icon3 from "../img/l-3.png"
import icon4 from "../img/l-4.png"
import icon5 from "../img/l-5.png"
import icon6 from "../img/l-6.png"
import icon7 from "../img/l-7.png"
import icon8 from "../img/l-8.png"
import icon9 from "../img/l-9.png"
import icon10 from "../img/l-10.png"
import { Link } from "react-router-dom"
// import Fade from 'react-reveal/Fade'; 
function CustomerRev() {
    return ( <>
	{/* <Fade bottom delay={100}> */}
                <section>
				<div class="container">
					
					<div class="row align-items-center justify-content-between">
						<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<div class="m-spaced">
								<div class="position-relative">
									<div class="mb-1"><span class="theme-bg-light theme-cl px-2 py-1 rounded">About Us</span></div>
									<h2 class="ft-bold mb-3">Create and Build Your<br/>Attractive Profile</h2>
									<p class="mb-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
									<p class="mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </p>
								</div>
								<div class="position-relative row">
									<div class="col-lg-4 col-md-4 col-4">
										<h3 class="ft-bold theme-cl mb-0">10k+</h3>
										<p class="ft-medium">Active Jobs</p>
									</div>
									<div class="col-lg-4 col-md-4 col-4">
										<h3 class="ft-bold theme-cl mb-0">12k+</h3>
										<p class="ft-medium">Web Designers</p>
									</div>
									<div class="col-lg-4 col-md-4 col-4">
										<h3 class="ft-bold theme-cl mb-0">07k+</h3>
										<p class="ft-medium">Employers</p>
									</div>
									<div class="col-lg-12 col-md-12 col-12 mt-3">
										<Link to="/Profile" class="btn btn-md theme-bg-light rounded theme-cl hover-theme">See Details<i class="lni lni-arrow-right-circle ms-2"></i></Link>
									</div>
								</div>
							</div>
						</div>
						
						<div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
							<div class="position-relative">
								<img src={img2} class="img-fluid" alt=""/>
							</div>
						</div>
					</div>
					
				</div>
			</section>
    <section class="pt-0">
				<div class="container">
					
					<div class="row align-items-center justify-content-between">
					
						<div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
							<div class="position-relative">
								<img src={img1} class="img-fluid" alt=""/>
							</div>
						</div>
						
						<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">	
							<div class="m-spaced">
								<div class="position-relative">
									<div class="mb-1"><span class="theme-bg-light theme-cl px-2 py-1 rounded">About Us</span></div>
									<h2 class="ft-bold mb-3">Get All The Jobs Details<br/>You're Looking For</h2>
									<p class="mb-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
								</div>
								<div class="position-relative row">
									<div class="col-lg-12 col-md-12 col-12">
										<div class="mb-3 me-4 ml-lg-0 mr-lg-4">
											<div class="d-flex align-items-center">
											  <div class="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
												<i class="fas fa-check"></i>
											  </div>
											  <h6 class="mb-0 ms-3">Full lifetime access</h6>
											</div>
										</div>
										<div class="mb-3 me-4 ml-lg-0 mr-lg-4">
											<div class="d-flex align-items-center">
											  <div class="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
												<i class="fas fa-check"></i>
											  </div>
											  <h6 class="mb-0 ms-3">20+ downloadable resources</h6>
											</div>
										</div>
										<div class="mb-3 me-4 ml-lg-0 mr-lg-4">
											<div class="d-flex align-items-center">
											  <div class="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
												<i class="fas fa-check"></i>
											  </div>
											  <h6 class="mb-0 ms-3">Certificate of completion</h6>
											</div>
										</div>
										<div class="mb-3 me-4 ml-lg-0 mr-lg-4">
											<div class="d-flex align-items-center">
											  <div class="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
												<i class="fas fa-check"></i>
											  </div>
											  <h6 class="mb-0 ms-3">Free Trial 7 Days</h6>
											</div>
										</div>
									</div>
									<div class="col-lg-12 col-md-12 col-12 mt-4">
										<Link to="/JobList" class="btn btn-md theme-bg-light rounded theme-cl hover-theme">Get Started<i class="lni lni-arrow-right-circle ms-2"></i></Link>
									</div>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
			</section>

			<section class="p-0">
				<div class="container">
				
					<div class="row justify-content-center">
						<div class="col-xl-5 col-lg-7 col-md-9 col-sm-12">
							<div class="sec_title position-relative text-center mb-5">
								<h6 class="text-muted mb-0">Our Partners</h6>
								<h2 class="ft-bold">We Have Worked with <span class="theme-cl">10,000+</span> Trusted Companies</h2>
							</div>
						</div>
					</div>
					
					<div class="row justify-content-center">
						
						<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
							<div class="empl-thumb text-center px-3 py-4">
								<img src={icon1} class="img-fluid mx-auto" alt=""/>
							</div>
						</div>
						
						<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
							<div class="empl-thumb text-center px-3 py-4">
								<img src={icon2} class="img-fluid mx-auto" alt=""/>
							</div>
						</div>
						
						<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
							<div class="empl-thumb text-center px-3 py-4">
								<img src={icon3} class="img-fluid mx-auto" alt=""/>
							</div>
						</div>
						
						<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
							<div class="empl-thumb text-center px-3 py-4">
								<img src={icon4} class="img-fluid mx-auto" alt=""/>
							</div>
						</div>
						
						<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
							<div class="empl-thumb text-center px-3 py-4">
								<img src={icon5} class="img-fluid mx-auto" alt=""/>
							</div>
						</div>
						
						<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
							<div class="empl-thumb text-center px-3 py-4">
								<img src={icon6} class="img-fluid mx-auto" alt=""/>
							</div>
						</div>
						
						<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
							<div class="empl-thumb text-center px-3 py-4">
								<img src={icon7} class="img-fluid mx-auto" alt=""/>
							</div>
						</div>
						
						<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
							<div class="empl-thumb text-center px-3 py-4">
								<img src={icon8} class="img-fluid mx-auto" alt=""/>
							</div>
						</div>
						
						<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
							<div class="empl-thumb text-center px-3 py-4">
								<img src={icon9} class="img-fluid mx-auto" alt=""/>
							</div>
						</div>
						
						<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
							<div class="empl-thumb text-center px-3 py-4">
								<img src={icon10} class="img-fluid mx-auto" alt=""/>
							</div>
						</div>
						
					</div>
					
				</div>
			</section>
			{/* </Fade> */}
    </> );
}

export default CustomerRev;