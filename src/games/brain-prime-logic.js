import app from '../index.js';
import getRandomInt from '../utils.js';

const getQuestion = () => {
  const randomInt = getRandomInt(2, 100);
  return randomInt;
};

const getCorrectAnswer = (randomInt) => {
  const randomIntN = Number(randomInt);
  let isPrime = 'yes';
  for (let i = 2; i <= Math.ceil(Math.sqrt(randomIntN)); i += 1) {
    if (randomIntN % i === 0) {
      isPrime = 'no';
      break;
    }
  }
  return isPrime;
};

const brainPrime = () => {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  app(getQuestion, getCorrectAnswer, gameRule);
};

export default brainPrime;
