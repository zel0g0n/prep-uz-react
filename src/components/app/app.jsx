import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from '../header/header'
import './app.scss'
import Home from '../pages/home'
import Plan from '../pages/plan'
import Accept from '../pages/accept'
const App = () => {
  return (
    <BrowserRouter>
      
      <div className='app'>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/plan' element={<Plan></Plan>} />
          <Route path='/accept' element={<Accept></Accept>} />
          <Route path='/instruction' element={<></>} />
          <Route path='/choose' element={<></>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App