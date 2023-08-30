import React from 'react';
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function JobPost() {
    // const notify = () => 
    // {
    //     try{
    //         toast.success("Job Has been Submitted Successfully!",
    //         {
    //             position: toast.POSITION.TOP_CENTER
    //         })
    //     }
    //     catch(err){
    //         toast.error("Something Went Wrong",
    //         {
    //             position: toast.POSITION.TOP_CENTER
    //         })
    //     }
    // }

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        // const userid = formData.get('userid');
        const applicationDeadline = formData.get('Application Deadline');
        const title = formData.get('Job Title');
        const description = formData.get('Job Description');
        const emailAddress = formData.get('Email Address');
        const username = formData.get('Username');
        const specialisms = formData.get('Specialisms');
        const industry = formData.get('Industry');
        const jobType = formData.get('Job Type');
        const careerLevel = formData.get('CareerLevel');
        const specialisms1 = formData.get('Specialisms');
        const experience = formData.get('Experience');
        const qualification = formData.get('Qualification');
        const gender = formData.get('Gender');
        const country = formData.get('Country');
        const city = formData.get('City');
        const fullAddress = formData.get('Full Address');
        const salary = formData.get('Expected Salary');
        const zipCode = formData.get('Zip Code');
        const latitude = formData.get('Latitude');
        const longitude = formData.get('Longitude');
        
        const data = { title,description ,emailAddress,username,specialisms,industry,jobType,careerLevel,specialisms1,experience,qualification,gender,applicationDeadline,country,city,fullAddress,zipCode,latitude,longitude ,salary};
        data.userId = JSON.parse(localStorage.getItem('user')).phoneNo;
        console.log(data);
      
        axios.post("http://localhost:8080/postJob", data)
          .then((response) => {
            console.log(response);
            toast.success("Job Has been Submitted Successfully!",
            {
                position: toast.POSITION.TOP_CENTER
            })
          })
          .catch((error) => {
            console.log(error);
            toast.error("Something Went Wrong",
            {
                position: toast.POSITION.TOP_CENTER
            })
        });
      };

    return ( <>


        <motion.div classNameName="ani"
			initial={{opacity: 0}}
			animate={{opacity: 2}}
			exit={{opacity:0}}
			>
        <div className="clearfix"></div>
        
    
        <div className="dashboard-wrap bg-light">

            <a className="mobNavigation" data-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
                <i className="fas fa-bars mr-2"></i>Dashboard 
                
                    <ul data-submenu-title="Main Navigation">
							<li ><Link to="/Dash"><i className="lni lni-dashboard mr-2"></i>Dashboard</Link></li>
                            <li className="active"><Link to="/JobPost"><i className="lni lni-dashboard mr-2"></i>Post New Job</Link></li>
                            <li ><Link to="/AppliedJobs"><i className="lni lni-dashboard mr-2"></i>Applied Jobs</Link></li>
                            <li ><Link to="/JobAccept"><i className="lni lni-dashboard mr-2"></i>Manage Jobs</Link></li>
                            <li ><Link to="/CompResume"><i className="lni lni-dashboard mr-2"></i>Complete Your Resume</Link></li>
								</ul>
            </a>
  
             <div className="collapse" id="MobNav">
                <div className="dashboard-nav">
                    <div className="dashboard-inner">
                    <ul data-submenu-title="Main Navigation">
							<li ><Link to="/Dash"><i className="lni lni-dashboard mr-2"></i>Dashboard</Link></li>
                            <li className="active"><Link to="/JobPost"><i className="lni lni-dashboard mr-2"></i>Post New Job</Link></li>
                            <li ><Link to="/AppliedJobs"><i className="lni lni-dashboard mr-2"></i>Applied Jobs</Link></li>
                            <li ><Link to="/JobAccept"><i className="lni lni-dashboard mr-2"></i>Manage Jobs</Link></li>
                            <li ><Link to="/CompResume"><i className="lni lni-dashboard mr-2"></i>Complete Your Resume</Link></li>
								</ul>
							<ul data-submenu-title="My Accounts">
								<li><Link to="/Profile"><i className="lni lni-user me-2"></i>My Profile </Link></li>
								<li><Link to="/ChangePass"><i className="lni lni-user me-2"></i>Change Password </Link></li>
								
								<li><a href=""><i className="lni lni-trash-can me-2"></i>Delete Account</a></li>
								<li><Link to="/logout"><i className="lni lni-power-switch me-2"></i>Log Out</Link></li></ul>
                    </div>					
                </div>
            </div>
            
            <div className="dashboard-content" onSubmit={submitHandler} >
                <div className="dashboard-tlbar d-block mb-5">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="ft-medium">Post A New Job</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item text-muted"><Link to="/Dash">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><a href="#" className="theme-cl">Post Job</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <div className="dashboard-widg-bar d-block">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="_dashboard_content bg-white rounded mb-4">
                                <div className="_dashboard_content_header br-bottom py-3 px-3">
                                    <div className="dashboard_header_flex">
                                        <h4 className="mb-0 ft-medium fs-md"><i className="fa fa-file mr-1 theme-cl fs-sm"></i>Post Job</h4>	
                                    </div>
                                </div>
                                
                                <div className="_dashboard_content_body py-3 px-3">
                                    <form className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="row">
                                            
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Job Title</label>
                                                        <input type="text" name='Job Title'className="form-control rounded" placeholder="Title"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Job Description</label>
                                                        <textarea name='Job Description' className="form-control rounded" placeholder="Job Description"></textarea>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Email Address</label>
                                                        <input name='Email Address' type="text" className="form-control rounded" placeholder="Email"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Username</label>
                                                        <input name='Username' type="text" className="form-control rounded" placeholder="User"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Specialisms</label>
                                                        <select name='Specialisms' className="form-control rounded">
                                                            <option>Accounting</option>
                                                            <option>Banking</option>
                                                            <option>Software</option>
                                                            <option>Hardware</option>
                                                            <option>Hospital</option>
                                                            <option>Fashion Design</option>
                                                            <option>BPO Services</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Industry</label>
                                                        <select name='Industry' className="form-control rounded">
                                                            <option>IT & Software</option>
                                                            <option>Bank Services</option>
                                                            <option>Power Corporation</option>
                                                            <option>Water Supply</option>
                                                            <option>Chemical Plant</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Job Type</label>
                                                        <select name='Job Type' className="form-control rounded">
                                                            <option>Full Time</option>
                                                            <option>Part Time</option>
                                                            <option>Internship</option>
                                                            <option>Contract</option>
                                                            <option>Freelancing</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Career Level</label>
                                                        <select name='CareerLevel' className="form-control rounded">
                                                            <option>Begginer</option>
                                                            <option>Junior</option>
                                                            <option>Manager</option>
                                                            <option>Team leader</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Specialisms</label>
                                                        <select name='Specialisms' className="form-control rounded">
                                                            <option>Web Designing</option>
                                                            <option>JAVA Advance</option>
                                                            <option>PHP Developer</option>
                                                            <option>IOS Developer</option>
                                                            <option>App Developer</option>
                                                            <option>Fashion Designing</option>
                                                            <option>Bank Services</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Experience</label>
                                                        <select name='Experience' className="form-control rounded">
                                                            <option>Begginer</option>
                                                            <option>0 To 6 Month</option>
                                                            <option>1 Years</option>
                                                            <option>2 Years</option>
                                                            <option>3 Years</option>
                                                            <option>4 Years</option>
                                                            <option>5+ Years</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Qualification</label>
                                                        <select name='Qualification' className="form-control rounded">
                                                            <option>Graduation</option>
                                                            <option>Master Degree</option>
                                                            <option>BPharma</option>
                                                            <option>P.H.D.</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Gender</label>
                                                        <select name='Gender' className="form-control rounded">
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Application Deadline</label>
                                                        <input name='Application Deadline' type="date" className="form-control rounded" placeholder="dd-mm-yyyy"/>
                                                    </div>
                                                </div>


                                                <div className="col-xl-4 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Excepted Salary</label>
                                                        <input  name='Expected Salary' type="text" className="form-control" placeholder="0"/>
                                                    </div>
                                                </div>

                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Country</label>
                                                        <input  name='Country' type="text" className="form-control" placeholder="Country"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">City</label>
                                                        <input name='City' type="text" className="form-control" placeholder="City"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Full Address</label>
                                                        <input name='Full Address' type="text" className="form-control" placeholder="#10 Marke Juger, SBI Road"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-4 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Zip Code</label>
                                                        <input  name='Zip Code' type="text" className="form-control" placeholder="Zip"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-4 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Latitude</label>
                                                        <input  name='Latitude' type="text" className="form-control" placeholder="Liverpool"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-4 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Longitude</label>
                                                        <input  name='Longitude' type="text" className="form-control" placeholder="Liverpool"/>
                                                    </div>
                                                </div>
                                                
                                                
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-md ft-medium text-light rounded theme-bg" >Publish Job</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
           
                </div>
    <ToastContainer
    autoClose={5000}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover

    />
            </div>
            
            </motion.div>
    </> );
}

export default JobPost;