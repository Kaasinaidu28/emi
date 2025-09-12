import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const getTwoDigits = (num) => String(num).padStart(2, '0');
    const hrs = getTwoDigits(Math.floor(seconds / 3600));
    const mins = getTwoDigits(Math.floor((seconds % 3600) / 60));
    const secs = getTwoDigits(seconds % 60);
    return `${hrs}:${mins}:${secs}`;
  };

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.time}>{formatTime(time)}</h1>
      <div>
        <button onClick={handleStart} style={styles.button}>Start</button>
        <button onClick={handleStop} style={styles.button}>Stop</button>
        <button onClick={handleReset} style={styles.button}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: 'Arial',
  },
  time: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  button: {
    fontSize: '18px',
    padding: '10px 20px',
    margin: '0 10px',
    cursor: 'pointer',
  }
};

export default Stopwatch;
