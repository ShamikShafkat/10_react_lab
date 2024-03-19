import { useNavigate } from 'react-router-dom'

const Button = (props)=>{
    
  const navigate = useNavigate()

  const onButtonClick = () => {
    props.onClick()
  }

    return(
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={props.value} />
        </div>
    )
}

export default Button