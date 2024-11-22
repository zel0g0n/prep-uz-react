import { useState } from 'react'
import './language.scss'

const Language = () => {
  const [isUzb,setUzb] = useState(true)
  
  const changeLanguage = () => {
    setUzb(!isUzb)
  }
  return (
    <div  className="language">
      <div onClick={changeLanguage} className={`language__item ${isUzb?'':'not-choosen'}`}>
        <img src="/uzbekistan.png" alt="uzb" className="lang" />
        <p className="lang-text">O'zbek tili</p>
        <img src="/angle-right.png" alt="angle" className="language-btn" />
      </div>
      <div onClick={changeLanguage} className={`language__item ${!isUzb?'':'not-choosen'}`}>
        <img src="/rus.png" alt="rus" className="lang" />
        <p className="lang-text">Русский</p>
        <img src="/angle-right.png" alt="angle" className="language-btn" />
      </div>
    </div>
  )
}

export default Language