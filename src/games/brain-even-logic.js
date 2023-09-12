import app from '../index.js';
import getRandomInt from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberOfRounds = 3;

const getQuestionAnswerPairs = () => {
  const questionAnswerPair = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getRandomInt(1, 100);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    questionAnswerPair[i] = [question, answer];
  }
  return questionAnswerPair;
};

const brainEven = () => {
  const questionAnswerPairs = getQuestionAnswerPairs();
  app(questionAnswerPairs, gameRule);
};

export default brainEven;
