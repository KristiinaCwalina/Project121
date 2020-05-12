import React from "react";
import { SignIn } from "../components/SignIn/SignIn";
import { SignUp } from "../components/SignIn/SignUp";
function Login({ isSignIn = true}) {
     return isSignIn? <SignIn/>:<SignUp/>;
}

export default Login;