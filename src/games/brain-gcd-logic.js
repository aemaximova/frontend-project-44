import app from '../index.js';
import getRandomInt from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const numberOfRounds = 3;

const calculateGCD = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  while ((a !== 0) && (b !== 0)) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const getQuestionAnswerPair = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = calculateGCD(firstNumber, secondNumber);
  return [question, answer];
};

const getQuestionAnswerPairs = () => {
  const questionAnswerPairs = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const questionAnswerPair = getQuestionAnswerPair();
    questionAnswerPairs[i] = questionAnswerPair;
  }
  return questionAnswerPairs;
};

const brainGCD = () => {
  const questionAnswerPairs = getQuestionAnswerPairs();
  app(questionAnswerPairs, gameRule);
};

export default brainGCD;
