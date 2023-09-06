import app from '../index.js';
import getRandomInt from '../utils.js';

const getQuestion = () => {
  const operationsArr = ['+', '-', '*'];
  const leftValue = getRandomInt(1, 10);
  const rightValue = getRandomInt(1, 10);
  const randomIndex = getRandomInt(0, operationsArr.length);
  return `${leftValue} ${operationsArr[randomIndex]} ${rightValue}`;
};

const getCorrectAnswer = (randomExpression) => {
  const separator = ' ';
  const arr = randomExpression.split(separator);
  const x = Number(arr[0]);
  const y = Number(arr[2]);
  let result = 0;
  switch (arr[1]) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    default:
      result = 0;
  }
  return result;
};

const brainCalc = () => {
  const gameRule = 'What is the result of the expression?';
  app(getQuestion, getCorrectAnswer, gameRule);
};

export default brainCalc;
