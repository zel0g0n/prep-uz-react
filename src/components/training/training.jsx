import './training.scss'
import Clients from '../sections/section'
const Training = () => {
  return (
    <div className='training'>
      <div className="training__item">
      <div className="training__info">
        <p className="training__info-title">
          Оставьте заявку для того чтобы принять участие в обучении
        </p>
        <p className="training__info-descr">
          Участвуйте в вебинарах, делитесь опытом и задавайте вопросы. Все это возможно в отдельных группах, которые доступны при прохождении каждого курса!
        </p>
      <Clients></Clients>
      </div>
      <section></section>
      </div>
    </div>
  )
}

export default Training