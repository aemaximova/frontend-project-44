import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const runGame = (allRoundsData, gameRule) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const randomExpression = allRoundsData[i][0];
    console.log(`Question: ${randomExpression}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = allRoundsData[i][1];
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { runGame, numberOfRounds };
