// import React from 'react'
import Clients from '../sections/section'
import './offer.scss'
import { imgList } from '../../constants/app'
const Offer = () => {
  return (
    <div className='offer'>
      <h1>
        Ваша работа мечты уже ждет вас, <br /> начните сегодня!
      </h1>
      <Clients></Clients>
      
      <div className="floating-img">
        {imgList.map(item => (<img key={item.alt} src={item.src} alt={item.alt} />))}
        
      </div>

    </div>
  )
}

export default Offer