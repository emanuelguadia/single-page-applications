import React, { useEffect, useState } from "react";
import "./Signup.css";
import UseContext, {
  userContext,
  userContextObject,
} from "./../../context/useContext";
import { useContext } from "react";
export default function Signup() {
  const [signUp, setSignUp] = useState();
  let ObjectContext = useContext(userContext);
  useEffect(() => {
    //setSignUp(ObjectContext.signUp);
    //console.log(ObjectContext.signUp);
  }, [ObjectContext]);
  return (
    <div >
      <UseContext>
        <h1>Sign Up</h1>
        <form
          onSubmit={(args) => {
            args.preventDefault();
            console.log("first function form Sign Up ");
            let EmailAddress = args.target.EmailAddress.value;
            let password = args.target.password.value;
            userContextObject.signUp(EmailAddress, password);
          }}
          method="post"
          className="formToSignUp"
       >
          <span>Email address</span>
          <input type="text" name="EmailAddress" placeholder="Email address" />
          <span>Password</span>
          <input type="password" name="password" placeholder="Password" />
          <span>Repeat Password </span>
          <input type="password" name="RepeatPassword" placeholder="Repeat Password " />
          <button className="btn btn-primary">Sign In</button>
        </form>
      </UseContext>{" "}
    </div>
  );
}
