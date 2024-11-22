import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'
import './timer.scss'

const Timer = (props) => {
  const deadline = props.deadline

  const [timeDatas,setTimeDatas] = useState({days:0,hours:0,minutes:0,seconds:0})
  const timeFormatHandler = (item) => {
    if(item > 9) {
      return item
    }else {
      return `0${item}`
    }
  }
  function getDate() {
    const ms = new Date(deadline)-new Date()
    
    if(ms <= 0) {
      setTimeDatas({days:0,hours:0,minutes:0,seconds:0})
    }else {
      const  days = Math.floor(ms/(1000*60*60*24)),
      hours = Math.floor(ms%(1000*60*60*24)/(1000*60*60)),
      minutes = Math.floor(ms%(1000*60*60)/(1000*60)),
      seconds = Math.floor(ms%(1000*60)/1000)
    setTimeDatas({
      days: timeFormatHandler(days),
      hours: timeFormatHandler(hours),
      minutes: timeFormatHandler(minutes),
      seconds: timeFormatHandler(seconds),
    })
    }
  }
  
  useEffect(()=>{
    getDate()
    const interval = setInterval(getDate,1000)
    return () => clearInterval(interval)
  },[])

  return (
    <div className='timer'>
      <div className="timer__item">
        <p className="timer__item-time">{timeDatas.days}</p>
        <p className="timer__item-text">Day</p>
      </div>
      <div className="timer-dot"><span>:</span></div>
      <div className="timer__item">
        <p className="timer__item-time">{timeDatas.hours}</p>
        <p className="timer__item-text">Hours</p>
      </div>
      <div className="timer-dot"><span>:</span></div>
      <div className="timer__item">
        <p className="timer__item-time">{timeDatas.minutes}</p>
        <p className="timer__item-text">Minutes</p>
      </div>
      <div className="timer-dot"><span>:</span></div>
      <div className="timer__item">
        <p className="timer__item-time">{timeDatas.seconds}</p>
        <p className="timer__item-text">Seconds</p>
      </div>
    </div>
  )
}

Timer.propTypes = {
  deadline: PropTypes.string
}
export default Timer