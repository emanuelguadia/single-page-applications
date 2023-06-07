import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Signin from '../components/signin/Signin'
import Signup from '../components/signup/Signup'
import HomePage from '../components/home_page/HomePage'
export default function Routing() {
  return (
    <> 
      <Routes>
      <Route path="/" element={<HomePage/>} />  
      <Route path="/logout" element={<HomePage/>} />  
      <Route path="/sign-in" element={<Signin/>} />  
      <Route path="/sign-up" element={<Signup/>} />   
      </Routes>
    </>  

  )
}
