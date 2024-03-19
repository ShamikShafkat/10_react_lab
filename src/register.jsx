import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./register.css"
import TitleComponent from './components/title'
import EmailTextField from './components/emailTextField'
import PasswordTextField from './components/passwordTextField'
import Button from './components/button'

const Register = (props) => {
  const titleName = 'Register'
  return (
    <div className={'mainContainer'}>
      <TitleComponent title={titleName}/>
      <br />
      <EmailTextField placeholder="Enter your email here"/>
      <br />
      <PasswordTextField placeholder="Enter your password here"/>
      <br />
      <Button path="/login" value="Register Here"/>
    </div>
  )
}

export default Register