import {INC, DEC, RND} from "./constants";

const inc = () => {
  return {
    type: INC
  }
};
const dec = () => {
  return {
    type: DEC
  }
};
const rnd = () => {
  return {
    type: RND,
    payload: Math.floor(Math.random() * 100)
  }
};

export { inc, dec, rnd }