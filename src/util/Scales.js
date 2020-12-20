// imports
import { random } from './Operation';

// scales
const scales = [
  ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
  ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
  ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
  ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
  ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
  ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
  ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#']
];

export const getScale = () => {
  const scaleIndex = random(0, scales.length - 1);
  const scale = scales[scaleIndex];
  console.log(`Chose scale ${scale[0]}`);
  return scale;
}
