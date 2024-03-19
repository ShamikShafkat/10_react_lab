import React, { useState,useEffect } from 'react'


const EmailTextField = (props)=>{
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')


  useEffect(() => {
    console.log("in Email Text Field",email)
    console.log(email)
    props.onUsernameChange(email)
  }, [email]); 

  
    return(
        <div className={'inputContainer'}>
        <input
          value={email}
          placeholder={props.placeholder}
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
    )
}

export default EmailTextField