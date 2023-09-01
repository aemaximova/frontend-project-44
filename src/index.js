import readlineSync from 'readline-sync';

const app = (getQuestion, getCorrectAnswer, name) => {
  let win = true;
  for (let i = 0; i < 3; i += 1) {
    const randomExpression = getQuestion();
    console.log(`Question: ${randomExpression}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(randomExpression);
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}`);
      win = false;
      break;
    }
  }
  if (win) {
    console.log(`Congratulations, ${name}`);
  }
};

export default app;
