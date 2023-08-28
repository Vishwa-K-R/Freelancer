import Signimg from "../img/sign-up.png"
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./firebase-config";
import "../Css/SignUp.css"
import { Link } from "react-router-dom";
import Login from "./Login";
import transition from "../Anim/Transition";
function SignUp() {
    // const [userName, setUserName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    

    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            // userName,
            registerEmail,
            registerPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };
  
    


    return ( <>
    <section class="bg-auth">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-10 col-lg-12">
                                    <div class="card auth-box">
                                        <div class="row align-items-center">
                                            <div class="col-lg-6 text-center">
                                                <div class="card-body p-4">
                                                    <a href="index.html"/>
                                                   
                                                
                                                    <div class="mt-5">
                                                        <img src={Signimg} alt="" class="img-fluid"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6" style={{backgroundColor:"#493ef0"}}>
                                                <div class="auth-content card-body p-5 text-white">
                                                    <div class="w-100">
                                                        <div class="text-center">
                                                            <h5>Let's Get Started</h5>
                                                            <p class="text-white-70">Sign Up and get access to all the features of Jobcy</p>
                                                        </div>
                                                        <form action="index.html" class="auth-form">
                                                            <div class="mb-3 sig">
                                                                <label for="usernameInput" class="form-label">Username</label>
                                                                <input 
                                                                    
                                                                class="form-control sig" required="" id="usernameInput" placeholder="Enter your username"/>
                                                            </div>
                                                            <div class="mb-3 sig">
                                                                <label for="passwordInput" class="form-label">Email</label>
                                                                <input type="email"
                                                                        onChange={(event) => {
                                                                            setRegisterEmail(event.target.value);
                                                                          }}
                                                                class="form-control" required="" id="emailInput" placeholder="Enter your email"/>
                                                            </div>
                                                            <div class="mb-3 sig">
                                                                <label for="emailInput" class="form-label">Password</label>
                                                                <input  type="password"
                                                                
                                                                onChange={(event) => {
                                                                    setRegisterPassword(event.target.value);
                                                                  }}
                                                                
                                                                class="form-control" id="passwordInput" placeholder="Enter your password"/>
                                                            </div>
                                                            <div class="mb-4">
                                                                <div class="form-check"><input class="form-check-input" type="checkbox" id="flexCheckDefault"/>
                                                                    <label class="form-check-label" for="flexCheckDefault">I agree to the <a href="#" class="text-white text-decoration-underline">Terms and conditions</a></label>
                                                                </div>
                                                            </div>
                                                            <div class="text-center">
                                                                <button onClick={register} class="btn btn-white btn-hover w-100">Sign Up
                                                            </button>
                                                            </div>
                                                        </form>
                                                        <div class="mt-3 text-center">
                                                        <p class="mb-0">Already a member ? <Link to="/Login" class="fw-medium text-white text-decoration-underline"> Sign In </Link></p>
                        
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button  onClick={register}>click</button>
                    </section>
                
    </> );
}

export default transition(SignUp);