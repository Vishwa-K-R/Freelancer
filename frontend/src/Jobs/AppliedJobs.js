import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function AppliedJobs() {
    return ( <>

              <motion.div className="ani"
			initial={{opacity: 0}}
			animate={{opacity: 2}}
			exit={{opacity:0}}
			>
        
        <div className="dashboard-wrap bg-light">
            <a className="mobNavigation" data-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
                <Link to ="/Dash">
                <i className="fas fa-bars mr-2">
                    </i>Dashboard 
                </Link>
               
            </a>
             <div className="collapse" id="MobNav">
                <div className="dashboard-nav">
                    <div className="dashboard-inner">
                    <ul data-submenu-title="Main Navigation">
							<li ><Link to="/Dash"><i className="lni lni-dashboard mr-2"></i>Dashboard</Link></li>
                            <li className="inactive"><Link to="/JobPost"><i className="lni lni-dashboard mr-2"></i>Post New Job</Link></li>
                            <li className="active"><Link to="/AppliedJobs"><i className="lni lni-dashboard mr-2"></i>Applied Jobs</Link></li>
                            <li className="inactive"><Link to="/JobAccept"><i className="lni lni-dashboard mr-2"></i>Manage Jobs</Link></li>
							<li ><Link to="/CompResume"><i className="lni lni-dashboard mr-2"></i>Complete Your Resume</Link></li>

								</ul>
							<ul data-submenu-title="My Accounts">
								<li><Link to="/Profile"><i className="lni lni-user me-2"></i>My Profile </Link></li>
								<li><Link to="/ChangePass"><i className="lni lni-user me-2"></i>Change Password </Link></li>
								
								<li><a href=""><i className="lni lni-trash-can me-2"></i>Delete Account</a></li>
								<li><a href="login.html"><i className="lni lni-power-switch me-2"></i>Log Out</a></li>
							</ul>
                    </div>					
                </div>
            </div>
       <div>
    <div class="dashboard-wrap bg-light">
				<div class="dashboard-content">
					<div class="dashboard-tlbar d-block mb-5">
						<div class="row">
							<div class="colxl-12 col-lg-12 col-md-12">
								<h1 class="ft-medium">My Applied Jobs</h1>
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item text-muted"><a href="#">Home</a></li>
										<li class="breadcrumb-item text-muted"><a href="#">Dashboard</a></li>
										<li class="breadcrumb-item"><a href="#" class="theme-cl">Applied Jobs</a></li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
					
					<div class="dashboard-widg-bar d-block">
						<div class="row">
							<div class="col-xl-12 col-md-12 col-sm-12">
								<div class="cl-justify">
									
									<div class="cl-justify-first">
										<p class="m-0 p-0 ft-sm">You have applied <span class="text-dark ft-medium">26</span> jobs</p>
									</div>
									
									<div class="cl-justify-last">
										<div class="d-flex align-items-center justify-content-left">
											<div class="dlc-list">
												<select class="form-control sm rounded">
													<option>All Jobs</option>
													<option>Full Time</option>
													<option>Part Time</option>
													<option>Freelancing</option>
													<option>Internship</option>
													<option>Contract</option>
												</select>
											</div>
											<div class="dlc-list ms-2">
												<select class="form-control sm rounded">
													<option>Show 20</option>
													<option>Show 30</option>
													<option>Show 40</option>
													<option>Show 50</option>
													<option>Show 100</option>
													<option>Show 250</option>
												</select>
											</div>
										</div>
									</div>
									
								</div>
							</div>
							<div class="col-xl-12 col-lg-12 col-md-12">
								<div class="mb-4 tbl-lg rounded overflow-hidden">
									<div class="table-responsive bg-white">
										<table class="table">
											<thead class="thead-dark">
												<tr>
												  <th scope="col">Job Title</th>
												  <th scope="col">Status</th>
												  <th scope="col">Applied Date</th>
												  <th scope="col">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div class="cats-box rounded bg-white d-flex align-items-center">
															<div class="text-center"><img src="assets/img/c-1-1.png" class="img-fluid" width="55" alt=""/></div>
															<div class="cats-box-caption px-2">
																<h4 class="fs-md mb-0 ft-medium">Fresher UI/UX Designer (3 Year Exp.)</h4>
																<div class="d-block mb-2 position-relative">
																	<span class="text-muted medium"><i class="lni lni-map-marker me-1"></i>Liverpool, London</span>
																	<span class="muted medium ms-2 theme-cl"><i class="lni lni-briefcase me-1"></i>Full Time</span>
																</div>
															</div>
														</div>
													</td>
													<td><span class="text-info">Active</span></td>
													<td>10 Sep 2021</td>
													<td>
														<div class="dash-action">
															<a href="" class="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center me-1"><i class="lni lni-eye"></i></a>
															<a href="" class="p-2 circle text-danger bg-light-danger d-inline-flex align-items-center justify-content-center ms-1"><i class="lni lni-trash-can"></i></a>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						
						<div class="row">
							<div class="col-lg-12 col-md-12 col-sm-12">
								<ul class="pagination">
									<li class="page-item">
									  <a class="page-link" href="#" aria-label="Previous">
										<span class="fas fa-arrow-circle-right"></span>
										<span class="sr-only">Previous</span>
									  </a>
									</li>
									<li class="page-item"><a class="page-link" href="#">1</a></li>
									<li class="page-item"><a class="page-link" href="#">2</a></li>
									<li class="page-item active"><a class="page-link" href="#">3</a></li>
									<li class="page-item"><a class="page-link" href="#">...</a></li>
									<li class="page-item"><a class="page-link" href="#">18</a></li>
									<li class="page-item">
									  <a class="page-link" href="#" aria-label="Next">
										<span class="fas fa-arrow-circle-right"></span>
										<span class="sr-only">Next</span>
									  </a>
									</li>
								</ul>
							</div>
						</div>
                    </div>
                </div>
            </div>
        </div>
	</div>
		</motion.div>
    </> );
}

export default AppliedJobs;