import { instructionList } from '../../constants/app'
import './instruction-details.scss'
const InstructionDetails = () => {
  return (
    <div className='instruction' id='instruction'>
      <h4>Bizning O'quv Ko'rsatmalarimiz</h4>
      <ul className="instruction__list">
        {instructionList.map((item,index)=>(
          <li key={index} className="instruction__list-item">
            <div>
              <img src={item.src} alt={item.alt} className="instruction__list-item--img" />
            </div>
            <p className="instruction__list-item--descr">{item.descr}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InstructionDetails