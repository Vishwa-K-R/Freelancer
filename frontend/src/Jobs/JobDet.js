import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProducts } from "../Redux/Actions/ProductActions";
import { BsTwitter, BsWhatsapp, BsInstagram, BsFacebook ,BsStarHalf, BsStarFill} from 'react-icons/bs';
import icon1 from "../img/l-1.png"
import icon2 from "../img/l-2.png"
import icon3 from "../img/l-3.png"
import icon4 from "../img/l-4.png"
import icon5 from "../img/l-5.png"
import icon6 from "../img/l-6.png"
import job_img from "../img/c-1.png"
import Footer from "../homepage/Footer";

const JobDet =() =>
{
    const {productId}=useParams();
    const dispatch = useDispatch();
    const [productData, setProductData] = useState(null);

	console.log("pro",productData);
    useEffect(()=>
    {
        const fetchProductDetail= async () =>
        {
            try
            {
                const response=await axios.get(`http://localhost:8080/jobpost/${productId}`);
                dispatch(selectedProducts(response.data));
                setProductData(response.data);
            }
            catch(error)
            {
				console.log("error: ",error.meassage)
            }
        };
        if(productId && productId!==" ") fetchProductDetail();
    },[productId])

    const { qualification, title, prize, category, description,rating ,country,applicationDeadline,industry,jobType,specialisms,careerLevel,city} = productData || {};
    return (
        <>
        
        <div class="bg-cover py-5" style={{background:"#17b67c",  background: `url(${require("../img/bn-2.jpg")}) no-repeat` ,backgroundRepeat: "no-repeat"}}>
				<div class="ht-200" ></div>
			</div>
          <section class="pb-5 pt-0">
				<div class="container">
					<div class="row">
						
						<div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
						
							<div class="d-block ovr_top">
								<div class="jbd-flex d-flex align-items-center justify-content-start mb-4">
									<div class="jbd-01-thumb position-relative z-index-1">
										<img src={job_img} class="img-fluid" width="90" alt="" />
									</div>
								</div>
							</div>
							
							<div class="rounded mb-4">
								<div class="jbd-01">
								
									<div class="jbd-01-caption mb-4">
										<div class="tbd-title">
											<div class="ft-medium medium"><span>{industry}</span></div>
											<h4 class="mb-3 ft-medium fs-lg">{title}<img src="assets/img/verify.svg" class="ms-1" width="12" alt=""/></h4>
										</div>
										<div class="jbd-list">
											<span class="px-2 py-1 rounded theme-cl theme-bg-light me-2"><i class="lni lni-briefcase me-1"></i>Full Time</span>
											<span><i class="lni lni-map-marker me-1"></i>{country}</span>
											<span class="px-2 py-1 rounded text-warning bg-light-warning ms-2"><i class="lni lni-star me-1"></i>Featured</span>
											<span class="rounded ms-2"><i class="lni lni-money-protection me-1"></i>$85k - 100k PA.</span>
										</div>
									</div>
									
									<div class="jbd-details mb-4">
										<h5 class="ft-medium fs-md">Job description</h5>
										{/* <p>We are looking for a PHP Developer responsible for managing back-end services and the interchange of data between the server and the users. Your primary focus will be the development of all server-side logic, definition and maintenance of the central database</p> */}
										<p>{description}</p>
									</div>
									<div class="jbd-details mb-4">
										<h5 class="ft-medium fs-md">Application Deadline</h5>
										{/* <p>We are looking for a PHP Developer responsible for managing back-end services and the interchange of data between the server and the users. Your primary focus will be the development of all server-side logic, definition and maintenance of the central database</p> */}
										<p>{applicationDeadline}</p>
									</div>
									
									<div class="jbd-details mb-4">
										<h5>Requirements:</h5>
										<div class="position-relative row">
											<div class="col-lg-12 col-md-12 col-12">
												<div class="mb-2 me-4 ml-lg-0 mr-lg-4">
													<div class="d-flex align-items-center">
													  <div class="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
														<i class="fas fa-check small"></i>
													  </div>
													  <h6 class="mb-0 ms-3 text-muted fs-sm">Strong core PHP Hands on experience.</h6>
													</div>
												</div>
												<div class="mb-2 me-4 ml-lg-0 mr-lg-4">
													<div class="d-flex align-items-center">
													  <div class="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
														<i class="fas fa-check small"></i>
													  </div>
													  <h6 class="mb-0 ms-3 text-muted fs-sm">Strong Expertise in CodeIgniter Framework .</h6>
													</div>
												</div>
												<div class="mb-2 me-4 ml-lg-0 mr-lg-4">
													<div class="d-flex align-items-center">
													  <div class="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
														<i class="fas fa-check small"></i>
													  </div>
													  <h6 class="mb-0 ms-3 text-muted fs-sm">Understanding of MVC design pattern.</h6>
													</div>
												</div>
												<div class="mb-2 me-4 ml-lg-0 mr-lg-4">
													<div class="d-flex align-items-center">
													  <div class="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
														<i class="fas fa-check small"></i>
													  </div>
													  <h6 class="mb-0 ms-3 text-muted fs-sm">Expertise in PHP, MVC Frameworks and good technology exposure of Codeigniter .</h6>
													</div>
												</div>
												<div class="mb-2 me-4 ml-lg-0 mr-lg-4">
													<div class="d-flex align-items-center">
													  <div class="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
														<i class="fas fa-check small"></i>
													  </div>
													  <h6 class="mb-0 ms-3 text-muted fs-sm">Basic understanding of front-end technologies, such as JavaScript, HTML5, and CSS3</h6>
													</div>
												</div>
												<div class="mb-2 me-4 ml-lg-0 mr-lg-4">
													<div class="d-flex align-items-center">
													  <div class="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
														<i class="fas fa-check small"></i>
													  </div>
													  <h6 class="mb-0 ms-3 text-muted fs-sm">Good knowledge of relational databases, version control tools and of developing web services.</h6>
													</div>
												</div>
												<div class="mb-2 me-4 ml-lg-0 mr-lg-4">
													<div class="d-flex align-items-center">
													  <div class="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
														<i class="fas fa-check small"></i>
													  </div>
													  <h6 class="mb-0 ms-3 text-muted fs-sm">Proficient understanding of code versioning tools, such as Git.</h6>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div class="jbd-details mb-4">
										<h5 class="ft-medium fs-md">Skills Required</h5>
										<div class="other-details">
											<div class="details ft-medium"><label class="text-muted">Role</label><span class="text-dark">Database Architect / Designer</span></div>
											<div class="details ft-medium"><label class="text-muted">Qualificatione</label><span class="text-dark">{qualification}</span></div>
											<div class="details ft-medium"><label class="text-muted">Functional Area</label><span class="text-dark">Engineering - Software</span></div>
											<div class="details ft-medium"><label class="text-muted">Employment Type</label><span class="text-dark">{jobType}</span></div>
											<div class="details ft-medium"><label class="text-muted">Role Category</label><span class="text-dark">{specialisms}</span></div>
											<div class="details ft-medium"><label class="text-muted">Career Level</label><span class="text-dark">{careerLevel}</span></div>
										</div>
									</div>
									
									<div class="jbd-details mb-1">
										<h5 class="ft-medium fs-md">Key Skills</h5>
										<ul class="p-0 skills_tag text-left">
											<li><span class="px-2 py-1 medium skill-bg rounded text-skill">Joomla</span></li>
											<li><span class="px-2 py-1 medium skill-bg rounded text-skill">WordPress</span></li>
											<li><span class="px-2 py-1 medium skill-bg rounded text-skill">Javascript</span></li>
											<li><span class="px-2 py-1 medium skill-bg rounded text-skill">PHP</span></li>
											<li><span class="px-2 py-1 medium skill-bg rounded text-skill">HTML5</span></li>
											<li><span class="px-2 py-1 medium skill-bg rounded text-skill">MS SQL</span></li>
											<li><span class="px-2 py-1 medium skill-bg rounded text-skill">SQL Development</span></li>
											<li><span class="px-2 py-1 medium skill-bg rounded text-skill">Dynamod</span></li>
											<li><span class="px-2 py-1 medium skill-bg rounded text-skill">Database</span></li>
										</ul>
									</div>
									
								</div>
								
								<div class="jbd-02 mt-4">
									<div class="jbd-02-flex d-flex align-items-center justify-content-between">
										<div class="jbl_button mb-2">
											<a href="#" class="btn btn-md rounded gray fs-sm ft-medium me-2">Save This Job</a>
											<a href="#" class="btn btn-md rounded theme-bg text-light fs-sm ft-medium">Apply Job</a>
										</div>
									</div>
								</div>
							</div>
							
						</div>
						
						<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
							<div class="mt-5 rounded border p-4 z-index-1 bg-white">
								<div class="drt-block text-center mb-2">
									<div class="d-inline-flex align-items-center justify-content-center p-2 rounded border">
										<img src="assets/img/c-17.png" class="img-fluid" width="80" alt="" />
									</div>
								</div>
								<div class="drt-block-caption">
									<div class="drt-soc-caption text-center mb-3">
										<h4 class="ft-medium mb-0 fs-md">Sundara Infotech</h4>
										<span><i class="lni lni-map-marker me-1"></i>{city}</span>
									</div>
									<div class="drt-soc-block text-center mb-4">
										<ul class="jbd-social">
                                        <li><a href="#"><BsTwitter/></a></li>
                                        <li><a href="#"><BsWhatsapp/></a></li>
                                        <li><a href="#"><BsInstagram/></a></li>
                                        <li><a href="#"><BsFacebook/></a></li>
										</ul>
									</div>
									<div class="drt-btn-block">
										<a href="#" class="btn btn-md theme-bg text-light full-width rounded">Apply Job</a>
									</div>
								</div>
							</div>
							
							<div class="mt-4">
								<div class="dty-425">
									<h4 class="mb-3 ft-medium fs-md">Featured Employers</h4>
								</div>
								
								<div class="row">
									<div class="col-6">
										<div class="empl-box rounded bg-white d-flex justify-content-center px-4 py-3 shadow mb-3">
											<div class="text-center"><img src={icon1} class="img-fluid" alt=""/></div>
										</div>
									</div>
									<div class="col-6">
										<div class="empl-box rounded bg-white d-flex justify-content-center px-4 py-3 shadow mb-3">
											<div class="text-center"><img src={icon2} class="img-fluid" alt=""/></div>
										</div>
									</div>
									<div class="col-6">
										<div class="empl-box rounded bg-white d-flex justify-content-center px-4 py-3 shadow mb-3">
											<div class="text-center"><img src={icon3} class="img-fluid" alt=""/></div>
										</div>
									</div>
									<div class="col-6">
										<div class="empl-box rounded bg-white d-flex justify-content-center px-4 py-3 shadow mb-3">
											<div class="text-center"><img src={icon4} class="img-fluid" alt=""/></div>
										</div>
									</div>
									<div class="col-6">
										<div class="empl-box rounded bg-white d-flex justify-content-center px-4 py-3 shadow mb-3">
											<div class="text-center"><img src={icon5} class="img-fluid" alt=""/></div>
										</div>
									</div>
									<div class="col-6">
										<div class="empl-box rounded bg-white d-flex justify-content-center px-4 py-3 shadow mb-3">
											<div class="text-center"><img src={icon6} class="img-fluid" alt=""/></div>
										</div>
									</div>
								</div>
							</div>
							
						</div>
						
					</div>
				</div>
			</section>

            <section class="gray">
				<div class="container">
				
					<div class="row justify-content-center">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div class="sec_title position-relative text-center mb-5">
								<h6 class="text-muted mb-0">Related Jobs</h6>
								<h2 class="ft-bold">All Related Listed jobs</h2>
							</div>
						</div>
					</div>
					
				
					<div class="row align-items-center g-xl-3 g-lg-3 g-3">
					
						
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
							<div class="job_grid border rounded ">
								<div class="position-absolute ab-left"><button type="button" class="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"><i class="lni lni-heart-filled position-absolute snackbar-wishlist"></i></button></div>
								<div class="position-absolute ab-right"><span class="medium theme-cl theme-bg-light px-2 py-1 rounded">Full Time</span></div>
								<div class="job_grid_thumb mb-3 pt-5 px-3">
									<a href="job-detail.html" class="d-block text-center m-auto"><img src={job_img} class="img-fluid" width="70" alt="" /></a>
								</div>
								<div class="job_grid_caption text-center pb-5 px-3">
									<h6 class="mb-0 lh-1 ft-medium medium"><a href="employer-detail.html" class="text-muted medium">Google Inc</a></h6>
									<h4 class="mb-0 ft-medium medium"><a href="job-detail.html" class="text-dark fs-md">UI/UX Web Designer</a></h4>
									<div class="jbl_location"><i class="lni lni-map-marker me-1"></i><span>Coimbatore</span></div>
								</div>
								<div class="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
									<div class="df-1 text-muted"><i class="lni lni-wallet me-1"></i>$50k - $80k PA.</div>
									<div class="df-1 text-muted"><i class="lni lni-timer me-1"></i>3 days ago</div>
								</div>
							</div>
						</div>
						
						
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
							<div class="job_grid border rounded ">
								<div class="position-absolute ab-left"><button type="button" class="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"><i class="lni lni-heart-filled position-absolute snackbar-wishlist"></i></button></div>
								<div class="position-absolute ab-right"><span class="medium bg-light-warning text-warning px-2 py-1 rounded">Part Time</span></div>
								<div class="job_grid_thumb mb-3 pt-5 px-3">
									<a href="job-detail.html" class="d-block text-center m-auto"><img src={job_img} class="img-fluid" width="70" alt="" /></a>
								</div>
								<div class="job_grid_caption text-center pb-5 px-3">
									<h6 class="mb-0 lh-1 ft-medium medium"><a href="employer-detail.html" class="text-muted medium">Google Inc</a></h6>
									<h4 class="mb-0 ft-medium medium"><a href="job-detail.html" class="text-dark fs-md">UI/UX Web Designer</a></h4>
									<div class="jbl_location"><i class="lni lni-map-marker me-1"></i><span>Coimbatore</span></div>
								</div>
								<div class="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
									<div class="df-1 text-muted"><i class="lni lni-wallet me-1"></i>$50k - $80k PA.</div>
									<div class="df-1 text-muted"><i class="lni lni-timer me-1"></i>3 days ago</div>
								</div>
							</div>
						</div>
						
						
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
							<div class="job_grid border rounded ">
								<div class="position-absolute ab-left"><button type="button" class="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"><i class="lni lni-heart-filled position-absolute snackbar-wishlist"></i></button></div>
								<div class="position-absolute ab-right"><span class="medium bg-light-purple text-purple px-2 py-1 rounded">Contract</span></div>
								<div class="job_grid_thumb mb-3 pt-5 px-3">
									<a href="job-detail.html" class="d-block text-center m-auto"><img src={job_img} class="img-fluid" width="70" alt="" /></a>
								</div>
								<div class="job_grid_caption text-center pb-5 px-3">
									<h6 class="mb-0 lh-1 ft-medium medium"><a href="employer-detail.html" class="text-muted medium">Google Inc</a></h6>
									<h4 class="mb-0 ft-medium medium"><a href="job-detail.html" class="text-dark fs-md">UI/UX Web Designer</a></h4>
									<div class="jbl_location"><i class="lni lni-map-marker me-1"></i><span>Coimbatore</span></div>
								</div>
								<div class="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
									<div class="df-1 text-muted"><i class="lni lni-wallet me-1"></i>$50k - $80k PA.</div>
									<div class="df-1 text-muted"><i class="lni lni-timer me-1"></i>3 days ago</div>
								</div>
							</div>
						</div>
						
						
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
							<div class="job_grid border rounded ">
								<div class="position-absolute ab-left"><button type="button" class="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"><i class="lni lni-heart-filled position-absolute snackbar-wishlist"></i></button></div>
								<div class="position-absolute ab-right"><span class="medium bg-light-danger text-danger px-2 py-1 rounded">Enternship</span></div>
								<div class="job_grid_thumb mb-3 pt-5 px-3">
									<a href="job-detail.html" class="d-block text-center m-auto"><img src={job_img} class="img-fluid" width="70" alt="" /></a>
								</div>
								<div class="job_grid_caption text-center pb-5 px-3">
									<h6 class="mb-0 lh-1 ft-medium medium"><a href="employer-detail.html" class="text-muted medium">Google Inc</a></h6>
									<h4 class="mb-0 ft-medium medium"><a href="job-detail.html" class="text-dark fs-md">UI/UX Web Designer</a></h4>
									<div class="jbl_location"><i class="lni lni-map-marker me-1"></i><span>Coimbatore</span></div>
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
        </>
      );
}
export default JobDet;