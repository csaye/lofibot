// imports
import { getScale } from '../../util/Scales';
import { getChords } from '../../util/Chords';
import { random } from '../../util/Operation';

import { pianoNotes } from '../../util/Piano';
import hat from '../../audio/drums/hat.wav';
import kick from '../../audio/drums/kick.wav';

import aiPic from '../../img/ai.svg';
import robotPic from '../../img/robot.svg';

import * as Tone from 'tone';

// drums
const drumA = new Tone.Sampler({
  urls: {"C4": hat},
  volume: -10
}).toDestination();
const drumB = new Tone.Sampler({
  urls: {"C4": kick},
  volume: -10
}).toDestination()

// drum loops
const drumLoopA = new Tone.Loop(time => {
	drumA.triggerAttackRelease("C4", "8n", time);
}, "8n").start(0);
const drumLoopB = new Tone.Loop(time => {
	drumB.triggerAttackRelease('C4', "8n", time);
}, "2n").start("4n");

// pianos
const pianoA = new Tone.Sampler(pianoNotes).toDestination();
const pianoB = new Tone.Sampler(pianoNotes).toDestination();
const pianoC = new Tone.Sampler(pianoNotes).toDestination();
const pianoD = new Tone.Sampler(pianoNotes).toDestination();

// scale
const scale = getScale();

// chords
const chords = getChords(scale);

// piano loops
const pianoLoopA = new Tone.Loop(time => {
	pianoA.triggerAttackRelease(chords[0], "1m", time);
}, "1m").start(0);
const pianoLoopB = new Tone.Loop(time => {
	pianoB.triggerAttackRelease(chords[1], "1m", time);
}, "1m").start("0.5m");
const pianoLoopC = new Tone.Loop(time => {
	pianoC.triggerAttackRelease(chords[2], "1m", time);
}, "1m").start("1.0m");
const pianoLoopD = new Tone.Loop(time => {
	pianoD.triggerAttackRelease(chords[3], "1m", time);
}, "1m").start("1.5m");

// bpm
const minBpm = 35; const maxBpm = 45;

const getBpm = () => {
  const bpm = random(minBpm, maxBpm);
  console.log(`Chose bpm ${bpm}`);
  return bpm;
}
Tone.Transport.bpm.value = getBpm();

Tone.loaded().then(() => {
  console.log('loaded');
});

// project
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
      <img src={aiPic} alt="" />
      <img src={robotPic} alt="" />
    </>
  );
}

// exports
export default Project;
