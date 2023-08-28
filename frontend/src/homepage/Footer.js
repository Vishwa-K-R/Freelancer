
import { Link } from "react-router-dom";
import revv from "../img/landing-bg-1.png"
// import Fade from 'react-reveal/Fade'; 
function Footer() {
    return ( <>
	{/* <Fade bottom delay={100}> */}
	<section class="space bg-cover"  style={{backgroundImage: `url(${revv})`,backgroundColor:"#212529"}}>
				<div class="container py-5">
					
					<div class="row justify-content-center">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div class="sec_title position-relative text-center mb-5">
								<h6 class="text-light mb-0">Subscribr Now</h6>
								<h2 class="ft-bold text-light">Get All New Job Notification</h2>
							</div>
						</div>
					</div>
					
					<div class="row align-items-center justify-content-center">
						<div class="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
							<form class="bg-white rounded p-1">
								<div class="row no-gutters">
									<div class="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
										<div class="form-group mb-0 position-relative">
											<input type="text" class="form-control lg left-ico" placeholder="Enter Your Email Address"/>
											<i class="bnc-ico lni lni-envelope"></i>
										</div>
									</div>
									<div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
										<div class="form-group mb-0 position-relative">
											<button class="btn full-width custom-height-lg bg-dark text-white fs-md" type="button">Subscribe</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					
				</div>
			</section>
    <footer class="dark-footer skin-dark-footer style-2">
				<div class="footer-middle">
					<div class="container">
						<div class="row">
							
							<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
								<div class="footer_widget">
									{/* <img src={fimg} class="img-footer small mb-2" alt=""/> */}
									
									<div class="address mt-2">
										Sri Krishna College of Engineering And Technology<br/>Coimbathore	
									</div>
									<div class="address mt-3">
										+91 9638527410<br/>support@skcet.com
									</div>
									<div class="address mt-2">
										<ul class="list-inline">
											<li class="list-inline-item"><Link to="#" class="theme-cl"><i class="lni lni-facebook-filled"></i></Link></li>
											<li class="list-inline-item"><Link to="#" class="theme-cl"><i class="lni lni-twitter-filled"></i></Link></li>
											<li class="list-inline-item"><Link to="#" class="theme-cl"><i class="lni lni-youtube"></i></Link></li>
											<li class="list-inline-item"><Link to="#" class="theme-cl"><i class="lni lni-instagram-filled"></i></Link></li>
											<li class="list-inline-item"><Link to="#" class="theme-cl"><i class="lni lni-linkedin-original"></i></Link></li>
										</ul>
									</div>
								</div>
							</div>
							
							<div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
								<div class="footer_widget">
									<h4 class="widget_title">For Employers</h4>
									<ul class="footer-menu">
										<li><Link to="#">Explore Candidates</Link></li>
										<li><Link to="#">Job Pricing</Link></li>
										<li><Link to="#">Submit Job</Link></li>
										<li><Link to="#">Shortlisted</Link></li>
										<li><Link to="#">Dashboard</Link></li>
									</ul>
								</div>
							</div>
									
							<div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
								<div class="footer_widget">
									<h4 class="widget_title">For Candidates</h4>
									<ul class="footer-menu">
										<li><Link to="#">Explore All Jobs</Link></li>
										<li><Link to="#">Browse Categories</Link></li>
										<li><Link to="#">Saved Jobs</Link></li>
										<li><Link to="#">Dashboard</Link></li>
									</ul>
								</div>
							</div>
					
							<div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
								<div class="footer_widget">
									<h4 class="widget_title">About Company</h4>
									<ul class="footer-menu">
										<li><Link to="#">Who We'r?</Link></li>
										<li><Link to="#">Our Mission</Link></li>
										<li><Link to="#">Our team</Link></li>
										<li><Link to="#">Packages</Link></li>
										<li><Link to="#">Dashboard</Link></li>
									</ul>
								</div>
							</div>
							
							<div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
								<div class="footer_widget">
									<h4 class="widget_title">Helpful Topics</h4>
									<ul class="footer-menu">
										<li><Link to="#">Site Map</Link></li>
										<li><Link to="#">Security</Link></li>
										<li><Link to="#">Contact</Link></li>
										<li><Link to="#">FAQ's Page</Link></li>
										<li><Link to="#">Privacy</Link></li>
									</ul>
								</div>
							</div>
								
						</div>
					</div>
				</div>
			</footer>
		{/* </Fade> */}
    </> );
}

export default Footer;