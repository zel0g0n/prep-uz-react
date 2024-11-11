import { acceptDataList } from '../../constants/app'
import './accept-demand.scss'
import AcceptDemandListItem from '../accept-demand-list/accept-demand-list'
const AcceptDemand = () => {
  
  return (
    <div className='accept'>
      <div className="acceptdemand">
        <h4>Qabul qilish talablari</h4>
        {acceptDataList.map(item => (
          <AcceptDemandListItem key={item.name} title={item.name} properties={item.properties} keyword={item.keywords} img={item.img} icon={item.icon} className="acceptdemand__list-item"></AcceptDemandListItem>
        ))}
        <ul className="acceptdemand__list">
          
        </ul>
      </div>
    </div>
  )
}

export default AcceptDemand