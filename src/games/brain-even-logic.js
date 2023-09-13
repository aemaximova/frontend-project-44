import { runGame, numberOfRounds } from '../index.js';
import getRandomInt from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomInt) => randomInt % 2 === 0;

const brainEven = () => {
  const allRoundsData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getRandomInt(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    allRoundsData[i] = [question, answer];
  }
  runGame(allRoundsData, gameRule);
};

export default brainEven;
