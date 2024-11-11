import PropTypes from 'prop-types'

import './accept-demand-list.scss'
import checkbox from '/checkbox-icon.png'
const AcceptDemandListItem = (props) => {
  return (
    <>
      <li className='acceptdemand__list-item'>
        <div className="item__info">
          <ul className="info__keywords-list">
            {props.keyword.map((item) => (
              <li key={item} className="keyword__list-item">{item}</li>
            ))}
          </ul>
          <h4>{props.title}</h4>
          <ul className="item__property-list">
            {props.properties.map((prp,index) => (
              <li key={index} className="property__list-item">
                <img src={checkbox} alt='checkbox' className="property__list-item--icon" />
                <p className="property__list-item--descr">{prp}</p>
              </li>
            ))}
          </ul>
          <button className="btn accept-btn">Оставить заявку</button>
        </div>
        <img src={props.img.src} alt={props.img.alt} className="item__img" />
      </li>
    </>
  )
}
AcceptDemandListItem.propTypes = {
  keyword: PropTypes.array,
  title: PropTypes.string,
  properties: PropTypes.array,
  img: PropTypes.object
}

export default AcceptDemandListItem