import React, { useEffect, useState } from "react";
import "./Signin.css";
import { useContext } from "react";
import UseContext, {
  userContext,
  userContextObject,
} from "./../../context/useContext";
export default function Signin() {
  //const [signIn, setSignIn] = useState();
  //let ObjectContext = useContext(userContextObject);
  useEffect(() => {
   // setSignIn(ObjectContext);
   
  }, []);
  return (
    <div>
      <UseContext>
        <h1>Sign In</h1>
        <form onSubmit={(args)=>{
          console.log("first function form Sign In ")
          let EmailAddress= args.target.EmailAddress.value;
          let password= args.target.password.value;
          userContextObject.signIn(EmailAddress,password);
          args.preventDefault();
          }} method="post" className="formToSignIn">
          <span> Email address</span>
          <input type="text" name="EmailAddress" placeholder="Email address" />
          <span>Password</span>
          <input type="password" name="password" placeholder="Password" />
          <button className="btn btn-primary">Sign In</button>
        </form>
      </UseContext>
    </div>
  );
}
