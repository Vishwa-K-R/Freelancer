import Footer from "../homepage/Footer";
import {motion} from "framer-motion"
import img1 from "../img/user-1.jpg"
function CandDet() {
    return ( <>
     <motion.div className="ani"
			initial={{opacity: 0}}
			animate={{opacity: 2}}
			exit={{opacity:0}}
			>
    <div class="bg-light py-5">
				<div class="ht-30"></div>
				<div class="container">
					<div class="row">
						<div class="colxl-12 col-lg-12 col-md-12">
							<h1 class="ft-medium">Candidate Detail</h1>
							<nav aria-label="breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="#">Home</a></li>
									<li class="breadcrumb-item active theme-cl" aria-current="page">Candidates Detail</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
				<div class="ht-30"></div>
			</div>
    <section class="middle">
				<div class="container">
					<div class="row align-items-start justify-content-between">
					
						<div class="col-12 col-md-12 col-lg-4 col-xl-4 text-center miliods">
							<div class="d-block border rounded mfliud-bot mb-4">
								<div class="cdt_author px-2 pt-5 pb-4">
									<div class="dash_auth_thumb circle p-1 border d-inline-flex mx-auto mb-2">
										<img src={img1} class="img-fluid circle" width="100" alt=""/>
									</div>
									<div class="dash_caption mb-3">
										<h4 class="fs-lg ft-medium mb-0 lh-1">Sam</h4>
										<p class="m-0 p-0">Web Designer</p>
										<span class="text-muted smalls"><i class="lni lni-map-marker me-1"></i>Chennai</span>
									</div>
									<div class="jb-list-01-title px-2">
										<span class="me-2 mb-2 d-inline-flex px-2 py-1 rounded theme-cl theme-bg-light">Photoshop</span>
										<span class="me-2 mb-2 d-inline-flex px-2 py-1 rounded text-warning bg-light-warning">WordPress</span>
										<span class="me-2 mb-2 d-inline-flex px-2 py-1 rounded text-danger bg-light-danger">Magento</span>
										<span class="me-2 mb-2 d-inline-flex px-2 py-1 rounded text-info bg-light-info">CSS3</span>
										<span class="px-2 mb-2 d-inline-flex py-1 rounded text-purple bg-light-purple">HTML5</span>
									</div>
								</div>
								
								<div class="cdt_caps">
									<div class="job_grid_footer pb-3 px-3 d-flex align-items-center justify-content-between">
										<div class="df-1 text-muted"><i class="lni lni-briefcase me-1"></i>Full Time</div>
										<div class="df-1 text-muted"><i class="lni lni-laptop-phone me-1"></i>Web Designer</div>
									</div>	
									<div class="job_grid_footer px-3 d-flex align-items-center justify-content-between">
										<div class="df-1 text-muted"><i class="lni lni-envelope me-1"></i>themezhub@gmail.com</div>
										<div class="df-1 text-muted"><i class="lni lni-graduation me-1"></i>3 Year Exp.</div>
									</div>
								</div>
								
								<div class="cdt_caps py-5 px-3">
									<a href="#" class="btn btn-md theme-bg text-light rounded full-width">Download Resume</a>
								</div>
								
							</div>
						</div>
						
						<div class="col-12 col-md-12 col-lg-8 col-xl-8">
						
							<div class="row align-items-start">
								
							
								<div class="abt-cdt d-block full-width mb-4">
									<h4 class="ft-medium mb-1 fs-md">About Carolyn C. Weldon</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
									<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
								</div>
							
								<div class="abt-cdt d-block full-width mb-4">
									<h4 class="ft-medium mb-1 fs-md">Carolyn C. Weldon Hobbies</h4>
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
								
							
								<div class="abt-cdt d-block full-width mb-4">
									<h4 class="ft-medium mb-1 fs-md">Qualification</h4>
									<div class="exslio-list mt-3">
										<ul>
											<li>
												<div class="esclio-110 bg-light rounded px-3 py-3">
													<h4 class="mb-0 ft-medium fs-md">High School</h4>
													<div class="esclio-110-info full-width mb-2">
														<span class="text-muted me-2"><i class="lni lni-graduation me-1"></i>LBS Academy</span>
                                                        <br/>
														<span class="text-muted me-2"><i class="lni lni-calendar me-1"></i>2010</span>
													</div>
													<div class="esclio-110-decs full-width">
														<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam <a href="javascript:void(0);" class="theme-cl">Read More..</a></p>
													</div>
												</div>
											</li>
											
											<li>
												<div class="esclio-110 bg-light rounded px-3 py-3">
													<h4 class="mb-0 ft-medium fs-md">Inter Medium</h4>
													<div class="esclio-110-info full-width mb-2">
														<span class="text-muted me-2"><i class="lni lni-graduation me-1"></i>International Inter College</span>
                                                        <br/>
														<span class="text-muted me-2"><i class="lni lni-calendar me-1"></i>2012</span>
													</div>
													<div class="esclio-110-decs full-width">
														<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam <a href="javascript:void(0);" class="theme-cl">Read More..</a></p>
													</div>
												</div>
											</li>
											
											<li>
												<div class="esclio-110 bg-light rounded px-3 py-3">
													<h4 class="mb-0 ft-medium fs-md">Gradutation</h4>
													<div class="esclio-110-info full-width mb-2">
														<span class="text-muted me-2"><i class="lni lni-graduation me-1"></i>Nandani College</span>
                                                        <br/>
														<span class="text-muted me-2"><i class="lni lni-calendar me-1"></i>2015</span>
													</div>
													<div class="esclio-110-decs full-width">
														<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam <a href="javascript:void(0);" class="theme-cl">Read More..</a></p>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
								
								<div class="abt-cdt d-block full-width mb-4">
									<h4 class="ft-medium mb-1 fs-md">Experience</h4>
									<div class="exslio-list mt-3">
										<ul>
											<li>
												<div class="esclio-110 bg-light rounded px-3 py-3">
													<h4 class="mb-0 ft-medium fs-md">Themezhub Limited</h4>
													<div class="esclio-110-info full-width mb-2">
														<span class="text-muted me-2"><i class="lni lni-map-marker me-1"></i>Liverpool, UK</span>
                                                        <br/>
														<span class="text-muted me-2"><i class="lni lni-laptop-phone me-1"></i>Web Designer</span>
                                                        <br/>
														<span class="text-muted me-2"><i class="lni lni-calendar me-1"></i>2010 - 2012</span>
                                                        <br/>
													</div>
													<div class="esclio-110-decs full-width">
														<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam <a href="javascript:void(0);" class="theme-cl">Read More..</a></p>
													</div>
												</div>
											</li>
											
											<li>
												<div class="esclio-110 bg-light rounded px-3 py-3">
													<h4 class="mb-0 ft-medium fs-md">Waft Technology</h4>
													<div class="esclio-110-info full-width mb-2">
														<span class="text-muted me-2"><i class="lni lni-map-marker me-1"></i>Liverpool, UK</span>
                                                        <br/>
														<span class="text-muted me-2"><i class="lni lni-laptop-phone me-1"></i>Product Designer</span>
                                                        <br/>
														<span class="text-muted me-2"><i class="lni lni-calendar me-1"></i>2012 - 2014</span>
                                                        <br/>
													</div>
													<div class="esclio-110-decs full-width">
														<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam <a href="javascript:void(0);" class="theme-cl">Read More..</a></p>
													</div>
												</div>
											</li>
											
											<li>
												<div class="esclio-110 bg-light rounded px-3 py-3">
													<h4 class="mb-0 ft-medium fs-md">Swap Designd</h4>
													<div class="esclio-110-info full-width mb-2">
														<span class="text-muted me-2"><i class="lni lni-map-marker me-1"></i>Liverpool, UK</span>
                                                        <br/>
														<span class="text-muted me-2"><i class="lni lni-laptop-phone me-1"></i>UI/UX Designer</span>
                                                        <br/>
														<span class="text-muted me-2"><i class="lni lni-calendar me-1"></i>2015 - 2021</span>
                                                        <br/>
													</div>
													<div class="esclio-110-decs full-width">
														<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam <a href="javascript:void(0);" class="theme-cl">Read More..</a></p>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
								
							
								<div class="abt-cdt d-block full-width">
									<h4 class="ft-medium mb-1 fs-md">Skills</h4>
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
						
							
						</div>
						
					</div>
				</div>
			</section>
        <Footer/>
        </motion.div>
    </> );
}

export default CandDet;