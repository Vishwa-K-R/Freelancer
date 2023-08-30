import { Link } from "react-router-dom";
import transition from "../Anim/Transition";
import {motion} from "framer-motion"
import axios from 'axios';
import { useState } from "react";
function Profile() {

	const [name,setName]=useState('');
	const [job_title,setJob_title]=useState('');
	const [ph_no,setPh_no]=useState('');
	const [salary,setSalary]=useState('');
	const [age,setAge]=useState('');
	const [experience,setExperience]=useState('');
	const [language,setLanguage]=useState('');
	const [about,setAbout]=useState('');
	const [facebook,setFacebook]=useState('');
	const [twitter,setTwitter]=useState('');
	const [linkedln,setLinkedln]=useState('');
	const [googleplus,setGoogleplus]=useState('');
	const [country,setCountry]=useState('');
	const [state,setState]=useState('');
	const [fulladdress,setFulladdress]=useState('');
	const [latitude,setLatitude]=useState('');
	const [longitude ,setLongitude ]=useState('');
	
	const data = {name,job_title ,ph_no,salary,age,experience,language,about,facebook,twitter,linkedln,googleplus,country,state,fulladdress,latitude,longitude };
	console.log(data);	
	
	function onAxios(e)
	{
		e.preventDefault();
		console.log("datas",data);	
		axios.post("http://localhost:8080/postProfile",data)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
		}

	
    return ( <>
	<motion.div className="ani"
			initial={{opacity: 0}}
			animate={{opacity: 2}}
			exit={{opacity:0}}
			>
    <div class="dashboard-wrap bg-light">
				
				<a class="mobNavigation" data-bs-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
					<i class="fas fa-bars me-2"></i>Dashboard Navigation
				</a>
				 <div class="collapse" id="MobNav">
					<div class="dashboard-nav">
						<div class="dashboard-inner">
						<ul data-submenu-title="Main Navigation">
							<li ><Link to="/Dash"><i class="lni lni-dashboard mr-2"></i>Dashboard</Link></li>
                            <li ><Link to="/JobPost"><i class="lni lni-dashboard mr-2"></i>Post New Job</Link></li>
                            <li ><Link to="/CompResume"><i class="lni lni-dashboard mr-2"></i>Post New Job</Link></li>
								</ul>
							<ul data-submenu-title="My Accounts">
								<li className="active"><Link to="/Profile"><i className="lni lni-user me-2"></i>My Profile </Link></li>
								<li ><Link to="/ChangePass"><i className="lni lni-user me-2"></i>Change Password </Link></li>
							
								<li><a href=""><i className="lni lni-trash-can me-2"></i>Delete Account</a></li>
								<li><Link to="/logout"><i className="lni lni-power-switch me-2"></i>Log Out</Link></li></ul>
						</div>					
					</div>
				</div>
				
				<div class="dashboard-content" >
					<div class="dashboard-tlbar d-block mb-5">
						<div class="row">
							<div class="colxl-12 col-lg-12 col-md-12">
								<h1 class="ft-medium">My Profile</h1>
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item text-muted"><a href="#">Home</a></li>
										<li class="breadcrumb-item text-muted"><a href="#">Dashboard</a></li>
										<li class="breadcrumb-item"><a href="#" class="theme-cl">My Profile</a></li>
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
										<div class="dashboard_header_flex">
											<h4 class="mb-0 ft-medium fs-md"><i class="fa fa-user me-1 theme-cl fs-sm"></i>My Account</h4>	
										</div>
									</div>
									
									<div class="_dashboard_content_body py-3 px-3">
										<form class="row">
											<div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
												<div class="custom-file avater_uploads">
												  <input type="file" class="custom-file-input" id="customFile"/>
												  <label class="custom-file-label" for="customFile"><i class="fa fa-user"></i></label>
												</div>
											</div>
											
											<div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
												<div class="row">
													<div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Full Name</label>
															<input type="text" class="form-control rounded" placeholder=" Vinoth" 
														 	onChange={(event) => setName(event.target.value)}
															/>
														</div>
														{/* <h1>name{name}</h1> */}
													</div>
													<div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Job Title</label>
															<input type="text" class="form-control rounded" placeholder=" Developer"
															onChange={(event) => setJob_title(event.target.value)}
															/>
														</div>
													</div>
													<div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Phone</label>
															<input type="text" class="form-control rounded" placeholder=" 9789456123"
															onChange={(event) => setPh_no(event.target.value)}
															/>
														</div>
													</div>
													<div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Expected Salary</label>
															<input type="number" class="form-control rounded" placeholder=" 50000"
															onChange={(event) => setSalary(event.target.value)}
															/>
														</div>
													</div>
													<div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Age</label>
															<input type="number" class="form-control rounded" placeholder=" 19"
															onChange={(event) => setAge(event.target.value)}
															/>
														</div>
													</div>
													<div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Experiance</label>
															<input type="number" class="form-control rounded" placeholder="5"
															onChange={(event) => setExperience(event.target.value)}
															/>
														</div>
													</div>
													<div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Language</label>
															<input type="email" class="form-control rounded" placeholder=" Englisg, Hindi"
															onChange={(event) => setLanguage(event.target.value)}
															/>
														</div>
													</div>
													<div class="col-xl-12 col-lg-12">
														<div class="form-group">
															<label class="text-dark ft-medium">About Info</label>
															<textarea class="form-control with-light" placeholder="e.x About your Skills and Education details"
															onChange={(event) => setAbout(event.target.value)}
															></textarea>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						
						<div class="row">
							<div class="col-lg-12 col-md-12">
								<div class="_dashboard_content bg-white rounded mb-4">
									<div class="_dashboard_content_header br-bottom py-3 px-3">
										<div class="dashboard_header_flex">
											<h4 class="mb-0 ft-medium fs-md"><i class="ti-facebook me-1 theme-cl fs-sm"></i>Social Accounts</h4>	
										</div>
									</div>
									
									<div class="_dashboard_content_body py-3 px-3">
										<form class="row">
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">Facebook</label>
													<input type="text" class="form-control rounded" placeholder="https://www.facebook.com/"
													onChange={(event) => setFacebook(event.target.value)}
													/>
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">Twitter</label>
													<input name='Twitter' type="text" class="form-control rounded" placeholder="https://www.twitter.com/"
													onChange={(event) => setTwitter(event.target.value)}
													/>
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">LinkedIn</label>
													<input name='LinkedIn' type="text" class="form-control rounded" placeholder="https://www.linkedin.com/"
													onChange={(event) => setLinkedln(event.target.value)}
													/>
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">GooglePlus</label>
													<input name='GooglePlus' type="text" class="form-control rounded" placeholder="https://www.gplus.com/"
													onChange={(event) => setGoogleplus(event.target.value)}
													/>
												</div>
											</div>
											
										</form>
									</div>
								</div>
							</div>
							
							<div class="col-lg-12 col-md-12">
								<div class="_dashboard_content bg-white rounded mb-4">
									<div class="_dashboard_content_header br-bottom py-3 px-3">
										<div class="dashboard_header_flex">
											<h4 class="mb-0 ft-medium fs-md"><i class="fas fa-lock me-1 theme-cl fs-sm"></i>Contact Information</h4>	
										</div>
									</div>
									
									<div class="_dashboard_content_body py-3 px-3">
										<form class="row">	
											<div class="col-xl-6 col-lg-6 col-md-12">
                                            <div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Country</label>
															<input type="textr" class="form-control rounded"
															onChange={(event) => setCountry(event.target.value)}
															/>
														</div>
														<div class="form-group">
															<label class="text-dark ft-medium">State</label>
															<input type="text" class="form-control rounded"
															onChange={(event) => setState(event.target.value)}
															/>
														</div>
											</div>
											</div>
											<div class="col-xl-12 col-lg-12 col-md-12">
												<div class="form-group">
													<label class="text-dark ft-medium">Full Address</label>
													<input type="text" class="form-control rounded" placeholder="#10 Marke Juger, SBI Road"
													onChange={(event) => setFulladdress(event.target.value)}
													/>
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-12">
												<div class="form-group">
													<label class="text-dark ft-medium">Latitude</label>
													<input type="text" class="form-control rounded" placeholder="#10 Marke Juger, SBI Road"
													onChange={(event) => setLatitude(event.target.value)}
													/>
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-12">
												<div class="form-group">
													<label class="text-dark ft-medium">Longitude</label>
													<input type="text" class="form-control rounded" placeholder="#10 Marke Juger, SBI Road"
													onChange={(event) => setLongitude(event.target.value)}
													/>
												</div>
											</div>
											<div class="col-xl-12 col-lg-12">
												<div class="form-group">
													<button type="button" class="btn btn-md ft-medium text-light rounded theme-bg" onClick	={onAxios}>Save Changes</button>
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
			</motion.div>
    </> );
}

export default transition(Profile);