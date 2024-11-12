import onlineType from '/design.png'
import offlineType from '/backend.png'
import './choose-details.scss'
const ChooseDetails = () => {
  
  return (
    <div className='choose' id='choose'>
      <h4>Talim bosqichlari boyicha saralash</h4>

      <div className="choose__type">
        <div className="length-border"></div>
        <div className="choose__type-item">
          <p className="choose__type-item--n">
            1-etap
          </p>
          <div className="type__item-info">
            <p className="item__info-title">
              Online: Kichik loyiha tayyorlab yuboriladi
            </p>
            <p className="item__info-descr">
              Alpha-testni guruh a'zolari o'zaro bajaradi, Beta-testni boshqa guruh bajarib beradi (bunda testlovchi guruh har bir topgan xatosi uchun ball loyiha egalaridan olib beriladi) <br /><br />
              Alpha-testni guruh a'zolari o'zaro bajaradi, Beta-testni boshqa guruh bajarib beradi (bunda testlovchi guruh har bir topgan xatosi uchun ball loyiha egalaridan olib beriladi)
            </p>
          </div>
          <img src={onlineType} alt="etap1-img" className="type__item-img" />
        </div>
        <div className="choose__type-item">
          <p className="choose__type-item--n">
            2-etap
          </p>
          <div className="type__item-info">
            <p className="item__info-title">
              Offline: Suhbat task
            </p>
            <p className="item__info-descr">
              Alpha-testni guruh a'zolari o'zaro bajaradi, Beta-testni boshqa guruh bajarib beradi (bunda testlovchi guruh har bir topgan xatosi uchun ball loyiha egalaridan olib beriladi) <br /> <br />
              Alpha-testni guruh a'zolari o'zaro bajaradi, Beta-testni boshqa guruh bajarib beradi (bunda testlovchi guruh har bir topgan xatosi uchun ball loyiha egalaridan olib beriladi)
            </p>
          </div>
          <img src={offlineType} alt="etap2-img" className="type__item-img" />
        </div>
      </div>
    </div>
  )
}

export default ChooseDetails