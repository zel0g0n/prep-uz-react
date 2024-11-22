import logo from '/logo-letter.png'
import { Link } from 'react-router-dom'
import './footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <Link className='logo-dark' to={'/'}>
        <img src={logo} alt="logo" />prep.uz
      </Link>
      <p className="footer-info">
        Copyright ©2021 Prep Contest. All rights reserved.
      </p>
    </div>
  )
}

export default Footer