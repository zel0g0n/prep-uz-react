import { inviteDataList } from '../../constants/app'
import './invite.scss'
const Invite = () => {
  return (
    <div className='invite'>
      <ul className="invite__list">
        {inviteDataList.map(item => (
          <li key={item.alt} className="invite__list-item">
            <div className="invite__list-item--descr">
              <p className="item__descr-descr--title">{item.title}</p>
              <p className="item__descr-descr--info">{item.info}</p>
            </div>
            <img src={item.src} alt={item.alt} className="invite__list-item--img" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Invite