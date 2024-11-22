import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { navbarList } from '../../constants/app'
import Language from '../language/language'
import './header.scss'

const Header = () => {
  const navigate = useNavigate()

  return (
    <>
    
      <div className='header'>
        <Link className='logo' to='/'>
          <img src="/logo-letter.png" alt="logo" />prep.uz
        </Link>
        <nav>
            <ul className="navbar">
              
              {navbarList.map(item => (
                <li key={item.path} className="navbar__item">
                  <Link to={item.path}>{item.text}</Link>
                </li>
              ))}
              
            </ul>
        </nav>
        <div className="bars-menu"><i className="fa-solid fa-bars"></i></div>
        <div className="header__btns">
          <Language></Language>
          <button onClick={() => navigate('/login')} className="header__button btn">Sinovdan otish</button>
        </div>
      </div>
      <div className="stroke"></div>
    </>
  )
}

export default Header