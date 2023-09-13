import { runGame, numberOfRounds } from '../index.js';
import getRandomInt from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

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

const getRoundData = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = calculateGCD(firstNumber, secondNumber);
  return [question, String(answer)];
};

const brainGCD = () => {
  const allRoundsData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const roundData = getRoundData();
    allRoundsData[i] = roundData;
  }
  runGame(allRoundsData, gameRule);
};

export default brainGCD;
