import { useState } from 'react'
import PropTypes from 'prop-types'
import { useFormHandler } from '../custom-hook/custom-hook'
import './user-profile.scss'
const UserProfile = (props) => {
  const [state,setState] = useState({lastname: '', firstname: '', area: ''})

  const formItemsHandler = (e) => {
    setState(prev => ({...prev,[e.target.name]: e.target.value}))
    
  }
  const handleFormSubmit =  useFormHandler()

  const sendFormData = (e) => {
    
    e.preventDefault()
    props.activateUser(state)
    handleFormSubmit(e,'/dashboard/edit')
    
  }

  return (
    <div className="user">
      <p className="user__title">Пожалуйста, заполните поля с вашими данными</p>
      <form action="" onSubmit={e => sendFormData(e)} className="user__form"> 
        <input type="text" onChange={(e) => formItemsHandler(e,state)} name='lastname' value={state.lastname} placeholder='Фамилия*' />
        <input type="text" onChange={(e) => formItemsHandler(e,state)} name='firstname' value={state.firstname} placeholder='Имя*' />
        <select onChange={(e) => formItemsHandler(e)} className='area' name="area" id="area">
          <option value="area" >Регион</option>
          <option value="tashkent">Ташкент</option>
          <option value="kibray" >Кибрай</option>
        </select>
        <button 
          className='btn'>Подтвердить</button>
      </form>
    </div>
  )
}
UserProfile.propTypes = {
  activateUser: PropTypes.func
}
export default UserProfile