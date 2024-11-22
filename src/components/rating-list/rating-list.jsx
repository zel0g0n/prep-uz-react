import RatingListItem from '../rating-list-item/rating-list-item'
import './rating-list.scss'

const RatingList = () => {
  const userResult = [
    {
      name: 'Alisher Oromov',
      results: [
        {sign1: '+',sign2: '9:01'},
        {sign1: '-6',sign2: ''},
        {sign1: '+1',sign2: '63:42'},
        {sign1: '+',sign2: '6:09'},
        {sign1: '+',sign2: '47:15'},
        {sign1: '+2',sign2: '95:78'},
        {sign1: '+3',sign2: '203:03'},
        {sign1: '+2',sign2: '251:02'},
        {sign1: '+',sign2: '20:09'},
        {sign1: '',sign2: '9/10'},
        {sign1: '',sign2: '919'},
      ]
    },
    {
      name: 'Расулов Рахматулло',
      results: [
        {sign1: '+',sign2: '9:01'},
        {sign1: '-6',sign2: ''},
        {sign1: '+1',sign2: '63:42'},
        {sign1: '+',sign2: '6:09'},
        {sign1: '+',sign2: '47:15'},
        {sign1: '+2',sign2: '95:78'},
        {sign1: '+3',sign2: '203:03'},
        {sign1: '+2',sign2: '251:02'},
        {sign1: '+',sign2: '20:09'},
        {sign1: '',sign2: '9/10'},
        {sign1: '',sign2: '919'},
      ]
    },
    {
      name: 'Халиков Лазиз',
      results: [
        {sign1: '+',sign2: '9:01'},
        {sign1: '-6',sign2: ''},
        {sign1: '+1',sign2: '63:42'},
        {sign1: '+',sign2: '6:09'},
        {sign1: '+',sign2: '47:15'},
        {sign1: '+2',sign2: '95:78'},
        {sign1: '+3',sign2: '203:03'},
        {sign1: '+2',sign2: '251:02'},
        {sign1: '+',sign2: '20:09'},
        {sign1: '',sign2: '9/10'},
        {sign1: '',sign2: '919'},
      ]
    },
    {
      name: 'Белова Анастасия',
      results: [
        {sign1: '+',sign2: '9:01'},
        {sign1: '-6',sign2: ''},
        {sign1: '+1',sign2: '63:42'},
        {sign1: '+',sign2: '6:09'},
        {sign1: '+',sign2: '47:15'},
        {sign1: '+2',sign2: '95:78'},
        {sign1: '+3',sign2: '203:03'},
        {sign1: '+2',sign2: '251:02'},
        {sign1: '+',sign2: '20:09'},
        {sign1: '',sign2: '9/10'},
        {sign1: '',sign2: '919'},
      ]
    },
    {
      name: 'Фадеев Рустам',
      results: [
        {sign1: '+',sign2: '9:01'},
        {sign1: '-6',sign2: ''},
        {sign1: '+1',sign2: '63:42'},
        {sign1: '+',sign2: '6:09'},
        {sign1: '+',sign2: '47:15'},
        {sign1: '+2',sign2: '95:78'},
        {sign1: '+3',sign2: '203:03'},
        {sign1: '+2',sign2: '251:02'},
        {sign1: '+',sign2: '20:09'},
        {sign1: '',sign2: '9/10'},
        {sign1: '',sign2: '919'},
      ]
    },
    {
      name: 'Садам Хуйсейн',
      results: [
        {sign1: '+',sign2: '9:01'},
        {sign1: '-6',sign2: ''},
        {sign1: '+1',sign2: '63:42'},
        {sign1: '+',sign2: '6:09'},
        {sign1: '+',sign2: '47:15'},
        {sign1: '+2',sign2: '95:78'},
        {sign1: '+3',sign2: '203:03'},
        {sign1: '+2',sign2: '251:02'},
        {sign1: '+',sign2: '20:09'},
        {sign1: '',sign2: '9/10'},
        {sign1: '',sign2: '919'},
      ]
    },
    {
      name: 'Огай Диана',
      results: [
        {sign1: '+',sign2: '9:01'},
        {sign1: '-6',sign2: ''},
        {sign1: '+1',sign2: '63:42'},
        {sign1: '+',sign2: '6:09'},
        {sign1: '+',sign2: '47:15'},
        {sign1: '+2',sign2: '95:78'},
        {sign1: '+3',sign2: '203:03'},
        {sign1: '+2',sign2: '251:02'},
        {sign1: '+',sign2: '20:09'},
        {sign1: '',sign2: '9/10'},
        {sign1: '',sign2: '919'},
      ]
    },
    {
      name: 'Воробьев Сергей',
      results: [
        {sign1: '+',sign2: '9:01'},
        {sign1: '-6',sign2: ''},
        {sign1: '+1',sign2: '63:42'},
        {sign1: '+',sign2: '6:09'},
        {sign1: '+',sign2: '47:15'},
        {sign1: '+2',sign2: '95:78'},
        {sign1: '+3',sign2: '203:03'},
        {sign1: '+2',sign2: '251:02'},
        {sign1: '+',sign2: '20:09'},
        {sign1: '',sign2: '9/10'},
        {sign1: '',sign2: '919'},
      ]
    },
  ]
  return (
    <ul className="rating__list">
      
        <li className='rating__list-item'>
          <p className="s-num"></p>
          <div className="user__button-rate"></div>
          <ul className="user-marks">
            {userResult[0].results.map((item,index)=>(
              <li key={index}>
                <p className="mark-item"></p>
                <p className="mark-info"></p>
              </li>
            ))}
          </ul>
        </li>

      {userResult.map((item,index) => (
        <RatingListItem index={index} key={index} data={item}/>
      ))}
    </ul>
  )
}

export default RatingList