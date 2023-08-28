import { Link } from "react-router-dom";
import {motion} from "framer-motion"
// import Fade from 'react-reveal/Fade'; 
function Changepass() {
	return ( <>
     <motion.div classNameName="ani"
			initial={{opacity: 0}}
			animate={{opacity: 2}}
			exit={{opacity:0}}
			>
	{/* <Fade right delay={200}> */}
        
        <div className="dashboard-wrap bg-light">
            <a className="mobNavigation" data-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
                <i className="fas fa-bars mr-2">
                    </i>Dashboard 
            </a>
             <div className="collapse" id="MobNav">
                <div className="dashboard-nav">
                    <div className="dashboard-inner">
                    <ul data-submenu-title="Main Navigation">
							<li ><Link to="/Dash"><i className="lni lni-dashboard mr-2"></i>Dashboard</Link></li>
                            <li ><Link to="/JobPost"><i className="lni lni-dashboard mr-2"></i>Post New Job</Link></li>
							<li className="inactive"><Link to="/AppliedJobs"><i className="lni lni-dashboard mr-2"></i>AppliedJobs</Link></li>
							<li className="inactive"><Link to="/JobAccept"><i className="lni lni-dashboard mr-2"></i>Manage Jobs</Link></li>

								</ul>
							<ul data-submenu-title="My Accounts">
								<li><Link to="/Profile"><i className="lni lni-user me-2"></i>My Profile </Link></li>
								<li className="active"><Link to="/ChangePass"><i className="lni lni-user me-2"></i>Change Password </Link></li>
								
								<li><a href=""><i className="lni lni-trash-can me-2"></i>Delete Account</a></li>
								<li><a href="login.html"><i className="lni lni-power-switch me-2"></i>Log Out</a></li>
							</ul>
                    </div>					
                </div>
            </div>
			
				    <div class="dashboard-content">
					<div class="dashboard-tlbar d-block mb-5">
						<div class="row">
							<div class="colxl-12 col-lg-12 col-md-12">
								<h1 class="ft-medium">Change Password</h1>
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item text-muted"><Link to="/">Home</Link></li>
										<li class="breadcrumb-item text-muted"><Link to="/Dash">Dashboard</Link></li>
										<li class="breadcrumb-item"><Link to="#" class="theme-cl">Change Password</Link></li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
					
					<div class="dashboard-widg-bar d-block">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12">
								<div class="_dashboard_content bg-white rounded mb-4">
									<div class="_dashboard_content_header br-bottom py-3 px-3">
										<div class="_dashboard__header_flex">
											<h4 class="mb-0 ft-medium fs-md"><i class="fa fa-lock me-1 theme-cl fs-sm"></i>Change Password</h4>	
										</div>
									</div>
									
									<div class="_dashboard_content_body py-3 px-3">
										<form class="row">
											<div class="col-xl-8 col-lg-9 col-md-12 col-sm-12">
												<div class="form-group">
													<label class="text-dark ft-medium">Old Password</label>
													<input type="text" class="form-control rounded" placeholder=""/>
												</div>
											</div>
											<div class="col-xl-8 col-lg-9 col-md-12 col-sm-12">
												<div class="form-group">
													<label class="text-dark ft-medium">New Password</label>
													<input type="text" class="form-control rounded" placeholder=""/>
												</div>
											</div>
											<div class="col-xl-8 col-lg-9 col-md-12 col-sm-12">
												<div class="form-group">
													<label class="text-dark ft-medium">Confirm Password</label>
													<input type="text" class="form-control rounded" placeholder=""/>
												</div>
											</div>
											<div class="col-xl-12 col-lg-12">
												<div class="form-group">
													<button type="button" class="btn btn-md ft-medium text-light rounded theme-bg">Save Changes</button>
												</div>
											</div>
											
										</form>
									</div>
								</div>
							</div>
						</div>
						</div>	
					</div>
                    </div>
					{/* </Fade> */}
                    </motion.div>
    </> );
}

export default Changepass;