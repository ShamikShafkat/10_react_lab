import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"
import TitleComponent from './components/title'
import EmailTextField from './components/emailTextField'
import PasswordTextField from './components/passwordTextField'
import Button from './components/button'

const Login = (props) => {
    const titleName = 'Login'
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [usernameError,setUsernameError] = useState('')
    const [passwordError,setPasswordError] = useState('')


  const onClickHandler = ()=>{
    
    console.log("Button callled")
    if(username!='admin' || password!="1234")
    {   
        setPasswordError("Invalid Credentials")
    }
    else{
        setPasswordError('Success')
    }
  }

  const onUsernameChange = (newUsername)=>{
    console.log('Hello ',username)
    setUsername(newUsername)
  }

  const onPasswordChange = (newPassword)=>{
    console.log(password)
    setPassword(newPassword)
  }


  return (
    <div className={'mainContainer'}>
      <TitleComponent title={titleName}/>
      <br />
      <EmailTextField placeholder="Enter your email here" onUsernameChange={onUsernameChange}/>
      <br />
      <PasswordTextField placeholder="Enter your password here" onPasswordChange={onPasswordChange}/>
      <br />
      <Button path="/register" value="Login Here" onClick={onClickHandler} />
      <label>{passwordError}</label>
    </div>
  )
}

export default Login