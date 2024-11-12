import { BrowserRouter , Routes , Route} from 'react-router-dom'
import './app.scss'
import Home from '../pages/home'
const App = () => {

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}
export default App


