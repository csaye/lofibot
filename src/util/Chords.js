// imports
import { random } from './Operation';

// default octave
const minOctave = 1; const maxOctave = 3;

const getOctave = () => {
  const octave = random(minOctave, maxOctave);
  console.log(`Chose octave ${octave}`);
  return octave;
}
const defaultOctave = getOctave();

// progressions
const progressions = [
  [1, 5, 6, 4],
  [2, 5, 1, 4],
  [3, 6, 2, 5],
  [4, 5, 1, 6],
  [5, 1, 4, 2],
  [6, 2, 5, 4]
];

const getProgression = () => {
  const progressionIndex = random(0, progressions.length - 1);
  const progression = progressions[progressionIndex];
  console.log(`Chose progression ${progression}`);
  return progression;
}

// returns note at index in given scale
// ex:
// const cScale = [C, D, E, F, G, A, B];
// getNote(1, cScale) -> C
// getNote(7, cScale) -> B
// getNote(8, cScale) -> C
const getNote = (index, scale) => {
  let scaleIndex = index - 1;
  let octave = defaultOctave;
  while (scaleIndex >= scale.length) {
    scaleIndex -= scale.length;
    octave++;
  }
  return scale[scaleIndex] + octave;
}

// returns chord at index in given scale
// ex:
// const cScale = [C, D, E, F, G, A, B];
// getChord(1, cScale) -> [C, E, G]
// getChord(7, cScale) -> [B, D, F]
// getChord(8, cScale) -> [C, E, G]
const getChord = (index, scale) => {
  let chord = ['', '', ''];
  for (let i = 0; i < 3; i++) chord[i] = getNote(index + (2 * i), scale);
  return chord;
}

export const getChords = (scale) => {
  const progression = getProgression();
  let chords = [[], [], [], []];
  for (let i = 0; i < 4; i++) chords[i] = getChord(progression[i], scale);
  console.log(`Chose chords ${chords.join(' | ')}`);
  return chords;
}
