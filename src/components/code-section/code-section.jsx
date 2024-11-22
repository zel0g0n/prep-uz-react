import PropTypes from 'prop-types'
import { useFormHandler } from "../custom-hook/custom-hook"
import { useState } from "react"
import { Link } from "react-router-dom"
import './code-section.scss'
const CodeSection = ({userNumber}) => {
  const [code,setCode] = useState('')
  const codeHandler = (e) => {
    setCode(e.target.value)
  }
  const handleFormSubmit = useFormHandler()
  const sendCode = (e) => {
    e.preventDefault()
    if(code.length > 6) {
      handleFormSubmit(e,'/login/user')
    }
    
  }
  return (
    <div className='code__section'>
      <p className="code__section-title">Введите номер телефона для верификация пользователя <br /> +998{userNumber}</p>
      <Link className="code__section-edit" to={'/login'}>Изменить номер телефона</Link>
      <form action="" onSubmit={(e) => sendCode(e)} className="code__section-form">
        <input onChange={e => codeHandler(e)} value={code} type="password" placeholder='Проверочный код*' />
        <button 
          className='btn'>Продолжить</button>
      </form>
    </div>
  )
}
CodeSection.propTypes = {
  userNumber: PropTypes.string
}
export default CodeSection