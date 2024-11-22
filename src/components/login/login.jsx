import { Outlet } from 'react-router-dom'
import Header from '../header/header'
import LoginFooter from '../login-footer/login-footer'
import LoginMain from '../login-main/login-main'
import './login.scss'
const Login = () => {
  
  return (
    <div className='login'>
      <Header></Header>
      <main>
        <LoginMain></LoginMain>
        <Outlet></Outlet>
      </main>
      <LoginFooter></LoginFooter>
    </div>
  )
}

export default Login