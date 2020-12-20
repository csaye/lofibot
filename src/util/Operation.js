// returns a random value between min and max, both inclusive
export const random = (min, max) => {
  return Math.floor(Math.random() * ((max + 1) - min) + min);
}
