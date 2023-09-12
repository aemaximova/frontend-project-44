import app from '../index.js';
import getRandomInt from '../utils.js';

const gameRule = 'What number is missing in the progression?';
const progressionLength = 10;
const numberOfRounds = 3;

const generateProgressionWithGap = () => {
  const firstNumber = getRandomInt(-100, 100);
  const commonDifference = getRandomInt(-100, 100);
  const hiddenElementPosition = getRandomInt(0, 9);
  const progressionArr = [firstNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    progressionArr[i] = firstNumber + i * commonDifference;
  }
  const answer = progressionArr[hiddenElementPosition];
  progressionArr[hiddenElementPosition] = '..';
  let progressionString = '';
  for (let i = 0; i < progressionLength; i += 1) {
    progressionString = `${progressionString} ${progressionArr[i]}`;
  }
  return [progressionString.trim(), answer];
};

const getQuestionAnswerPairs = () => {
  const questionAnswerPairs = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const questionAnswerPair = generateProgressionWithGap();
    questionAnswerPairs[i] = questionAnswerPair;
  }
  return questionAnswerPairs;
};

const brainProgression = () => {
  const questionAnswerPairs = getQuestionAnswerPairs();
  app(questionAnswerPairs, gameRule);
};

export default brainProgression;
