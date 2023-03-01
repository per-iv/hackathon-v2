import { render } from 'react-dom';
import React, { Component, useState, useEffect } from 'react';

function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

return (
  <div className="Timer">
    <h1>{currentTime.toLocaleTimeString()}</h1>
  </div>
);
}
  
  export default Timer;
