import { Link } from "react-router-dom";
import "../Css/CombinedCss.css"
import Footer from "./Footer";
import HomeBanner from "./HomeBanner";
import ListedJobs from "./ListedJobs";
import MoreJobs from "./MoreJobs";
import React,{useEffect,useState} from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import { motion } from "framer-motion";
import CustomerRev from "./CustomerRev";
import back from "../img/banner-5.jpg"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import "./Dum.css"
import OtpVerification from "../Login/OtpVerification";


function Nav() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
	  setOpen(true);
	};
  
	const handleClose = () => {
	  setOpen(false);
	};
  

	const [mobileMenuActive, setMobileMenuActive] = useState(false);

	const toggleMobileMenu = () => {
	  setMobileMenuActive(!mobileMenuActive);
	};
	const  [loading,setLoading] = useState(false);
    useEffect(()=>
    {setLoading(true)
        setTimeout(()=>
        {setLoading(false)
            
        },1000)
    },[]);
    return ( <>

    <div className='Loaders'>
        {
        loading ?(
            
            <PuffLoader size={100} color={'green'} loading={loading} cssOverride={{
				'flex':'1',
				'justifyContent':'center',
				'textAlign':"center",
              }}/>
        ):
        (
			<motion.div className="ani"
			initial={{opacity: 0}}
			animate={{opacity: 2}}
			exit={{opacity:0}}
			>
	  <Dialog open={open} onClose={handleClose}>
        <DialogTitle><h4 style={{fontWeight:"bolder",textAlign:"center"}}>Get Touch With Us</h4></DialogTitle>
        <DialogContent>
          <DialogContentText style={{fontWeight:"bolder",textAlign:"center"}}>
            Please Enter Your Number To Get Otp
          </DialogContentText>
		  
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mobile Number"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Get Otp</Button>
        </DialogActions>
      </Dialog>

<div id="main-wrapper">
<div class="header header-transparent change-logo"> 
	 <div class="container"> 
		<nav id="navigation" class="navigation navigation-landscape">
			<div class="nav-menus-wrapper">
				{/* <ul class="nav-menu">
				
					<li><a href="#">Home</a></li>
					
					<li><a href="#">Candidates</a>
						
					</li>
					
					<li><a href="#">Employers</a>
						
					</li>
					
					<li><Link to="/CandResume">Candidates Resumes</Link>
						
					</li>
					
				</ul> */}
				<div className="mobile-nav" onClick={toggleMobileMenu}>
          <i className="fas fa-bars" style={{color:"black"}}></i>
        </div>
        <div className={`site-nav-menu ${mobileMenuActive ? 'mobile-menu' : ''} flex-center-full-hw`}>
          <ul className="primary-menu" style={{paddingLeft:100}}>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Works</a></li>
			<li>
			<Link to="/CandResume">Candidates Resumes</Link>
			</li>
			
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
			
			<ul class="nav-menu nav-menu-social align-to-right" style={{paddingLeft:70}}>
					<li>
						<a style={{cursor:"pointer"}}  onClick={handleClickOpen} class="ft-medium">
							<i class="lni lni-user me-2"></i>Sign In
						</a>
					</li>
					<li class="add-listing">

						<Link to="/Jobpost" class="theme-bg" ><i class="lni lni-circle-plus me-1"></i> Post a Job</Link>
					</li>
				</ul>
			
          </ul>
		  
        </div>
				
			</div>
			
		</nav> 
	 </div> 
	 </div> 

<div className="home-banner margin-bottom-0"  style={{backgroundColor:"green",backgroundImage: `url(${back})`}} data-overlay="5">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12 ">
				
				<div className="banner_caption text-center mb-5">
					<h1 className="banner_title ft-bold mb-1">Explore More Than 10K+ Jobs</h1>
					<p className="fs-md ft-medium">Hi Friends, Your Dream Jobs is Waiting in Your Local City</p>
				</div>
				
				<form className="bg-white rounded p-1">
					<div className="row gx-0">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
							<div className="form-group mb-0 position-relative">
								<input type="text" className="form-control lg left-ico" placeholder="Job Title, Keyword or Company"/>
								<i className="bnc-ico lni lni-search-alt"></i>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
							<div className="form-group mb-0 position-relative">
								<input type="text" className="form-control lg left-ico" placeholder="Job Place"/>
								<i className="bnc-ico lni lni-target"></i>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
							<div className="form-group mb-0 position-relative">
								<select className="form-select lg b-0">
								  <option value="1">Choose Location</option>
								  <option value="2">Los Angeles</option>
								  <option value="3">San Francisco</option>
								  <option value="4">San Diego</option>
								  <option value="5">Philadelphia</option>
								  <option value="6">Denver</option>
								  <option value="7">Houston</option>
								</select>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
							<div className="form-group mb-0 position-relative">
								<button className="btn full-width custom-height-lg theme-bg text-white fs-md" type="button">Find Job</button>
							</div>
						</div>
					</div>
				</form>
				
			</div>
		</div>
	</div>
</div>

<MoreJobs/>
<ListedJobs/>
<CustomerRev/>
<Footer/>
</div>

	</motion.div>


        )
    }
    </div>
    </> );
}

export default Nav;