import { runGame, numberOfRounds } from '../index.js';
import getRandomInt from '../utils.js';

const gameRule = 'What number is missing in the progression?';
const progressionLength = 10;

const generateArithmeticProgression = (firstNumber, commonDifference) => {
  const progressionArr = [firstNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    progressionArr[i] = firstNumber + i * commonDifference;
  }
  return progressionArr;
};

const getRoundData = () => {
  const firstNumber = getRandomInt(1, 100);
  const commonDifference = getRandomInt(1, 10);
  const hiddenElementPosition = getRandomInt(0, 9);
  const progressionArr = generateArithmeticProgression(firstNumber, commonDifference);
  const answer = progressionArr[hiddenElementPosition];
  progressionArr[hiddenElementPosition] = '..';
  const question = progressionArr.join(' ');
  return [question, String(answer)];
};

const runBrainProgression = () => {
  const allRoundsData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const roundData = getRoundData();
    allRoundsData[i] = roundData;
  }
  runGame(allRoundsData, gameRule);
};

export default runBrainProgression;
