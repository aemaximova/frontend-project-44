import app from '../src/index.js';
import greeting from '../src/cli.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  app(getQuestion, getCorrectAnswer, name);
};

export default brainPrime;
