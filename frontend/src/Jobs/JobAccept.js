import { Link } from "react-router-dom";
import {motion } from "framer-motion"
import { useEffect, useState } from "react";
function JobAccept() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
	useEffect(() => {
		window.addEventListener('resize', handleResize);
	
		return () => {
		  window.removeEventListener('resize', handleResize);
		};
	  }, []);
	const [mobileMenuActive, setMobileMenuActive] = useState(false);

	const toggleMobileMenu = () => {
	  setMobileMenuActive(!mobileMenuActive);
	};
    return ( <>
  <motion.div className="ani"
			initial={{opacity: 0}}
			animate={{opacity: 2}}
			exit={{opacity:0}}
			>
        
        <div className="dashboard-wrap bg-light">
            {/* <a className="mobNavigation" data-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
                <Link to ="/Dash">
                <i className="fas fa-bars mr-2">
                    </i>Dashboard 
                </Link>
               
            </a> */}
			{windowWidth > 773 ? <div className="collapse" id="MobNav">
					<div className="dashboard-nav">
						<div className="dashboard-inner">
							<ul data-submenu-title="Main Navigation">
							<li className="active"><Link to="/Dash"><i class="lni lni-dashboard mr-2"></i>Dashboard</Link></li>
                            <li ><Link to="/JobPost"><i class="lni lni-dashboard mr-2"></i>Post New Job</Link></li>
							<li className="inactive"><Link to="/AppliedJobs"><i className="lni lni-dashboard mr-2"></i>AppliedJobs</Link></li>
							<li className="inactive"><Link to="/JobAccept"><i className="lni lni-dashboard mr-2"></i>Manage Jobs</Link></li>
							<li ><Link to="/CompResume"><i className="lni lni-dashboard mr-2"></i>Complete Your Resume</Link></li>
								</ul>
							<ul data-submenu-title="My Accounts">
								<li><Link to="/Profile"><i className="lni lni-user me-2"></i>My Profile </Link></li>
								<li ><Link to="/ChangePass"><i className="lni lni-user me-2"></i>Change Password </Link></li>
								<li><a href=""><i className="lni lni-trash-can me-2"></i>Delete Account</a></li>
								<li><a href="login.html"><i className="lni lni-power-switch me-2"></i>Log Out</a></li>
							</ul>
						</div>					
					</div>
				</div> : <><div className="mobile-nav" onClick={toggleMobileMenu}>
          <i className="fas fa-bars" style={{color:"black",paddingLeft:10}}></i>
        </div>
        <div className={`site-nav-menu ${mobileMenuActive ? 'mobile-menu' : ''} flex-center-full-hw`}>
          <ul className="primary-menu" style={{paddingLeft:20}}>
		  <li className="active"><Link to="/Dash"><i class="lni lni-dashboard mr-2"></i>Dashboard</Link></li>
		  <li ><Link to="/JobPost"><i class="lni lni-dashboard mr-2"></i>Post New Job</Link></li>
		  <li className="inactive"><Link to="/AppliedJobs"><i className="lni lni-dashboard mr-2"></i>AppliedJobs</Link></li>
			<li>
			<li className="inactive"><Link to="/JobAccept"><i className="lni lni-dashboard mr-2"></i>Manage Jobs</Link></li>
			<li ><Link to="/CompResume"><i className="lni lni-dashboard mr-2"></i>Complete Your Resume</Link></li>
			</li>
			<br>
			</br>
			<ul data-submenu-title="My Accounts">
								<li><Link to="/Profile"><i className="lni lni-user me-2"></i>My Profile </Link></li>
								<li ><Link to="/ChangePass"><i className="lni lni-user me-2"></i>Change Password </Link></li>
								<li><a href=""><i className="lni lni-trash-can me-2"></i>Delete Account</a></li>
								<li><a href="login.html"><i className="lni lni-power-switch me-2"></i>Log Out</a></li>
							</ul>
		
			
          </ul>
		  
        </div></>}
             <div className="collapse" id="MobNav">
                <div className="dashboard-nav">
                    <div className="dashboard-inner">
					{windowWidth > 773 ? <div className="collapse" id="MobNav">
					<div className="dashboard-nav">
						<div className="dashboard-inner">
							<ul data-submenu-title="Main Navigation">
							<li className="active"><Link to="/Dash"><i class="lni lni-dashboard mr-2"></i>Dashboard</Link></li>
                            <li ><Link to="/JobPost"><i class="lni lni-dashboard mr-2"></i>Post New Job</Link></li>
							<li className="inactive"><Link to="/AppliedJobs"><i className="lni lni-dashboard mr-2"></i>AppliedJobs</Link></li>
							<li className="inactive"><Link to="/JobAccept"><i className="lni lni-dashboard mr-2"></i>Manage Jobs</Link></li>
							<li ><Link to="/CompResume"><i className="lni lni-dashboard mr-2"></i>Complete Your Resume</Link></li>
								</ul>
							<ul data-submenu-title="My Accounts">
								<li><Link to="/Profile"><i className="lni lni-user me-2"></i>My Profile </Link></li>
								<li ><Link to="/ChangePass"><i className="lni lni-user me-2"></i>Change Password </Link></li>
								<li><a href=""><i className="lni lni-trash-can me-2"></i>Delete Account</a></li>
								<li><a href="login.html"><i className="lni lni-power-switch me-2"></i>Log Out</a></li>
							</ul>
						</div>					
					</div>
				</div> : <><div className="mobile-nav" onClick={toggleMobileMenu}>
          <i className="fas fa-bars" style={{color:"black",paddingLeft:10}}></i>
        </div>
        <div className={`site-nav-menu ${mobileMenuActive ? 'mobile-menu' : ''} flex-center-full-hw`}>
          <ul className="primary-menu" style={{paddingLeft:20}}>
		  <li className="active"><Link to="/Dash"><i class="lni lni-dashboard mr-2"></i>Dashboard</Link></li>
		  <li ><Link to="/JobPost"><i class="lni lni-dashboard mr-2"></i>Post New Job</Link></li>
		  <li className="inactive"><Link to="/AppliedJobs"><i className="lni lni-dashboard mr-2"></i>AppliedJobs</Link></li>
			<li>
			<li className="inactive"><Link to="/JobAccept"><i className="lni lni-dashboard mr-2"></i>Manage Jobs</Link></li>
			<li ><Link to="/CompResume"><i className="lni lni-dashboard mr-2"></i>Complete Your Resume</Link></li>
			</li>
			<br>
			</br>
			<ul data-submenu-title="My Accounts">
								<li><Link to="/Profile"><i className="lni lni-user me-2"></i>My Profile </Link></li>
								<li ><Link to="/ChangePass"><i className="lni lni-user me-2"></i>Change Password </Link></li>
								<li><a href=""><i className="lni lni-trash-can me-2"></i>Delete Account</a></li>
								<li><a href="login.html"><i className="lni lni-power-switch me-2"></i>Log Out</a></li>
							</ul>
		
			
          </ul>
		  
        </div></>}
                    {/* <ul data-submenu-title="Main Navigation">
							<li ><Link to="/Dash"><i className="lni lni-dashboard mr-2"></i>Dashboard</Link></li>
                            <li className="inactive"><Link to="/JobPost"><i className="lni lni-dashboard mr-2"></i>Post New Job</Link></li>
                            <li className="inactive"><Link to="/AppliedJobs"><i className="lni lni-dashboard mr-2"></i>Applied Jobs</Link></li>
                            <li className="active"><Link to="/JobAccept"><i className="lni lni-dashboard mr-2"></i>Manage Jobs</Link></li>
							<li ><Link to="/CompResume"><i className="lni lni-dashboard mr-2"></i>Complete Your Resume</Link></li>

								</ul>
							<ul data-submenu-title="My Accounts">
								<li><Link to="/Profile"><i className="lni lni-user me-2"></i>My Profile </Link></li>
								<li><Link to="/ChangePass"><i className="lni lni-user me-2"></i>Change Password </Link></li>
								
								<li><a href=""><i className="lni lni-trash-can me-2"></i>Delete Account</a></li>
								<li><a href="login.html"><i className="lni lni-power-switch me-2"></i>Log Out</a></li>
							</ul> */}
                    </div>					
                </div>
            </div>
				<div class="dashboard-content">
					<div class="dashboard-tlbar d-block mb-5">
						<div class="row">
							<div class="colxl-12 col-lg-12 col-md-12">
								<h1 class="ft-medium">Shortlisted Resume</h1>
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item text-muted"><a href="#">Home</a></li>
										<li class="breadcrumb-item text-muted"><a href="#">Dashboard</a></li>
										<li class="breadcrumb-item"><a href="#" class="theme-cl">Shortlisted Resume</a></li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
					
					<div class="dashboard-widg-bar d-block">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12">
							
								<div class="px-3 py-2 br-bottom br-top bg-white rounded mb-3">
									<div class="flixors">
										<div class="row align-items-center justify-content-between">
											<div class="col-xl-3 col-lg-4 col-md-5 col-sm-12">
												<h6 class="mb-0 ft-medium fs-sm">07 Shortlisted Resume</h6>
											</div>
											
											<div class="col-xl-9 col-lg-8 col-md-7 col-sm-12">
												<div class="filter_wraps elspo_wrap d-flex align-items-center justify-content-end">
													<div class="single_fitres me-2">
														<select class="form-select simple">
														  <option value="1" selected="">Default Sorting</option>
														  <option value="2">Short By Name</option>
														  <option value="3">Short By Rating</option>
														  <option value="4">Short By Trending</option>
														  <option value="5">Shot By Recent</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										
									</div>
								</div>
								
								<div class="data-responsive">
									<div class="dashed-list-wrap bg-white rounded mb-3">
										<div class="dashed-list-full bg-white rounded p-3 mb-3">
											<div class="dashed-list-short d-flex align-items-center">
												<div class="dashed-list-short-first">
													<div class="dashed-avater"><img src="assets/img/t-3-1.png" class="img-fluid circle" width="70" alt=""/></div>
												</div>
												<div class="dashed-list-short-last">
													<div class="cats-box-caption px-2">
														<h4 class="fs-lg mb-0 ft-medium theme-cl">Sign Karan</h4>
														<div class="d-block mb-2 position-relative">
															<span><i class="lni lni-map-marker me-1"></i>United States</span>
															<span class="ms-2"><i class="lni lni-briefcase me-1"></i>Web Designer</span>
														</div>
														<div class="ico-content">
															<ul>
																<li><a href="#" class="px-2 py-1 medium bg-light-success rounded text-success"><i class="lni lni-download me-1"></i>Download CV</a></li>
																<li><a href="#" data-bs-toggle="modal" data-bs-target="#message" class="px-2 py-1 medium bg-light-info rounded text-info"><i class="lni lni-envelope me-1"></i>Message</a></li>
															</ul>
														</div>
													</div>
												</div>
											</div>
											<div class="dashed-list-last">
												<div class="dash-action">
													<a href="" class="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center me-1"><i class="lni lni-eye"></i></a>
													<a href="" class="p-2 circle text-success bg-light-success d-inline-flex align-items-center justify-content-center"><i class="lni lni-checkmark"></i></a>
													<a href="" class="p-2 circle text-danger bg-light-danger d-inline-flex align-items-center justify-content-center ms-1"><i class="lni lni-trash-can"></i></a>
												</div>
											</div>
										</div>
										<div class="dashed-list-footer p-3 br-top">
											<div class="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
											</div>
											<div class="ico-content">
												<ul>
													<li><span><i class="lni lni-calendar me-1"></i>07 July 2017</span></li>
													<li><span><i class="lni lni-add-files me-1"></i>Recent</span></li>
												</ul>
											</div>
										</div>
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

export default JobAccept;