import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Language from '../language/language'
import { dashboardNavbarList } from '../../constants/app'
import './dashboard-header.scss'
import { useNavigate } from 'react-router-dom'

const DashboardHeader = ({userData,hasImg}) => {
  const {lastname,firstname} = userData
  const navigate = useNavigate()
  return (
    <div className='dashboard__header'>
     <div className='header'>
        <Link className='logo' to='/dashboard'>
          <img src="/logo-letter.png" alt="logo" />prep.uz
        </Link>
        <nav>
            <ul className="navbar">
              
              {dashboardNavbarList.map(item => (
                <li key={item.path} className="navbar__item">
                  <Link to={item.path}>{item.text}</Link>
                </li>
              ))}
              
            </ul>
        </nav>
        <div className="header__btns">
          <Language></Language>
        </div>
        <div onClick={() => navigate('edit')} className="user__button">
          <div className="user__button-image">
              {hasImg ? <img style={{width: '40px', height: '40px'}} src={hasImg} alt="ave" /> : <span>{lastname[0] + firstname[0]}</span>}

          </div>
          <p className="user__button-name">{lastname + ` ` + firstname}</p>
          <img src="/angle-right.png" alt="angle" className="language-btn" />

        </div>
      </div>
      <div className="stroke"></div>
    </div>
  )
}
DashboardHeader.propTypes = {
  userData: PropTypes.object,
  hasImg: PropTypes.string,
}
export default DashboardHeader

