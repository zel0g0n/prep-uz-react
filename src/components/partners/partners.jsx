import { partnerslist } from "../../constants/app"
import './partners.scss'
const Partners = () => {
  return (
    <div className='partners'>
      <div className="partners__item">
        <p className="partners__item-title">
          Наши тесты уникальны и способны определить уровень Ваших знаний в определенной категории IT на 100% и созданы при поддержке:
        </p>
        <ul className="partners__item-list">
          {partnerslist.map((item,index) => (
            <li key={index} className="partners__list-item">
              <img src={item.src} alt={item.alt} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Partners