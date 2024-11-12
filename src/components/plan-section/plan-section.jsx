import { planList } from '../../constants/app'
import './plan-section.scss'
const PlanSection = () => {
  return (
    <div className="plan-container" id='plan'>
      <div className='plansection'>
        <h4>Har bir ayti sohasi uchun o'quv rejasi</h4>
        <ul className="plansection__list">
          {planList.map(item => (
            <li key={item.duration} className="plansection__list-item">
            <div className="plansection__list-item--time">
              <p>{item.duration}<span>oy</span></p>
            </div>
            <p className="plansection__list-item--info">
              {item.info}
            </p>
          </li>
          ))}
          
        </ul>
      </div>
    </div>
  )
}

export default PlanSection