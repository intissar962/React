import React, { useEffect, useState } from 'react'

const Horloge = () => {
    const [Time, setTime] = useState(new Date());
    const [isRunning, setIsRunning] = useState(true);
  
    useEffect(() => {
      let timerId;
      if(isRunning)
      {
         timerId = setInterval(() => {
        setTime(new Date());
      }, 1000);
      }
      return () => {
        clearInterval(timerId);
      };
       
    },[isRunning]);
     const stop = () => {
        setIsRunning(false)
      }
      const reset = () => {
        setIsRunning(false)
        setTime(new Date());
      }
  return (
    <div>
        <h1>Horloge</h1>
    <div>{Time.toLocaleTimeString()}</div>
     <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Horloge