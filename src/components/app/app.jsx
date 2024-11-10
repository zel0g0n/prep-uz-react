import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from '../header/header'
import './app.scss'
const App = () => {
  return (
    <BrowserRouter>
      
      <div className='app'>
        <Header></Header>
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/plan' element={<></>} />
          <Route path='/accept' element={<></>} />
          <Route path='/instruction' element={<></>} />
          <Route path='/choose' element={<></>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App