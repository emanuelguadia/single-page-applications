import React, { useEffect } from "react";
import "./HomePage.css";
import { userContextObject } from "../../context/useContext";
export default function HomePage() {
  useEffect(() => {
    userContextObject.currentUser.email = "Hi , Sign Up OR Sign In"
  }, []);
  return (
    <div className="HomePage bg-info">
      <h1>home page</h1>
      <h4>The Current User </h4>
      <h6>{userContextObject.currentUser.email}</h6>
      <h3>All Rights Reserved To Omer King&copy;</h3>
    </div>
  );
}
