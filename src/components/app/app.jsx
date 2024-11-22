import { useState } from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import './app.scss'
import Home from '../pages/home'
import Plan from '../routes/plan'
import Accept from '../routes/accept'
import Instruction from '../routes/instruction'
import Choose from '../routes/choose'
import Offer from '../offer/offer'
import Invite from '../invite/invite'
import Login from '../login/login'
import PhoneNumber from '../phone-number/phone-number'
import CodeSection from '../code-section/code-section'
import UserProfile from '../user-profile/user-profile'
import Dashboard from '../dashboard/dashboard'
import EditUserData from '../edit-user-data/edit-user-data'
import FrontEnd from '../front-end/front-end'
import BackEnd from '../back-end/back-end'
import Rating from '../rating/rating'
import Testing from '../testing/testing'
const App = () => {
  const [userNumber, setUserNumber] = useState('')
  const [userData,setUserData] = useState({lastname: 'Familiya', firstname: 'Ism', area: 'Area'})
  const sendNumber = (number) => {
    setUserNumber(number)
  }

  const activateUser = (newState) => {
    setUserData(prev => ({...prev,...newState}))
  }

  const concursDatas = [
  {name: 'Frontend', deadline: '2024-12-31'},
  {name: 'Backend', deadline: '2024-12-31'},
  ]

  const [hasImg,sethasImg] = useState('')
  function upLoadImg(url) {
    sethasImg(url)
    return hasImg
  }
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home></Home>}>
            <Route path='' element={<><Offer/><Invite/></>}/>
            <Route path='plan' element={<Plan/>}/>
            <Route path='accept' element={<Accept></Accept>}/>
            <Route path='instruction' element={<Instruction></Instruction>}/>
            <Route path='choose' element={<Choose></Choose>}/>
          </Route>
          <Route path='/login'element={<Login/>}>
            <Route path=''   element={<PhoneNumber userNumber={userNumber} sendNumber={sendNumber}/>}/>
            <Route path='code' element={<CodeSection  userNumber={userNumber}/>}/>
            <Route path='user' element={<UserProfile activateUser={activateUser}/>}/>
          </Route>
          <Route path='/dashboard' element={<Dashboard hasImg={hasImg} userData={userData} />}>
            <Route path='edit'   element={<EditUserData upLoadImg={upLoadImg} hasImg={hasImg} activateUser={activateUser} userData={userData}/>}/>
            <Route path='front-end'   element={<FrontEnd concursDatas={concursDatas[0]}/>}/>
            <Route path='back-end'   element={<BackEnd  concursDatas={concursDatas[1]}/>}/>
            <Route path='p-m'   element={<Testing/>}/>
            <Route path='rating'   element={<Rating />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}
export default App


