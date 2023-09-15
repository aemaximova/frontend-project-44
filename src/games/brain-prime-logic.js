import { runGame, numberOfRounds } from '../index.js';
import getRandomInt from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomInt) => {
  if (randomInt < 2) {
    return false;
  }
  for (let i = 2; i <= Math.ceil(Math.sqrt(randomInt)); i += 1) {
    if (randomInt % i === 0) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const question = getRandomInt(2, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const runBrainPrime = () => {
  const allRoundsData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const roundData = getRoundData();
    allRoundsData[i] = roundData;
  }
  runGame(allRoundsData, gameRule);
};

export default runBrainPrime;
