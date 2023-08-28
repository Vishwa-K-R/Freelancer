import {motion } from "framer-motion"
import Footer from "../homepage/Footer";
import img1 from "../img/c-1.png"
import img2 from "../img/c-2.png"
import img3 from "../img/c-3.png"
import img4 from "../img/c-4.png"
function JobList() {
    return ( <>

<motion.div className="ani"
			initial={{opacity: 0}}
			animate={{opacity: 2}}
			exit={{opacity:0}}
			>
			
			<div class="py-3 theme-bg searchingBar">
				<div class="container">
					<div class="row justify-content-between align-items-center">
						<div class="col-xl-7 col-lg-9 col-md-9 col-sm-12 col-12">							
							<form class="bg-white rounded p-1 border">
								<div class="row gx-0">
									<div class="col-xl-6 col-lg-5 col-md-5 col-sm-12 col-12">
										<div class="form-group mb-0 position-relative">
											<input type="text" class="form-control sm left-ico" placeholder="Job Title, Keyword or Company" />
											<i class="bnc-ico lni lni-search-alt"></i>
										</div>
									</div>
									<div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
										<div class="form-group mb-0 position-relative">
											<input type="text" class="form-control sm left-ico" placeholder="Location or Zip Code" />
											<i class="bnc-ico lni lni-target"></i>
										</div>
									</div>
									<div class="col-xl-1 col-lg-2 col-md-2 col-sm-12 col-12">
										<div class="form-group mb-0 position-relative">
											<button class="btn half-width custom-height sm rounded bg-dark" type="button">Go</button>
										</div>
									</div>
								</div>
							</form>
						</div>						
					</div>
				</div>
			</div>
		
			<section class="bg-light middle">
				<div class="container">
				
					<div class="row">
						<div class="col-xl-12 col-lg-12 col-md-12 col-12">
							<div class="row align-items-center justify-content-between mx-0 bg-white rounded py-2 mb-4">
								<div class="col-xl-3 col-lg-4 col-md-5 col-sm-12">
									<h6 class="mb-0 ft-medium fs-sm">8 New Jobs Found</h6>
								</div>
								
								<div class="col-xl-9 col-lg-8 col-md-7 col-sm-12">
									<div class="filter_wraps elspo_wrap d-flex align-items-center justify-content-end">
										<div class="single_fitres pe-3 br-right">
											<select class="form-select">
											  <option value="1" selected="">Default Sorting</option>
											  <option value="2">Recent jobs</option>
											  <option value="3">Featured jobs</option>
											  <option value="4">Trending Jobs</option>
											  <option value="5">Premium jobs</option>
											</select>
										</div>
										
									</div>
								</div>
							</div>
						</div>
					</div>
					
				
					<div class="row align-items-center g-xl-3 g-lg-3 g-md-3 g-3">
					
					
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
							<div class="job_grid border rounded ">
								<div class="position-absolute ab-left"><button type="button" class="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"><i class="lni lni-heart-filled position-absolute snackbar-wishlist"></i></button></div>
								<div class="position-absolute ab-right"><span class="medium theme-cl theme-bg-light px-2 py-1 rounded">Full Time</span></div>
								<div class="job_grid_thumb mb-3 pt-5 px-3">
									<a href="job-detail.html" class="d-block text-center m-auto"><img src={img1} class="img-fluid" width="70" alt="" /></a>
								</div>
								<div class="job_grid_caption text-center pb-5 px-3">
									<h6 class="mb-0 lh-1 ft-medium medium"><a href="employer-detail.html" class="text-muted medium">Google Inc</a></h6>
									<h4 class="mb-0 ft-medium medium"><a href="job-detail.html" class="text-dark fs-md">UI/UX Web Designer</a></h4>
									<div class="jbl_location"><i class="lni lni-map-marker me-1"></i><span>San Francisco</span></div>
								</div>
								<div class="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
									<div class="df-1 text-muted"><i class="lni lni-wallet me-1"></i>$50k - $80k PA.</div>
									<div class="df-1 text-muted"><i class="lni lni-timer me-1"></i>3 days ago</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<Footer/>
            </motion.div>

    </> );
}

export default JobList;