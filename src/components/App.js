import React, { useRef, useState } from 'react'
import '../styles/App.css';
const App = () => {
  const startTime = useRef(0);
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);
  let seconds = parseFloat((currentTime % 36000) / 100).toFixed(3);

  function increment() {
    setCurrentTime((prevCount) => prevCount + 1);
  }
  function startTheWatch() {
    stopTheWatch();
    intervalRef.current = setInterval(increment, 10);
  }
  function stopTheWatch() {
    clearInterval(intervalRef.current);
  }
  function reset() {
    stopTheWatch();
    setCurrentTime(0);
    setLaps([]);
  }
  function addLap() {
    setLaps((oldArray) => [...oldArray, seconds]);
  }

  return (
    <div id="main">
      <section>
        <h1 className="seconds-elapsed">{seconds}</h1>
        <section className="buttons">
          <button className="start-btn" onClick={startTheWatch}>
            START
          </button>
          <button className="stop-btn" onClick={stopTheWatch}>
            STOP
          </button>
          <button className="lap-btn" onClick={addLap}>
            LAP
          </button>
          <button className="reset-btn" onClick={reset}>
            RESET
          </button>
        </section>
      </section>
      {laps.length > 0 && (
        <section className="lap-section">
          <h2>Laps</h2>
          <section className="laps">
            {laps.map((lap, index) => (
              <p key={index}>{lap}</p>
            ))}
          </section>
        </section>
      )}
    </div>
  );
};
export default App;import React, { useRef, useState } from 'react'
import '../styles/App.css';
const App = () => {
  const startTime = useRef(0);
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);
  let seconds = parseFloat((currentTime % 36000) / 100).toFixed(3);

  function increment() {
    setCurrentTime((prevCount) => prevCount + 1);
  }
  function startTheWatch() {
    stopTheWatch();
    intervalRef.current = setInterval(increment, 10);
  }
  function stopTheWatch() {
    clearInterval(intervalRef.current);
  }
  function reset() {
    stopTheWatch();
    setCurrentTime(0);
    setLaps([]);
  }
  function addLap() {
    setLaps((oldArray) => [...oldArray, seconds]);
  }

  return (
    <div id="main">
      <section>
        <h1 className="seconds-elapsed">{seconds}</h1>
        <section className="buttons">
          <button className="start-btn" onClick={startTheWatch}>
            START
          </button>
          <button className="stop-btn" onClick={stopTheWatch}>
            STOP
          </button>
          <button className="lap-btn" onClick={addLap}>
            LAP
          </button>
          <button className="reset-btn" onClick={reset}>
            RESET
          </button>
        </section>
      </section>
      {laps.length > 0 && (
        <section className="lap-section">
          <h2>Laps</h2>
          <section className="laps">
            {laps.map((lap, index) => (
              <p key={index}>{lap}</p>
            ))}
          </section>
        </section>
      )}
    </div>
  );
};
export default App;
