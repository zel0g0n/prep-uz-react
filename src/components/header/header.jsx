import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navbarList } from '../../constants/app'
import './header.scss'

const Header = () => {
  const [isUzb,setUzb] = useState(true)
  
  const changeLanguage = () => {
    setUzb(!isUzb)
  }

  return (
    <>
    
      <div className='header'>
        <Link className='logo' to='/'>
          <img src="./prep-logo.png" alt="logo" />
        </Link>
        <nav>
            <ul className="navbar">
              
              {navbarList.map(item => (
                <li key={item.path} className="navbar__item">
                  <a href={`#${item.path.slice(1)}`}>{item.text}</a>
                </li>
              ))}
              
            </ul>
        </nav>
        <div className="bars-menu"><i className="fa-solid fa-bars"></i></div>
        <div className="header__btns">
          <div  className="language">
            <div onClick={changeLanguage} className={`language__item ${isUzb?'':'not-choosen'}`}>
              <img src="./uzbekistan.png" alt="uzb" className="lang" />
              <p className="lang-text">O'zbek tili</p>
              <img src="./angle-right.png" alt="angle" className="language-btn" />
            </div>
            <div onClick={changeLanguage} className={`language__item ${!isUzb?'':'not-choosen'}`}>
              <img src="./rus.png" alt="rus" className="lang" />
              <p className="lang-text">Русский</p>
              <img src="./angle-right.png" alt="angle" className="language-btn" />
            </div>
          </div>
          <button className="header__button">Sinovdan otish</button>
        </div>
      </div>
      <div className="stroke"></div>
    </>
  )
}

export default Header