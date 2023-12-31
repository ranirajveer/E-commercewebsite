

import React from 'react'


import { Route, Routes } from 'react-router-dom'
import Invalid from '../pre-auth screens.js/invalid'
import ForgotPassword from '../pre-auth screens.js/forgot-password'
import Register from '../pre-auth screens.js/register'
import LoginPage from '../pre-auth screens.js/login'



function PreAuthenticaton(){
  return (
    <>
    <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<Register/>}/>
        <Route path="/forgot password" element={<ForgotPassword/>}/>
        <Route path='*' element={<Invalid/>}/>
</Routes>
    
    </>
  )
}
export default PreAuthenticaton