import RatingList from '../rating-list/rating-list'
import './rating.scss'

const Rating = () => {
  return (
    <div className='rating'>
      <p className="rating__title">Рейтинг участников</p>
      <RatingList/>
    </div>
  )
}

export default Rating