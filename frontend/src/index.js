import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Resumes from './Jobs/Resum';
import ProductPage from './ProductListing';
import { Provider } from 'react-redux';
import store from './Redux/Reducers/Store';
import AppliedJobs from './Jobs/AppliedJobs';
import JobAccept from './Jobs/JobAccept';
import ProductComponent from './ProductComponent';
import CompleteProfile from './JobPost/CompleteResume';
import CandDet from './Jobs/CandDet';
import Header66 from './homepage/Dummy';
import Otp from './Login/Otp';
import OtpVerification from './Login/OtpVerification';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<Provider store={store}>
   <BrowserRouter>  
  <Routes>  
  <Route path="/*" element={<App/>}/>
  </Routes>
</BrowserRouter>  

  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();









