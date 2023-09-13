import { runGame, numberOfRounds } from '../index.js';
import getRandomInt from '../utils.js';

const gameRule = 'What number is missing in the progression?';
const progressionLength = 10;

const convertArrayToString = (progressionArr) => {
  let progressionString = '';
  for (let i = 0; i < progressionLength; i += 1) {
    progressionString = `${progressionString} ${progressionArr[i]}`;
  }
  return progressionString.trim();
};

const getRoundData = () => {
  const firstNumber = getRandomInt(1, 100);
  const commonDifference = getRandomInt(1, 10);
  const hiddenElementPosition = getRandomInt(0, 9);
  const progressionArr = [firstNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    progressionArr[i] = firstNumber + i * commonDifference;
  }
  const answer = progressionArr[hiddenElementPosition];
  progressionArr[hiddenElementPosition] = '..';
  const question = convertArrayToString(progressionArr);
  return [question, String(answer)];
};

const brainProgression = () => {
  const allRoundsData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const roundData = getRoundData();
    allRoundsData[i] = roundData;
  }
  runGame(allRoundsData, gameRule);
};

export default brainProgression;
