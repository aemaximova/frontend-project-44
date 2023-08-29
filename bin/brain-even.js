#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let win = true;
for (let i = 1; i < 4; i += 1) {
  const randomInt = getRandomInt(1, 100);
  console.log(`Question: ${randomInt}`);
  const answer = readlineSync.question('Your answer: ');
  let isEven = 'no';
  if (randomInt % 2 === 0) {
    isEven = 'yes';
  }
  if (isEven === answer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'`);
    console.log(`Let's try again, ${name}`);
    win = false;
    break;
  }
}
if (win) {
  console.log(`Congratulations, ${name}`);
}
