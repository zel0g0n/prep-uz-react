import Concurs from "../konkurs-item/konkurs-item"
import PropTypes from 'prop-types'

const BackEnd = ({concursDatas}) => {
  return (
    <>
      <Concurs concursDatas={concursDatas}></Concurs>
    </>
  )
}
BackEnd.propTypes = {
  concursDatas: PropTypes.object
}
export default BackEnd