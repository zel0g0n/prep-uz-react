import { useFormHandler } from '../custom-hook/custom-hook'
import { useState } from 'react'
import PropTypes from 'prop-types'
import './phone-number.scss'

const PhoneNumber = (props) => {

  const [value,setValue] = useState('')
  function getPhoneNumber(e) {
    setValue(e.target.value)
  }
  const handleFormSubmit = useFormHandler()
  const shareNumber = (e) => {
    e.preventDefault()
    if(value.length>6) {
      const {sendNumber} = props
      sendNumber(value)
      handleFormSubmit(e,'code')
    }
  }
 

  
  return (
    <div className='phnumber'>
      <p className="phnumber__title">Введите номер телефона для верификация пользователя</p>
      <form action="" onSubmit={(e) => shareNumber(e)} className="phnumber__form">
        <input onChange={e => getPhoneNumber(e)} value={value} type="number" placeholder='Номер телефона*' />
        <button 
          className='btn'>Продолжить</button>
      </form>
    </div>
  )
}
PhoneNumber.propTypes = {
  sendNumber: PropTypes.func
}
export default PhoneNumber