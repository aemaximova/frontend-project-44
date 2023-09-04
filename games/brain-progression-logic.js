import app from '../src/index.js';
import greeting from '../src/cli.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getQuestion = () => {
  const firstNumber = getRandomInt(-100, 100);
  const commonDifference = getRandomInt(-100, 100);
  const hiddenElementPosition = getRandomInt(0, 9);
  const progressionArr = [firstNumber];
  for (let i = 1; i < 10; i += 1) {
    progressionArr[i] = progressionArr[i - 1] + commonDifference;
  }
  progressionArr[hiddenElementPosition] = '..';
  let progressionString = '';
  for (let i = 0; i < 10; i += 1) {
    progressionString = `${progressionString} ${progressionArr[i]}`;
  }
  return progressionString;
};

const getCorrectAnswer = (randomExpression) => {
  const separator = ' ';
  const progressionArr = randomExpression.split(separator);
  let index = 0;
  let hiddenElement = 0;
  for (let i = 0; i < 10; i += 1) {
    if (progressionArr[i] === '..') {
      index = i;
      break;
    }
  }
  if (index < 5) {
    const commonDifference = Number(progressionArr[index + 2]) - Number(progressionArr[index + 1]);
    hiddenElement = Number(progressionArr[index + 1]) - commonDifference;
  } else {
    const commonDifference = Number(progressionArr[index - 1]) - Number(progressionArr[index - 2]);
    hiddenElement = Number(progressionArr[index - 1]) + commonDifference;
  }
  return hiddenElement;
};

const brainProgression = () => {
  const name = greeting();
  console.log('What number is missing in the progression?');
  app(getQuestion, getCorrectAnswer, name);
};

export default brainProgression;
