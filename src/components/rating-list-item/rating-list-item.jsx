import './rating-list-item.scss'

const RatingListItem = ({data,index}) => {
  return (
    <li className='rating__list-item'>
      <p className="s-num">{index+1}</p>
      <div className="user__button-rate">
        <div className="user__button-image">
          {true ? <img style={{width: '40px', height: '40px'}} src='/client-3.png' alt="ave" /> : <span>{lastname[0] + firstname[0]}</span>}
        </div>
        <p className="user__button-name">{data.name}</p>

      </div>
      <ul className="user-marks">
        {data.results.map((item,index)=>(
          <li key={index}>
            <p className="mark-item">{item.sign1}</p>
            <p className="mark-info">{item.sign2}</p>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default RatingListItem