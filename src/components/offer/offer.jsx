// import React from 'react'
import './offer.scss'
import { imgList } from '../../constants/app'
const Offer = () => {
  return (
    <div className='offer'>
      <h1>
        Ваша работа мечты уже ждет вас, <br /> начните сегодня!
      </h1>
      <div className="offer__item">
        <div className="offer__item-clients">
          <div className="item__clients-client">
            <img src="./client-1.png" alt="client" />
          </div>
          <div className="item__clients-client">
            <img src="./client-2.png" alt="client" />
          </div>
          <div className="item__clients-client">
            <img src="./client-3.png" alt="client" />
          </div>
          <div className="item__clients-more">+130</div>
        </div>
        <p className="offer__item-descr">человек уже стали участниками групп по своим направлениям</p>
      </div>
      <button className="offer-btn">
        Оставить заявку
      </button>
      <div className="floating-img">
        {imgList.map(item => (<img key={item.alt} src={item.src} alt={item.alt} />))}
        
      </div>

    </div>
  )
}

export default Offer