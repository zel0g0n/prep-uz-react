import DashboardHeader from '../dashboard-header/dashboard-header'
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'
import NavigatePanel from '../navigate-panel/navigate-panel'
import PropTypes from 'prop-types'
import './dashboard.scss'
const Dashboard = ({userData,hasImg}) => {

  return (
    <div className="dashboard">
      <DashboardHeader hasImg={hasImg} userData={userData} />
      <main>
        <NavigatePanel></NavigatePanel>
        <Outlet></Outlet>
      </main>
      <Footer/>
    </div>
  )
}
Dashboard.propTypes = {
  userData: PropTypes.object,
  hasImg: PropTypes.string,
}
export default Dashboard