// import { scales } from '../../util/Scales';
import * as Tone from 'tone';

// synths
const synthA = new Tone.PolySynth(Tone.Synth).toDestination();
const synthB = new Tone.PolySynth(Tone.Synth).toDestination();
const synthC = new Tone.PolySynth(Tone.Synth).toDestination();
const synthD = new Tone.PolySynth(Tone.Synth).toDestination();

// scale
const scale = 0;

// chords
const getChords = (scale) => {
  return [
    ['C4', 'E4', 'G4'],
    ['G4', 'B4', 'D4'],
    ['A4', 'C4', 'E4'],
    ['F4', 'A4', 'C4'],
  ];
}

const chords = getChords(scale);

// loops
const loopA = new Tone.Loop(time => {
	synthA.triggerAttackRelease(chords[0], "8n", time);
}, "1m").start(0);
const loopB = new Tone.Loop(time => {
	synthB.triggerAttackRelease(chords[1], "8n", time);
}, "1m").start("0.5m");
const loopC = new Tone.Loop(time => {
	synthC.triggerAttackRelease(chords[2], "8n", time);
}, "1m").start("1.0m");
const loopD = new Tone.Loop(time => {
	synthD.triggerAttackRelease(chords[3], "8n", time);
}, "1m").start("1.5m");

Tone.Transport.bpm.value = 60;

function Project() {

  function toneStart() {
    Tone.Transport.start();
  }

  function toneStop() {
    Tone.Transport.stop();
  }

  return (
    <>
      <button onClick={toneStart}>Start</button>
      <button onClick={toneStop}>Stop</button>
    </>
  );
}

export default Project;
