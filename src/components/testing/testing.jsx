import { answersList } from '../../constants/app'
import Answer from '../answer/answer'
import './testing.scss'

const Testing = () => {
  const pmDatas = [
      {
        title: 'Время',
        descr: 'Вы прошли тестирование за:  ',
        time: '0:09:35',
        src: '/stopwatch.png',
        alt: 'oclock'
      },
      {title: 'Оценка',
        descr: 'Вы прошли тестирование за:  ',
        time: '0:09:35',
        src: '/thumbs.png',
        alt: 'oclock'
      },
      {title: 'Статус',
        descr: 'Вы прошли тестирование за:  ',
        time: '0:09:35',
        src: '/task.png',
        alt: 'oclock'
      },
  ]
  return (
    <div className='testing'>
      <p className="testing__result-title">Результаты тестирования</p>
      <ul className="testing__properties">
        {pmDatas.map((item,index) => (
          <li key={index} className="testing__properties-item">
            <img src={item.src} alt={item.alt} className="testing__properties-item--img" />
            <p className="testing__properties-item--name">{item.title}</p>
            <p className="testing__properties-item--descr">{item.descr}</p>
            <p className="testing__properties-item--time">{item.time}</p>
          </li>
        ))}
      </ul>
      <p className="testing__answer-title">Разбор ответов на вопросы</p>
      <ul className="testing__answers">
        {answersList.map((item,index) => (
          <Answer key={index} index={index} answerData={item}/>
        ))}
      </ul>
    </div>
  )
}

export default Testing