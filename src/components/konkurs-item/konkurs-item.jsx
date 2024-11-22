import PropTypes from 'prop-types'
import Timer from '../sections/timer'
import './konkurs-item.scss'

const Concurs = (props) => {

  const {name,deadline} = props.concursDatas
  return (
    <div className='frontend'>
      <p className="frontend-title">{name}</p>
      <p className="frontend-info">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
      </p>
      <Timer deadline={deadline}/>
      <form onSubmit={(e) => e.preventDefault()} action="" className="frontend__email">
        <p className="frontend__email-title">Уведомить меня о запуске по E-mail</p>
        <p className="frontend__email-descr">Введите свой E-mail</p>
        <div className="frontend__email-main">
          <input type="email" className="frontend__email-inp" />
          <button  type='submit' className="frontend__email-btn">Отправить</button>
        </div>
      </form>
    </div>
  )
}
Concurs.propTypes = {
  concursDatas: PropTypes.object
}
export default Concurs