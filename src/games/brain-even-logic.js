import app from '../index.js';
import getRandomInt from '../utils.js';
import { gamma } from 'mathjs';

const getQuestion = () => {
  const randomInt = getRandomInt(1, 100);
  return randomInt;
};

const getCorrectAnswer = (randomInt) => {
  let isEven = 'no';
  if (randomInt % 2 === 0) {
    isEven = 'yes';
  }
  return isEven;
};

const brainEven = () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  app(getQuestion, getCorrectAnswer, gameRule);
};

export default brainEven;
