import { runGame, numberOfRounds } from '../index.js';
import getRandomInt from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomInt) => {
  for (let i = 2; i <= Math.ceil(Math.sqrt(randomInt)); i += 1) {
    if (randomInt % i === 0) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const randomInt = getRandomInt(2, 100);
  const answer = isPrime(randomInt) ? 'yes' : 'no';
  return [randomInt, answer];
};

const brainPrime = () => {
  const allRoundsData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const roundData = getRoundData();
    allRoundsData[i] = roundData;
  }
  runGame(allRoundsData, gameRule);
};

export default brainPrime;
