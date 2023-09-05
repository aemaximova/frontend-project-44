import app from '../index.js';
import getRandomInt from '../utils.js';

const getQuestion = () => {
  const leftValue = getRandomInt(1, 100);
  const rightValue = getRandomInt(1, 100);
  return `${leftValue} ${rightValue}`;
};

const getCorrectAnswer = (randomExpression) => {
  const separator = ' ';
  const numberArr = randomExpression.split(separator);
  let firstNumber = Number(numberArr[0]);
  let secondNumber = Number(numberArr[1]);
  if (secondNumber > firstNumber) {
    const temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
  }
  let quotient = Math.trunc(firstNumber / secondNumber);
  let remainder = firstNumber - secondNumber * quotient;
  while (remainder !== 0) {
    firstNumber = secondNumber;
    secondNumber = remainder;
    quotient = Math.trunc(firstNumber / secondNumber);
    remainder = firstNumber - secondNumber * quotient;
  }
  return secondNumber;
};

const brainGCD = () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  app(getQuestion, getCorrectAnswer, gameRule);
};

export default brainGCD;
