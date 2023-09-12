import app from '../index.js';
import getRandomInt from '../utils.js';

const gameRule = 'What is the result of the expression?';
const numberOfRounds = 3;

const performOperation = (x, y, operation) => {
  let result = 0;
  switch (operation) {
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

const getQuestionAnswerPair = () => {
  const operationsArr = ['+', '-', '*'];
  const x = getRandomInt(1, 10);
  const y = getRandomInt(1, 10);
  const index = getRandomInt(0, operationsArr.length);
  const operation = operationsArr[index];
  const question = `${x} ${operation} ${y}`;
  const answer = performOperation(x, y, operation);
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

const brainCalc = () => {
  const questionAnswerPairs = getQuestionAnswerPairs();
  app(questionAnswerPairs, gameRule);
};

export default brainCalc;
