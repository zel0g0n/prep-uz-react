import { Outlet } from 'react-router-dom'
import Header from '../header/header'
import Training from '../training/training'
import Partners from '../partners/partners'
import Footer from '../footer/footer'
const Home = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Training></Training>
      <Partners></Partners>
      <Footer></Footer>
    </div>
  )
}

export default Home