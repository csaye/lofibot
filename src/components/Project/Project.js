// imports
import { getScale } from '../../util/Scales';
import { getChords } from '../../util/Chords';
import { random } from '../../util/Operation';

import hat from '../../audio/drums/hat.wav';
import kick from '../../audio/drums/kick.wav';

import * as Tone from 'tone';

// drums
const drumA = new Tone.Sampler({
  urls: {"C4": hat},
  volume: -8
}).toDestination();
const drumB = new Tone.Sampler({
  urls: {"C4": kick},
  volume: 2
}).toDestination()

// drum loops
const drumLoopA = new Tone.Loop(time => {
	drumA.triggerAttackRelease("C4", "8n", time);
}, "8n").start(0);
const drumLoopB = new Tone.Loop(time => {
	drumB.triggerAttackRelease('C4', "8n", time);
}, "2n").start("4n");

// synths
const sounds = [
  Tone.Synth,
  Tone.PluckSynth,
  Tone.MembraneSynth,
  Tone.FMSynth,
  Tone.MonoSynth
];

const getSound = () => {
  const soundIndex = random(0, sounds.length - 1);
  console.log(`Chose sound ${soundIndex}`);
  const sound = sounds[soundIndex];
  return sound;
}
const synthSound = getSound();

const synthA = new Tone.PolySynth(synthSound).toDestination();
const synthB = new Tone.PolySynth(synthSound).toDestination();
const synthC = new Tone.PolySynth(synthSound).toDestination();
const synthD = new Tone.PolySynth(synthSound).toDestination();

// scale
const scale = getScale();

// chords
const chords = getChords(scale);

// synth loops
const synthLoopA = new Tone.Loop(time => {
	synthA.triggerAttackRelease(chords[0], "8n", time);
}, "1m").start(0);
const synthLoopB = new Tone.Loop(time => {
	synthB.triggerAttackRelease(chords[1], "8n", time);
}, "1m").start("0.5m");
const synthLoopC = new Tone.Loop(time => {
	synthC.triggerAttackRelease(chords[2], "8n", time);
}, "1m").start("1.0m");
const synthLoopD = new Tone.Loop(time => {
	synthD.triggerAttackRelease(chords[3], "8n", time);
}, "1m").start("1.5m");

// bpm
const minBpm = 35; const maxBpm = 45;

const getBpm = () => {
  const bpm = random(minBpm, maxBpm);
  console.log(`Chose bpm ${bpm}`);
  return bpm;
}
Tone.Transport.bpm.value = getBpm();

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
    </>
  );
}

// exports
export default Project;
