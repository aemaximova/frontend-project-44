import readlineSync from 'readline-sync';

const app = (getQuestion, getCorrectAnswer, gameRule) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const randomExpression = String(getQuestion());
    console.log(`Question: ${randomExpression}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(randomExpression);
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default app;
