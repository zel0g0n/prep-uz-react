import { digestList } from '../../constants/app'
import './digest.scss'
const Digest = () => {
  return (
    <div className="digest">
      <div className='digestsection'>
        <h4>Prep Contest Dayjest</h4>
        <ul className="digestsection__list">
          {digestList.map((item,index) => (
            <li key={index} className="digestsection__list-item">
              <img src={item.src} alt={item.alt} className="digestsection__list-item--img" />
              <p className="digestsection__list-item--info">
                {item.info}
              </p>
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  )
}

export default Digest