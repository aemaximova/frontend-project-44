import app from '../index.js';
import getRandomInt from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const numberOfRounds = 3;

const isPrime = (randomInt) => {
  const randomIntN = Number(randomInt);
  for (let i = 2; i <= Math.ceil(Math.sqrt(randomIntN)); i += 1) {
    if (randomIntN % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAnswerPair = () => {
  const randomInt = getRandomInt(2, 100);
  const answer = isPrime(randomInt);
  return [randomInt, answer ? 'yes' : 'no'];
};

const getQuestionAnswerPairs = () => {
  const questionAnswerPairs = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const questionAnswerPair = getQuestionAnswerPair();
    questionAnswerPairs[i] = questionAnswerPair;
  }
  return questionAnswerPairs;
};

const brainPrime = () => {
  const questionAnswerPairs = getQuestionAnswerPairs();
  app(questionAnswerPairs, gameRule);
};

export default brainPrime;
