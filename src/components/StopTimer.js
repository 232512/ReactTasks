import React,{useState,useEffect} from 'react'
import './StopTimer.css'
function StopTimer(){
  let [Timer,updateTimer]=useState(0)
  let [TimerStatus,updateTimerStatus]=useState('on')
  useEffect(()=>{
    if(TimerStatus==='off')return
    const TimerID=setTimeout(()=>{
       updateTimer(Timer+1)
    },1000)
    return ()=>{clearTimeout(TimerID)}
  },[Timer,TimerStatus])
  
  
  function stopTimer(){
    updateTimerStatus('off')
  }
  return <div className='TimerComponent'>
      <button onClick={stopTimer} className='TimerButton'>Stop Timer</button>
      <div className='myText'> 
          {Timer}
      </div>
  </div>
}
export default StopTimer