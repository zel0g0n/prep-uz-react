import { useNavigate } from 'react-router-dom'
import './button.scss'

const Button = () => {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate('/login')} className="btn">
        Оставить заявку
      </button>
    </>
  )
}

export default Button