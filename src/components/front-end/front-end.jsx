import PropTypes from 'prop-types'
import Concurs from "../konkurs-item/konkurs-item"

const FrontEnd = ({concursDatas}) => {
  
  return (
    <>
      <Concurs concursDatas={concursDatas}>

      </Concurs>
    </>
  )
}
FrontEnd.propTypes = {
  concursDatas: PropTypes.object
}
export default FrontEnd