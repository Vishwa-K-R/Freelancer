import { Link } from "react-router-dom"
import img1 from "../img/c-1.png"
import img2 from "../img/c-2.png"
import img3 from "../img/c-3.png"
import img4 from "../img/c-4.png"
import img5 from "../img/c-5.jpg"
import img6 from "../img/c-6.png"
import img7 from "../img/c-7.png"
import img8 from "../img/c-8.png"
// import Fade from 'react-reveal/Fade'; 
function ListedJobs() {
    return ( <>
	{/* <Fade bottom delay={100}> */}
    <section class="middle gray">
				<div class="container">
				
					<div class="row justify-content-center col-gaap">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div class="sec_title position-relative text-center mb-5">
								<h6 class="text-muted mb-0">Trending Jobs</h6>
								<h2 class="ft-bold">All Popular <span class="theme-cl">Listed jobs</span></h2>
							</div>
						</div>
					</div>
					
	
					<div class="row align-items-center">
					
		
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
							<div class="job_grid rounded ">
								<div class="position-absolute ab-left"><button type="button" class="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"><i class="lni lni-heart-filled position-absolute snackbar-wishlist"></i></button></div>
								<div class="position-absolute ab-right"><span class="medium theme-cl theme-bg-light px-2 py-1 rounded">Full Time</span></div>
								<div class="job_grid_thumb mb-3 pt-5 px-3">
									<a href="job-detail-1.html" class="d-block text-center m-auto"><img src={img1} class="img-fluid" width="70" alt=""/></a>
								</div>
								<div class="job_grid_caption text-center pb-3 px-3">
									<h4 class="mb-0 ft-medium medium"><a href="employer-detail-1.html" class="text-dark fs-md">UI/UX Web Designer</a></h4>
									<div class="jbl_location"><i class="lni lni-map-marker mr-1"></i><span>Coimbathore</span></div>
								</div>
								<div class="job_grid_footer pt-2 pb-4 px-3 d-flex align-items-center justify-content-between">
									<div class="row">
										<div class="df-1 text-muted col-6 mb-2"><i class="lni lni-briefcase mr-1"></i>Web Design</div>
										<div class="df-1 text-muted col-6 mb-2"><i class="lni lni-wallet mr-1"></i>3-4 Lakhs PA.</div>
										<div class="df-1 text-muted col-6"><i class="lni lni-users mr-1"></i>02 Vacancy</div>
										<div class="df-1 text-muted col-6"><i class="lni lni-timer mr-1"></i>3 days ago</div>
									</div>
								</div>
							</div>
						</div>
		
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
							<div class="job_grid rounded ">
								<div class="position-absolute ab-left"><button type="button" class="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"><i class="lni lni-heart-filled position-absolute snackbar-wishlist"></i></button></div>
								<div class="position-absolute ab-right"><span class="medium bg-light-warning text-warning px-2 py-1 rounded">Part Time</span></div>
								<div class="job_grid_thumb mb-3 pt-5 px-3">
									<a href="job-detail-1.html" class="d-block text-center m-auto"><img src={img2} class="img-fluid" width="70" alt=""/></a>
								</div>
								<div class="job_grid_caption text-center pb-3 px-3">
									<h4 class="mb-0 ft-medium medium"><a href="employer-detail-1.html" class="text-dark fs-md">UI/UX Web Designer</a></h4>
									<div class="jbl_location"><i class="lni lni-map-marker mr-1"></i><span>Coimbathore</span></div>
								</div>
								<div class="job_grid_footer pt-2 pb-4 px-3 d-flex align-items-center justify-content-between">
									<div class="row">
										<div class="df-1 text-muted col-6 mb-2"><i class="lni lni-briefcase mr-1"></i>Web Design</div>
										<div class="df-1 text-muted col-6 mb-2"><i class="lni lni-wallet mr-1"></i>3-4 Lakhs PA.</div>
										<div class="df-1 text-muted col-6"><i class="lni lni-users mr-1"></i>02 Vacancy</div>
										<div class="df-1 text-muted col-6"><i class="lni lni-timer mr-1"></i>3 days ago</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
							<div class="job_grid rounded ">
								<div class="position-absolute ab-left"><button type="button" class="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"><i class="lni lni-heart-filled position-absolute snackbar-wishlist"></i></button></div>
								<div class="position-absolute ab-right"><span class="medium bg-light-purple text-purple px-2 py-1 rounded">Contract</span></div>
								<div class="job_grid_thumb mb-3 pt-5 px-3">
									<a href="job-detail-1.html" class="d-block text-center m-auto"><img src={img3} class="img-fluid" width="70" alt=""/></a>
								</div>
								<div class="job_grid_caption text-center pb-3 px-3">
									<h4 class="mb-0 ft-medium medium"><a href="employer-detail-1.html" class="text-dark fs-md">UI/UX Web Designer</a></h4>
									<div class="jbl_location"><i class="lni lni-map-marker mr-1"></i><span>Coimbathore</span></div>
								</div>
								<div class="job_grid_footer pt-2 pb-4 px-3 d-flex align-items-center justify-content-between">
									<div class="row">
										<div class="df-1 text-muted col-6 mb-2"><i class="lni lni-briefcase mr-1"></i>Web Design</div>
										<div class="df-1 text-muted col-6 mb-2"><i class="lni lni-wallet mr-1"></i>3-4 Lakhs PA.</div>
										<div class="df-1 text-muted col-6"><i class="lni lni-users mr-1"></i>02 Vacancy</div>
										<div class="df-1 text-muted col-6"><i class="lni lni-timer mr-1"></i>3 days ago</div>
									</div>
								</div>
							</div>
						</div>
						
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
							<div class="job_grid rounded ">
								<div class="position-absolute ab-left"><button type="button" class="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"><i class="lni lni-heart-filled position-absolute snackbar-wishlist"></i></button></div>
								<div class="position-absolute ab-right"><span class="medium bg-light-danger text-danger px-2 py-1 rounded">Enternship</span></div>
								<div class="job_grid_thumb mb-3 pt-5 px-3">
									<a href="job-detail-1.html" class="d-block text-center m-auto"><img src={img4} class="img-fluid" width="70" alt=""/></a>
								</div>
								<div class="job_grid_caption text-center pb-3 px-3">
									<h4 class="mb-0 ft-medium medium"><a href="employer-detail-1.html" class="text-dark fs-md">UI/UX Web Designer</a></h4>
									<div class="jbl_location"><i class="lni lni-map-marker mr-1"></i><span>Coimbathore</span></div>
								</div>
								<div class="job_grid_footer pt-2 pb-4 px-3 d-flex align-items-center justify-content-between">
									<div class="row">
										<div class="df-1 text-muted col-6 mb-2"><i class="lni lni-briefcase mr-1"></i>Web Design</div>
										<div class="df-1 text-muted col-6 mb-2"><i class="lni lni-wallet mr-1"></i>3-4 Lakhs PA.</div>
										<div class="df-1 text-muted col-6"><i class="lni lni-users mr-1"></i>02 Vacancy</div>
										<div class="df-1 text-muted col-6"><i class="lni lni-timer mr-1"></i>3 days ago</div>
									</div>
								</div>
							</div>
						</div>
		
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
							<div class="job_grid rounded ">
								<div class="position-absolute ab-left"><button type="button" class="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"><i class="lni lni-heart-filled position-absolute snackbar-wishlist"></i></button></div>
								<div class="position-absolute ab-right"><span class="medium bg-light-purple text-purple px-2 py-1 rounded">Contract</span></div>
								<div class="job_grid_thumb mb-3 pt-5 px-3">
									<a href="job-detail-1.html" class="d-block text-center m-auto"><img src={img5} class="img-fluid" width="70" alt=""/></a>
								</div>
								<div class="job_grid_caption text-center pb-3 px-3">
									<h4 class="mb-0 ft-medium medium"><a href="employer-detail-1.html" class="text-dark fs-md">Car Wash Works</a></h4>
									<div class="jbl_location"><i class="lni lni-map-marker mr-1"></i><span>Coimbathore</span></div>
								</div>
								<div class="job_grid_footer pt-2 pb-4 px-3 d-flex align-items-center justify-content-between">
									<div class="row">
										<div class="df-1 text-muted col-6 mb-2"><i class="lni lni-briefcase mr-1"></i>Cawr Wash</div>
										<div class="df-1 text-muted col-6 mb-2"><i class="lni lni-wallet mr-1"></i> ₹ 500-750</div>
										<div class="df-1 text-muted col-6"><i class="lni lni-users mr-1"></i>24/7 Service</div>
										{/* <div class="df-1 text-muted col-6"><i class="lni lni-timer mr-1"></i>3 days ago</div> */}
									</div>
								</div>
							</div>
						</div>
						
			
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
							<div class="job_grid rounded ">
								<div class="position-absolute ab-left"><button type="button" class="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"><i class="lni lni-heart-filled position-absolute snackbar-wishlist"></i></button></div>
								<div class="position-absolute ab-right"><span class="medium theme-cl theme-bg-light px-2 py-1 rounded">Full Time</span></div>
								<div class="job_grid_thumb mb-3 pt-5 px-3">
									<a href="job-detail-1.html" class="d-block text-center m-auto"><img src={img6} class="img-fluid" width="70" alt=""/></a>
								</div>
								<div class="job_grid_caption text-center pb-3 px-3">
									<h4 class="mb-0 ft-medium medium"><a href="employer-detail-1.html" class="text-dark fs-md">UI/UX Web Designer</a></h4>
									<div class="jbl_location"><i class="lni lni-map-marker mr-1"></i><span>Coimbathore</span></div>
								</div>
								<div class="job_grid_footer pt-2 pb-4 px-3 d-flex align-items-center justify-content-between">
									<div class="row">
										<div class="df-1 text-muted col-6 mb-2"><i class="lni lni-briefcase mr-1"></i>Web Design</div>
										<div class="df-1 text-muted col-6 mb-2"><i class="lni lni-wallet mr-1"></i>3-4 Lakhs PA.</div>
										<div class="df-1 text-muted col-6"><i class="lni lni-users mr-1"></i>02 Vacancy</div>
										<div class="df-1 text-muted col-6"><i class="lni lni-timer mr-1"></i>3 days ago</div>
									</div>
								</div>
							</div>
						</div>
						

						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
							<div class="job_grid rounded ">
								<div class="position-absolute ab-left"><button type="button" class="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"><i class="lni lni-heart-filled position-absolute snackbar-wishlist"></i></button></div>
								<div class="position-absolute ab-right"><span class="medium bg-light-danger text-danger px-2 py-1 rounded">Enternship</span></div>
								<div class="job_grid_thumb mb-3 pt-5 px-3">
									<a href="job-detail-1.html" class="d-block text-center m-auto"><img src={img7} class="img-fluid" width="70" alt=""/></a>
								</div>
								<div class="job_grid_caption text-center pb-3 px-3">
									<h4 class="mb-0 ft-medium medium"><a href="employer-detail-1.html" class="text-dark fs-md">UI/UX Web Designer</a></h4>
									<div class="jbl_location"><i class="lni lni-map-marker mr-1"></i><span>Coimbathore</span></div>
								</div>
								<div class="job_grid_footer pt-2 pb-4 px-3 d-flex align-items-center justify-content-between">
									<div class="row">
										<div class="df-1 text-muted col-6 mb-2"><i class="lni lni-briefcase mr-1"></i>Web Design</div>
										<div class="df-1 text-muted col-6 mb-2"><i class="lni lni-wallet mr-1"></i>3-4 Lakhs PA.</div>
										<div class="df-1 text-muted col-6"><i class="lni lni-users mr-1"></i>02 Vacancy</div>
										<div class="df-1 text-muted col-6"><i class="lni lni-timer mr-1"></i>3 days ago</div>
									</div>
								</div>
							</div>
						</div>
						
				
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
							<div class="job_grid rounded ">
								<div class="position-absolute ab-left"><button type="button" class="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"><i class="lni lni-heart-filled position-absolute snackbar-wishlist"></i></button></div>
								<div class="position-absolute ab-right"><span class="medium bg-light-warning text-warning px-2 py-1 rounded">Part Time</span></div>
								<div class="job_grid_thumb mb-3 pt-5 px-3">
									<a href="job-detail-1.html" class="d-block text-center m-auto"><img src={img8} class="img-fluid" width="70" alt=""/></a>
								</div>
								<div class="job_grid_caption text-center pb-3 px-3">
									<h4 class="mb-0 ft-medium medium"><a href="employer-detail-1.html" class="text-dark fs-md">UI/UX Web Designer</a></h4>
									<div class="jbl_location"><i class="lni lni-map-marker mr-1"></i><span>Coimbathore</span></div>
								</div>
								<div class="job_grid_footer pt-2 pb-4 px-3 d-flex align-items-center justify-content-between">
									<div class="row">
										<div class="df-1 text-muted col-6 mb-2"><i class="lni lni-briefcase mr-1"></i>Web Design</div>
										<div class="df-1 text-muted col-6 mb-2"><i class="lni lni-wallet mr-1"></i>3-4 Lakhs PA.</div>
										<div class="df-1 text-muted col-6"><i class="lni lni-users mr-1"></i>02 Vacancy</div>
										<div class="df-1 text-muted col-6"><i class="lni lni-timer mr-1"></i>3 days ago</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
			
					
					<div class="row justify-content-center">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div class="position-relative text-center">
								<br/>
								<Link to="/JobList" class="btn btn-md theme-bg rounded text-light hover-theme">Explore More Jobs<i class="lni lni-arrow-right-circle ml-2"></i></Link>
							</div>
						</div>
					</div>
					
				</div>
			</section>
			<section class="how-it-works-two position-relative pt-160 xl-pt-130 lg-pt-100">
			<div class="container">
				<div class="title-one d-flex align-items-center justify-content-between text-center mb-45 lg-mb-20">
					<span class="line"></span>
					<h2 class="w-100 main-font tit">How it’s work?</h2>
					<span class="line"></span>
				</div>

				<div class="position-relative">
					<div class="row justify-content-center">
						<div class="col-lg-4 col-md-6">
							<div class="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 foo">
								<div class="numb fw-500 d-flex align-items-center justify-content-center m-auto howw"><span>01</span></div>
								<div class="title fw-500 text-lg text-dark mt-25 mb-10"  style={{fontSize:"20px"}}>Create Account</div>
								<p  style={{marginTop:"15px",fontSize:"15px"}}>It’s very easy to open an account and start your journey.</p>
							</div>
							
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 foo">
								<div class="numb fw-500 d-flex align-items-center justify-content-center m-auto howw"><span>02</span></div>
								<div class="title fw-500 text-lg text-dark mt-25 mb-10"  style={{fontSize:"20px"}}>Complete your profile.</div>
								<p  style={{marginTop:"15px",fontSize:"15px"}}>Complete your profile with all the info to get attention of client.</p>
							</div>
							
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 foo" >
								<div class="numb fw-500 d-flex align-items-center justify-content-center m-auto howw"><span>03</span></div>
								<div class="title fw-500 text-lg text-dark mt-25 mb-10" style={{fontSize:"20px"}}>Apply Job Or Hire.</div>
								<p style={{marginTop:"15px",fontSize:"15px"}}>Apply & get your preferable jobs with all the requirments and get it.</p>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</section>
			
			{/* </Fade> */}
    </> );
}

export default ListedJobs;