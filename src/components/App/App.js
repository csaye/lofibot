// imports
import React, { useState } from 'react';
import './App.css';
import * as Tone from 'tone';
import Project from '../Project/Project'

// app
function App() {

  let [ready, setReady] = useState(false);

  async function startTone() {
    await Tone.start();
    setReady(true);
  }

  return (
    <div className="App">
      { ready ? <Project /> : <button onClick={startTone}>Begin</button>}
    </div>
  );
}

// exports
export default App;
