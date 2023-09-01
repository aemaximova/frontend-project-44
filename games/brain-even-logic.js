import app from '../src/index.js';
import greeting from '../src/cli.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  app(getQuestion, getCorrectAnswer, name);
};

export default brainEven;
