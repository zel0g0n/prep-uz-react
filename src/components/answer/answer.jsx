import PropTypes from 'prop-types'

const Answer = ({answerData,index}) => {
  return (
    <li className="testing__answers-item">
      <div className="testing__answers-item--result">
        <img src={answerData.src} alt={answerData.alt} className="answer__result-img" />
        <p className="answer__result-text">{answerData.isTrue?'Верно!':'Неверно!'}</p>
      </div>
      <form className={`${answerData.isTrue?'answer__true-question':'answer__false-question'} answer`}>
        <p htmlFor="" className="answer__question">
          <span className="anwers-s-number">{index+1}</span>.
          {answerData.question}
        </p>
        <ul className="answer__variants">
          {answerData.answers.map((item,index) => (
            <li key={index} className="answer__variant-item">
              <input checked={`${item.isTrue?'checked':''}`} type="radio" name="v1" id="v1" key={true} />
              <label htmlFor="v1">{item.body}</label>
            </li>
          ))}
        </ul>
      </form>
    </li>
  )
}
Answer.propTypes = {
  answerData: PropTypes.array,
  index: PropTypes.number
}
export default Answer