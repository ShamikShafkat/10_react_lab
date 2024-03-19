import React, { useState } from 'react'


const PasswordTextField = (props)=>{
    
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const onPasswordChange = (value)=>{
    console.log("Inside password component")
    console.log(value)
    setPassword(value)
    props.onPasswordChange(value)
  }

    return(
        <div className={'inputContainer'}>
        <input
          value={password}
          type='password'
          placeholder={props.placeholder}
          onChange={(ev) => onPasswordChange(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
    )
}

export default PasswordTextField