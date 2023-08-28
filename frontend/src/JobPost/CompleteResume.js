import React, { useState } from 'react';
import {motion} from "framer-motion"
import axios from 'axios';
import {Link} from "react-router-dom"
function CompleteProfile() {
    const [fname,setFName]=useState('');
    const [mname,setMName]=useState('');
    const [lname,setLName]=useState('');
	const [job_title,setJob_title]=useState('');
	const [ph_no,setPh_no]=useState('');
	const [salary,setSalary]=useState('');
	const [age,setAge]=useState('');
	const [experience,setExperience]=useState('');
	const [language,setLanguage]=useState('');
	const [about,setAbout]=useState('');
	const [country,setCountry]=useState('');
	const [state,setState]=useState('');
	const [fulladdress,setFulladdress]=useState('');
	const [latitude,setLatitude]=useState('');
	const [longitude ,setLongitude ]=useState('');
    const [highskl ,setHighskl ]=useState('');
    const [intermedium ,setIntermedium ]=useState('');
    const [graduation,setGraduation ]=useState('');
    const [university ,setUniversity ]=useState('');
    const [degree,setDegree ]=useState('');
    const [tpoc ,setTpoc ]=useState('');
    const [graduatedyear ,setGraduatedyear ]=useState('');
    const [pcoa ,setPcoa ]=useState('');
    const [co ,setCO ]=useState('');
    const [summarysac ,setSummarysac ]=useState('');
    const [eil3y ,setEil3y ]=useState('');
    const [eil2y ,setEil2y ]=useState('');
    const [eil1y ,setEil1y ]=useState('');
    const [syh ,setSyh ]=useState('');
	
	const data = {fname,mname,lname,job_title ,ph_no,salary,age,experience,language,about,country,state,fulladdress,latitude,longitude,highskl,intermedium,graduation,university,degree,tpoc,graduatedyear,pcoa,co,summarysac,eil1y,eil2y,eil3y,syh };
	console.log(data);	
	
	function onAxios(e)
	{
		e.preventDefault();
		console.log("datas",data);	
		axios.post("http://localhost:8080/postResume",data)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
		}
    
    return ( 
        <>
         <motion.div classNameName="ani"
			initial={{opacity: 0}}
			animate={{opacity: 2}}
			exit={{opacity:0}}
			>
        <div className="clearfix"></div>
        
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
                            <li ><Link to="/AppliedJobs"><i className="lni lni-dashboard mr-2"></i>Applied Jobs</Link></li>
                            <li className="active"><Link to="/AppliedJobs"><i className="lni lni-dashboard mr-2"></i>Complete Your Resume</Link></li>
                            <li ><Link to="/JobAccept"><i className="lni lni-dashboard mr-2"></i>Manage Jobs</Link></li>
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
            
            <div class="dashboard-content">
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
											<h4 class="mb-0 ft-medium fs-md"><i class="fa fa-user me-1 theme-cl fs-sm"></i>Basic Info</h4>	
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
															<label class="text-dark ft-medium">First Name</label>
															<input type="text" class="form-control rounded" placeholder=" Vinoth" required
                                                            onChange={(event) => setFName(event.target.value)}
                                                            />
														</div>
													</div>
													<div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Midle Name</label>
															<input type="text" class="form-control rounded" placeholder=" Optional"
                                                            onChange={(event) => setMName(event.target.value)}
                                                            />
														</div>
													</div>
													<div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Last Name</label>
															<input type="text" class="form-control rounded" placeholder=" M"
                                                            onChange={(event) => setLName(event.target.value)}
                                                            />
														</div>
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
															<input type="number" class="form-control rounded" placeholder=" 9789456123"
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
															<label class="text-dark ft-medium">Experiance in Years</label>
															<input type="number" class="form-control rounded" placeholder="5"
                                                            onChange={(event) => setExperience(event.target.value)}
                                                            />
														</div>
													</div>
													<div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Language</label>
															<input type="text" class="form-control rounded" placeholder=" English, Hindi , Tamil"
                                                            onChange={(event) => setLanguage(event.target.value)}
                                                            />
														</div>
													</div>
													<div class="col-xl-12 col-lg-12">
														<div class="form-group">
															<label class="text-dark ft-medium">Tell About Yourself</label>
															<textarea class="form-control with-light" placeholder="e.x About your Skills and Education details"
                                                            onChange={(event) => setAbout(event.target.value)}
                                                            ></textarea>
														</div>
													</div>
													
													{/* <div class="col-xl-12 col-lg-12">
														<div class="form-group">
															<button type="button" class="btn btn-md ft-medium text-light rounded theme-bg" onClick={onAxios}>Save Changes</button>
														</div>
													</div> */}
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
											<h4 class="mb-0 ft-medium fs-md"><i class=""></i>Educational Qualification</h4>	
										</div>
									</div>
									
									<div class="_dashboard_content_body py-3 px-3">
										<form class="row">
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">High School</label>
													<input type="text" class="form-control rounded" placeholder="High School"
                                                    onChange={(event) => setHighskl(event.target.value)}
                                                    />
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">Inter Medium</label>
													<input type="text" class="form-control rounded" placeholder="Inter Medium/"
                                                    onChange={(event) => setIntermedium(event.target.value)}
                                                    />
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">Graduation</label>
													<input type="text" class="form-control rounded" placeholder="Graduation"
                                                    onChange={(event) => setGraduation(event.target.value)}
                                                    />
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">University</label>
													<input type="text" class="form-control rounded" placeholder="University Name"
                                                    onChange={(event) => setUniversity(event.target.value)}
                                                    />
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">Degree</label>
													<input type="text" class="form-control rounded" placeholder="Degree Of Completion"
                                                    onChange={(event) => setDegree(event.target.value)}
                                                    />
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">Time Period Of Course</label>
													<input type="number" class="form-control rounded" placeholder="In years"
                                                    onChange={(event) => setTpoc(event.target.value)}
                                                    />
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">Graduated Year</label>
													<input type="nummber" class="form-control rounded" placeholder="Degree Of Completion Year"
                                                    onChange={(event) => setGraduatedyear(event.target.value)}
                                                    />
												</div>
											</div>
											{/* <div class="col-xl-12 col-lg-12">
												<div class="form-group">
													<button type="button" class="btn btn-md ft-medium text-light rounded theme-bg">Save Changes</button>
												</div>
											</div> */}
											
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
											<h4 class="mb-0 ft-medium fs-md"><i class=""></i>Skills And Cetrification</h4>	
										</div>
									</div>
									
									<div class="_dashboard_content_body py-3 px-3">
										<form class="row">
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">Professional Certificate or Award</label>
													<input type="text" class="form-control rounded" placeholder="Any Cetrification"
                                                    onChange={(event) => setPcoa(event.target.value)}
                                                    />
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">Conferring Organization</label>
													<input type="text" class="form-control rounded" placeholder="From Organization/"
                                                    onChange={(event) => setCO(event.target.value)}
                                                    />
												</div>
											</div>
                                            <div class="col-xl-12 col-lg-12">
														<div class="form-group">
															<label class="text-dark ft-medium">Summary</label>
															<textarea class="form-control with-light" placeholder="Describe Your Qualification"
                                                            onChange={(event) => setSummarysac(event.target.value)}
                                                            ></textarea>
														</div>
											</div>
											
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">Experiance in Last 3rd Years</label>
													<input type="text" class="form-control rounded" placeholder="Experiance in before 3 Years"
                                                    onChange={(event) => setEil3y(event.target.value)}
                                                    />
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">Experiance in Last 2nd Years</label>
													<input type="text" class="form-control rounded" placeholder="Experiance in before 2 Years"
                                                    onChange={(event) => setEil2y(event.target.value)}
                                                    />
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">Experiance in Last 1st Year</label>
													<input type="text" class="form-control rounded" placeholder="Experiance in before 1 Year"
                                                    onChange={(event) => setEil1y(event.target.value)}
                                                    />
												</div>
											</div>

											<div class="col-xl-12 col-lg-12">
														<div class="form-group">
															<label class="text-dark ft-medium">Skills Your Having</label>
															<textarea class="form-control with-light" placeholder="e.x Java,React,UI/UX Developer"
                                                            onChange={(event) => setSyh(event.target.value)}
                                                            ></textarea>
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
							
							<div class="col-lg-12 col-md-12">
								<div class="_dashboard_content bg-white rounded mb-4">
									<div class="_dashboard_content_header br-bottom py-3 px-3">
										<div class="dashboard_header_flex">
											<h4 class="mb-0 ft-medium fs-md"><i class=""></i>Contact Information</h4>	
										</div>
									</div>
									
									<div class="_dashboard_content_body py-3 px-3">
										<form class="row">	
											<div class="col-xl-6 col-lg-6 col-md-12">
                                            <div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Country</label>
															<input type="text" class="form-control rounded"
                                                            onChange={(event) => setCountry(event.target.value)}
                                                            />
														</div>
											</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-12">
                                            <div class="col-xl-6 col-lg-6">
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
													<button type="button" class="btn btn-md ft-medium text-light rounded theme-bg" onClick={onAxios}>Save Changes</button>
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
        </>
     );
}
export default CompleteProfile;