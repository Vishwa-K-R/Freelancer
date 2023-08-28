import { useState } from "react";
import {
    signInWithEmailAndPassword,
  } from "firebase/auth";
import { auth } from "./firebase-config";
import Logimg from "../img/sign-in.png"
import { Link } from "react-router-dom";
function Login() {
    const [loginEmail, setloginEmail]= useState("");
    const [loginpassword, setloginpassword]= useState("");

    const login = async() =>
    {
        try {
            const user = await signInWithEmailAndPassword(
              auth,
              loginEmail,
              loginpassword
            );
            console.log(user);
          } catch (error) {
            console.log(error.message);
          }
    };

    return ( <>
    <div className="logcon">
     <div>

            
<div class="main-content">

    <div class="page-content">

        <section class="bg-auth">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12">
                        <div class="card auth-box">
                            <div class="row g-0">
                                <div class="col-lg-6 text-center">
                                    <div class="card-body p-4">
                                     
                                            
                                        <div class="mt-5">
                                            <img src={Logimg} alt="" class="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6" style={{backgroundColor:"#493ef0"}}>
                                    <div class="auth-content card-body p-5 h-100 text-white">
                                        <div class="w-100">
                                            <div class="text-center mb-4">
                                                <h5>Welcome Back !</h5>
                                                <p class="text-white-70">Sign in to continue to Jobcy.</p>
                                            </div>
                                            <form action="index.html" class="auth-form">
                                                <div class="mb-3">
                                                    <label for="usernameInput" class="form-label">Username</label>
                                                    <input type="text" 
                                                        onChange={(event) => {
                                                            setloginEmail(event.target.value);
                                                          }}
                                                    class="form-control" id="usernameInput" placeholder="Enter your username" required=""/>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="passwordInput" class="form-label">Password</label>
                                                    <input type="password"
                                                        onChange={(event) => {
                                                            setloginpassword(event.target.value);
                                                          }}
                                                    class="form-control" id="passwordInput" placeholder="Enter your password" required=""/>
                                                </div>
                                                <div class="mb-4">
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="flexCheckDefault"/>
                                                        <label class="form-check-label" for="flexCheckDefault">Remember me</label>
                                                        
                                                        <a href="reset-password.html" class="float-end text-white fp">Forgot Password?</a>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="submit" class="btn btn-white btn-hover w-100">Sign In</button>
                                                </div>
                                            </form>
                                            <div class="mt-4 text-center">
                                                <p class="mb-0">Don't have an account ? <Link to="/SignUp" class="fw-medium text-white text-decoration-underline"> Sign Up </Link></p>
                                                <hr></hr>
                                                <p class="mb-0">Login With Phone Number ! <a href="sign-up.html" class="fw-medium text-white text-decoration-underline"> Click Here </a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
    </div>

</div>
<button onClick={login}>login</button>

</div>
</div>
    </> );
}

export default Login;