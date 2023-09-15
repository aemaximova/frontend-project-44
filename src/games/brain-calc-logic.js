import { runGame, numberOfRounds } from '../index.js';
import getRandomInt from '../utils.js';

const gameRule = 'What is the result of the expression?';

const calculate = (x, y, operation) => {
  switch (operation) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error('Error in expression');
  }
};

const getRoundData = () => {
  const operationsArr = ['+', '-', '*'];
  const x = getRandomInt(1, 10);
  const y = getRandomInt(1, 10);
  const index = getRandomInt(0, operationsArr.length);
  const operation = operationsArr[index];
  const question = `${x} ${operation} ${y}`;
  const answer = calculate(x, y, operation);
  return [question, String(answer)];
};

const runBrainCalc = () => {
  const allRoundsData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const roundData = getRoundData();
    allRoundsData[i] = roundData;
  }
  runGame(allRoundsData, gameRule);
};

export default runBrainCalc;
