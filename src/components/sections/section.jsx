import React from 'react'
import './section.scss'
const Clients = () => {
  return (
    <div className='clients-section'>
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
    </div>
  )
}

export default Clients