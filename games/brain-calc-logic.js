import { evaluate } from 'mathjs';
import app from '../src/index.js';
import greeting from '../src/cli.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getQuestion = () => {
  const operationsArr = ['+', '-', '*'];
  const leftValue = getRandomInt(1, 10);
  const rightValue = getRandomInt(1, 10);
  const randomIndex = getRandomInt(0, operationsArr.length);
  return `${leftValue} ${operationsArr[randomIndex]} ${rightValue}`;
};

const getCorrectAnswer = (randomExpression) => {
  const result = evaluate(randomExpression);
  return result;
};

const brainCalc = () => {
  const name = greeting();
  console.log('What is the result of the expression?');
  app(getQuestion, getCorrectAnswer, name);
};

export default brainCalc;
