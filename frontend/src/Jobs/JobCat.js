import { Link } from "react-router-dom";
import Footer from "../homepage/Footer";
import img1 from "../img/c-1.png"
import img2 from "../img/c-2.png"
import img3 from "../img/c-3.png"
import img4 from "../img/c-4.png"
import img5 from "../img/c-5.jpg"
import img6 from "../img/c-6.png"
import img7 from "../img/c-7.png"
import img8 from "../img/c-8.png"
import img9 from "../img/c-17.png"
import img10 from "../img/c-18.png"
import img11 from "../img/c-19.jpg"
import img12 from "../img/c-20.png"


function JobCat() {
    return ( <>
    			<div className="clearfix"></div>

			<div className="bg-title py-5" data-overlay="0">
				<div className="ht-30"></div>
				<div className="container">
					
					<div className="row">
						<div className="colxl-12 col-lg-12 col-md-12">
							<h1 className="ft-medium">Browse Categories</h1>
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/" className="text-light">Home</Link></li>
									<li className="breadcrumb-item active theme-cl" aria-current="page">Browse Categories</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
				<div className="ht-30"></div>
			</div>
			
			<section className="middle bg-light">
				<div className="container">
				
				<div class="row justify-content-center">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div class="sec_title position-relative text-center mb-5">
								<h6 class="text-muted mb-0">Popular Categories</h6>
								<h2 class="ft-bold">Browse Top <span class="theme-cl">Technical Categories</span></h2>
							</div>
						</div>
					</div>
					<div className="row align-items-start mb-5">
						<div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
							<div className="d-block full-width mt-2">
								<h3 className="ft-medium mb-0">Technical Jobs</h3>
							</div>
						</div>
						<div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
							<div className="row g-4" style={{rowGap:"20px"}}>
							
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src={img1} className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Content Writer</h4>
										<p className="mb-3 p-0 lh-1">632 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src={img2} className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Web Designing</h4>
										<p className="mb-3 p-0 lh-1">412 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src={img3} className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">WordPress Developer</h4>
										<p className="mb-3 p-0 lh-1">620 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src={img4} className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">PHP Developer</h4>
										<p className="mb-3 p-0 lh-1">470 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src={img6} className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">UI/UX Designer</h4>
										<p className="mb-3 p-0 lh-1">513 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src={img7} className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Full Stack Developer</h4>
										<p className="mb-3 p-0 lh-1">513 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src={img8} className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Full Stack Developer</h4>
										<p className="mb-3 p-0 lh-1">513 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					
					
					
					{/* <div className="row align-items-start mb-5">
						<div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
							<div className="d-block full-width mt-2">
								<h3 className="ft-medium mb-0">Transmission & Distribution</h3>
							</div>
						</div>
						<div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
							<div className="row g-4">
							
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/11.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Chat Manager</h4>
										<p className="mb-3 p-0 lh-1">730 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/12.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Sales Manager</h4>
										<p className="mb-3 p-0 lh-1">941 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/13.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Font Developer</h4>
										<p className="mb-3 p-0 lh-1">320 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/14.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Laravel Developer</h4>
										<p className="mb-3 p-0 lh-1">756 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/15.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Web Master</h4>
										<p className="mb-3 p-0 lh-1">695 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					
					
					<div className="row align-items-start">
						<div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
							<div className="d-block full-width mt-2">
								<h3 className="ft-medium mb-0">Switchgear/ Electrical Engineering</h3>
							</div>
						</div>
						<div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
							<div className="row g-4">
							
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/16.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Web Designing</h4>
										<p className="mb-3 p-0 lh-1">720 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/17.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Web Designing</h4>
										<p className="mb-3 p-0 lh-1">945 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/18.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Web Designing</h4>
										<p className="mb-3 p-0 lh-1">320 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/19.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Web Designing</h4>
										<p className="mb-3 p-0 lh-1">945 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/20.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Web Designing</h4>
										<p className="mb-3 p-0 lh-1">625 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
							</div>
						</div>
					</div> */}
					
				</div>
				
			</section>
			<section className="middle bg-light">
				<div className="container">
				
				<div class="row justify-content-center">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div class="sec_title position-relative text-center mb-5">
								<h6 class="text-muted mb-0">Popular Categories</h6>
								<h2 class="ft-bold">Browse Top <span class="theme-cl">Non-Technical Categories</span></h2>
							</div>
						</div>
					</div>
					
					<div className="row align-items-start mb-5">
						<div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
							<div className="d-block full-width mt-2">
								<h3 className="ft-medium mb-0">Non-Technical Jobs</h3>
							</div>
						</div>
						<div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
							<div className="row g-4"  style={{rowGap:"20px"}}>
							
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src={img5} className="img-fluid" width="115" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Car Wash</h4>
										<p className="mb-3 p-0 lh-1">39 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src={img10} className="img-fluid" width="115" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Water Supply</h4>
										<p className="mb-3 p-0 lh-1">40 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src={img11} className="img-fluid" width="115" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Plumbering</h4>
										<p className="mb-3 p-0 lh-1">18 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src={img9} className="img-fluid" width="55" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Electrician</h4>
										<p className="mb-3 p-0 lh-1">84 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src={img12} className="img-fluid" width="65" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Driver</h4>
										<p className="mb-3 p-0 lh-1">62 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					
					{/* <div className="row align-items-start mb-5">
						<div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
							<div className="d-block full-width mt-2">
								<h3 className="ft-medium mb-0">Transmission & Distribution</h3>
							</div>
						</div>
						<div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
							<div className="row g-4">
							
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/11.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Chat Manager</h4>
										<p className="mb-3 p-0 lh-1">730 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/12.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Sales Manager</h4>
										<p className="mb-3 p-0 lh-1">941 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/13.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Font Developer</h4>
										<p className="mb-3 p-0 lh-1">320 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/14.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Laravel Developer</h4>
										<p className="mb-3 p-0 lh-1">756 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/15.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Web Master</h4>
										<p className="mb-3 p-0 lh-1">695 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					
					
					<div className="row align-items-start">
						<div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
							<div className="d-block full-width mt-2">
								<h3 className="ft-medium mb-0">Switchgear/ Electrical Engineering</h3>
							</div>
						</div>
						<div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
							<div className="row g-4">
							
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/16.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Web Designing</h4>
										<p className="mb-3 p-0 lh-1">720 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/17.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Web Designing</h4>
										<p className="mb-3 p-0 lh-1">945 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/18.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Web Designing</h4>
										<p className="mb-3 p-0 lh-1">320 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/19.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Web Designing</h4>
										<p className="mb-3 p-0 lh-1">945 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="d-block full-width px-4 py-4 bg-white rounded">
										<div className="d-block full-width mb-1"><img src="assets/img/icons/20.png" className="img-fluid" width="45" alt="" /></div>
										<h4 className="ft-medium mb-0 fs-md">Web Designing</h4>
										<p className="mb-3 p-0 lh-1">625 Jobs</p>
										<a href="job-search-v1.html" className="theme-cl ft-medium">Explore Jobs<i className="lni lni-arrow-right-circle ms-1"></i></a>
									</div>
								</div>
								
							</div>
						</div>
					</div> */}
					
				</div>
				
			</section>
            <Footer/>
    </> );
}

export default JobCat;