import React, { useEffect, useState } from 'react'

const Chrono = () => {
  function convertNumberToTime(number) {
    const hours = Math.floor(number / 3600);
    const minutes = Math.floor((number % 3600) / 60);
    const seconds = number % 60;
  
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
const [isChronoRunning, setIsChronoRunning] = useState(false);
const [Counter, setCounter] = useState(0);
useEffect(() => {
    let timerId;
    if (isChronoRunning) {
      timerId = setInterval(() => {
        setCounter(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [isChronoRunning]);
  const play = () => {
    setIsChronoRunning(true);
  }
  const stop = () => {
    isChronoRunning &&
    setIsChronoRunning(false); 
};
const restart = () => {
  setIsChronoRunning(true);
  setCounter(0)
};

  return (
    <div>
      <h1>Chrono</h1>
      <div>{convertNumberToTime(Counter)}</div>
      <button onClick={play}>Play</button>
      <button onClick={stop}>Stop</button>
      <button onClick={restart}>Restart</button>
    </div>
  )
}

export default Chrono