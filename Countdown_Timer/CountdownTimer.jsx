import { useState, useEffect } from "react";

function CountdownTimer({ initialSeconds }) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true); // Controls whether the timer is running

  useEffect(() => {
    if (!isRunning || seconds <= 0) return;

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval when component unmounts
  }, [seconds, isRunning]);

  // Function to restart the timer
  const restartTimer = () => {
    setSeconds(initialSeconds);
    setIsRunning(true);
  };

  // Function to pause the timer
  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Countdown Timer</h1>
      <h2>{seconds} seconds</h2>
      <button
        onClick={toggleTimer}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          margin: "5px",
          backgroundColor: isRunning ? "red" : "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isRunning ? "Pause" : "Resume"}
      </button>
      <button
        onClick={restartTimer}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          margin: "5px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Restart Timer
      </button>
    </div>
  );
}

export default CountdownTimer;
