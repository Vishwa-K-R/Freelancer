import { Route,Routes,useLocation } from "react-router-dom";
import Nav from './homepage/nav';
import SignUp from './LoginComp/SignUp';
import Login from './LoginComp/Login';
import Profile from './JobPost/Profile';
import Dashboard from './JobPost/Dashborad';
import JobPost from "../src/JobPost/JobPost"
import { AnimatePresence } from "framer-motion";
import Changepass from "./Account/ChangePassCode";
import JobCat from "./Jobs/JobCat";
import JobList from "./Jobs/Joblist";
import Resumes from "./Jobs/Resum";
import AppliedJobs from "./Jobs/AppliedJobs";
import JobAccept from "./Jobs/JobAccept";
import JobDet from "./Jobs/JobDet";
import ProductPage from "./ProductListing";
import CompleteProfile from "./JobPost/CompleteResume";
import CandDet from "./Jobs/CandDet";
import OtpVerification from "./Login/OtpVerification";
import Logout from "./homepage/Logout";

function App() {
    const location = useLocation();
    return ( <>
{/* <Nav/> */}

<AnimatePresence mode="wait">
<Routes location={location} key={location.pathname}>
<Route path="/" element={<Nav/>}/>
  <Route path='SignUp' element={<SignUp/>}/>
  <Route path='Login' element={<Login/>}/>
  <Route path="/logout" element={<Logout/>}/>
  <Route path='SignUpBack' element={<SignUp/>}/>
  <Route path='JobPost' element={<JobPost/>}/>
  <Route path='profile' element={<Profile/>}/>
  <Route path='Dash' element={<Dashboard/>}/> 
  <Route path='ChangePass' element={<Changepass/>}/>  
  <Route path='JobList' element={<ProductPage/>}/>  
  <Route path='JobCat' element={<JobCat/>}/>  
  <Route path='AppliedJobs' element={<AppliedJobs/>}/>  
  <Route path='CandResume' element={<Resumes/>}/>  
  <Route path='CompResume' element={<CompleteProfile/>}/>  
  <Route path='OtpVerifi' element={<OtpVerification/>}/>  
  <Route path='CandDet' element={<CandDet/>}/>  

  <Route path="/product/:productId" element={<JobDet/>} /> 
  
  <Route path='JobAccept' element={<JobAccept/>}/>  
</Routes>
</AnimatePresence>

    </> );
}

export default App;