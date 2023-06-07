import React, { useContext, useEffect } from "react";
import './Navbar.css'
import { Link, useNavigate } from "react-router-dom";
import { Col,Row } from "reactstrap";
//Falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
//import auth from '../firebase-config.js'
import {auth} from './../../Firebase_Config_js/firebase-config'
import {signOut} from 'firebase/auth';
import { h, userContextObject } from "../../context/useContext";
export default function Navbar() {
  let navigate = useNavigate();
  // using context (sign in + sign up models).
 //To get toggleModel userContextObject but not work.
  //const contextToLogout =useContext();
  let logOut = async function () {
     try {
      await signOut(auth);
     userContextObject.toggleModel="close";
     let  logOutUser={email:"Is logged out",password:""};
      userContextObject.currentUser=logOutUser;
     navigate('/logout')
     }
     catch(err) {
         console.log("err");
         navigate('/logout');
     }
     userContextObject.toggleModel="close";
     let  signUpUserAfterResponse={email:"Is logged out",password:""};
      userContextObject.currentUser=signUpUserAfterResponse;
     navigate('/logout')
  };
  return (
      <div className="Navbar navbar-light ">
        <Link className="HomepageLink" to="/">Home Page</Link>
        <div className="container">
          <Row>
            <Col>
            <button className="btn btn-primary" onClick={()=>{navigate("/sign-up")}}>Signup</button>
            </Col>
            <Col>
            <button className="btn btn-primary" onClick={()=>{navigate("/sign-in")}}>Signin</button>
            </Col>
            <Col>
            <button onClick={logOut} className="LogoutBtn">
              Logout
            </button>
            </Col>
            </Row>      
        </div>
      </div>
  );
}
