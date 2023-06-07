import React from "react";
import { createContext, useState, useEffect } from "react";
// Line 22:36:  'auth' is not defined  no-undef
import { auth } from "./../Firebase_Config_js/firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
export let userContextObject = {
  toggleModel:()=>{},
  modelState:{},
  signUp: ()=>{},
  signIn: ()=>{},
  currentUser:{},
  unsubUser: "",
};
export let userContext = createContext();
export default function UseContext(props) {
  const navigate=useNavigate();
  // sign up
  let signUp =async (email,password) => {
 const  signUpUser = await createUserWithEmailAndPassword(auth, email, password);
 let  signUpUserAfterResponse={email:signUpUser._tokenResponse.email,password:signUpUser._tokenResponse.idToken};
 userContextObject.currentUser=signUpUserAfterResponse;
 userContextObject.toggleModel("signIn");
    navigate('/');
  };
  // sign in
  let signIn = async (email, password) => {
  const  signInUser = await signInWithEmailAndPassword(auth, email, password);
 let  signUpUserAfterResponse={email:signInUser._tokenResponse.email,password:signInUser._tokenResponse.idToken};
   userContextObject.currentUser=signUpUserAfterResponse;
   userContextObject.toggleModel("signUp");
    navigate('/');
  };
  const [currentUser, setCurrentUser] = useState();
  let unsubUser;
  useEffect(() => {
    unsubUser = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
  });  
 // console.log(unsubUser);
    userContextObject.toggleModel=toggleModel;
    userContextObject.modelState=modelState;
    userContextObject.signUp = signUp;
    userContextObject.signIn = signIn;
    //unsubUser._tokenResponse.email
    //unsubUser._tokenResponse.idToken
    userContextObject.currentUser=currentUser;
    userContextObject.currentUser=unsubUser;
     // return unsubUser;//I think not need the return statement here because we have already global state 
     // const [currentUser, setCurrentUser] = useState();
  },[]);
 
  let [modelState, setModelState] = useState({
    signInModelState: false,
    signUpModelState: false,
  });
  let toggleModel = (model) => {
    if (model === "signIn") {
      setModelState({
        signInModelState: true,
        signUpModelState: false,
      });
    }
    if (model === "signUp") {
      setModelState({
        signInModelState: false,
        signUpModelState: true,
      });
    }
    if (model === "close") {
      setModelState({
        signInModelState: false,
        signUpModelState: false,
      });
    }
  };
  return (
    <div container>
    <userContext.Provider value={{
  toggleModel,
  modelState,
  signUp,
  signIn,
  currentUser,
  unsubUser,
}}>
        {props.children}
      </userContext.Provider>
    </div>
  );
}
