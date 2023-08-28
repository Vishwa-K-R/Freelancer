// import React,{useEffect,useState} from 'react'
// import PuffLoader from "react-spinners/PuffLoader";
// import HomeBanner from '../homepage/HomeBanner';
// import MoreJobs from '../homepage/MoreJobs';
// import ListedJobs from '../homepage/ListedJobs';
// import Comp from '../homepage/Companies';
// import Rev from '../homepage/Review';
// import Footer from '../homepage/Footer';


// function PreLoader() {
//     const  [loading,setLoading] = useState(false);
//     useEffect(()=>
//     {setLoading(true)
//         setTimeout(()=>
//         {setLoading(false)
            
//         },3000)
//     },[]);
//     return ( <>
//     <div className='Loaders'>
//         {
//         loading ?(
            
//             <PuffLoader size={100} color={'green'} loading={loading} cssOverride={{
//                 'margin-left': 720,
//                 'marginTop':300
//               }}/>
//         ):
//         (
//             <div id="main-wrapper">
		
            
// 			<div class="header header-light dark-text">
// 				<div class="container">
// 					<nav id="navigation" class="navigation navigation-landscape">
// 						<div class="nav-header">
// 							<a class="nav-brand" href="#">
								
// 							</a>
// 							<div class="nav-toggle"></div>
// 							<div class="mobile_nav">
// 								<ul>
// 								<li>
// 									<a href="#" data-toggle="modal" data-target="#login" class="theme-cl fs-lg">
// 										<i class="lni lni-user"></i>
// 									</a>
// 								</li>
// 								<li>
// 									<a href="dashboard-post-job-1.html" class="crs_yuo12 w-auto text-white theme-bg">
// 										<span class="embos_45"><i class="fas fa-plus-circle mr-1 mr-1"></i>Post Job</span>
// 									</a>
// 								</li>
// 								</ul>
// 							</div>
// 						</div>
// 						<div class="nav-menus-wrapper">
// 							<ul class="nav-menu">
							
// 								<li><a href="#">Home</a>
									
// 								</li>
								
// 								<li><a href="job-search-v2-1.html">Find Job</a>
									
										
										
// 								</li>
								
// 								<li><a href="browse-resumes-1.html">Candidates Resumes</a>
									
// 								</li>
								
// 								<li><a href="employer-dashboard-1.html">Employer Dashboard</a>
									
// 								</li>
								
							
// 							</ul>
							
// 							<ul class="nav-menu nav-menu-social align-to-right">
// 								<li>
// 									<a href="#" data-toggle="modal" data-target="#login" class="ft-medium">
// 										<i class="lni lni-user mr-2"></i>Sign In
// 									</a>
// 								</li>
// 								<li class="add-listing theme-bg">
// 									<a href="dashboard-post-job-1.html">
// 										<i class="lni lni-circle-plus mr-1"></i> Post a Job
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 					</nav>
// 				</div>
// 			</div>
//     <HomeBanner/>
// <MoreJobs/>
// <ListedJobs/>
// <Comp/>
// <Rev/>
// <Footer/>
//         </div>
//         )
//     }
//     </div>

//     </> );
// }

// export default PreLoader;