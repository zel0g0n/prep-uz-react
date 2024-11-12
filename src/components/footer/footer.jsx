import logo from '/prep-dark-theme-logo.png'
import { Link } from 'react-router-dom'
import './footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <Link to={'/'}>
        <img src={logo} alt="logo" />
      </Link>
      <p className="footer-info">
        Copyright ©2021 Prep Contest. All rights reserved.
      </p>
    </div>
  )
}

export default Footer