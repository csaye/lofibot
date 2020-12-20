import React, { useState, useRef, useEffect } from 'react';
import './App.css';

import * as Tone from 'tone';
import A1 from '../audio/A1.mp3';

function App() {
  const [isLoaded, setLoaded] = useState(false);
  const sampler = useRef(null);

  useEffect(() => {
    sampler.current = new Tone.Sampler(
      { A1 },
      {
        onload: () => {
          setLoaded(true);
        }
      }
    ).toMaster();
  }, []);

  const handleClick = () => sampler.current.triggerAttack("A1");

  return (
    <div className="App">
      <button disabled={!isLoaded} onClick={handleClick}>Start</button>
    </div>
  );
}

export default App;
