import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './navigate-panel.scss'
import { useEffect, useState } from 'react'

const NavigatePanel = () => {
  const [route,setRoute] = useState('')
  const p = useLocation()
  function changeRouteName(routename) {
    switch (routename) {
      case 'front-end':
        setRoute('Frontend')
        break;
      case 'back-end':
        setRoute('Backend')
        break;
      case 'p-m':
        setRoute('Тестирование по Back-end')
        break;
      case 'rating':
        setRoute('Рейтинг участников')
        break;
      default:
        setRoute('Мой профиль');
    }
  }
  useEffect(()=>{
    const routeWord = p.pathname.slice(p.pathname.lastIndexOf('/')+1)
    changeRouteName(routeWord)
  },[p])

  
  return (
    <div className='navigate__panel'>
      <Link  to={'/dashboard'}>
        <span className='navigate__panel-main'>Главная</span>
      </Link>
      <i className="fa-solid fa-chevron-right"></i>
      <Link to={'/dashboard/edit'}>
        <span>{route}</span>
      </Link>
    </div>
  )
}

export default NavigatePanel