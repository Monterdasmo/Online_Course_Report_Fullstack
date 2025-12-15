/**
 * Small JavaScript challenges (autograder-friendly style)
 * Run: npm run start
 */

const {
  bmiCalculatorRounded,
  bmiCalculatorAdvanced,
  isLeap,
  whosPaying,
  fibonacciGenerator,
  lifeInWeeksMessage,
  swapDemo
} = require("./solutions");

console.log("=== Demo run ===");
console.log("BMI rounded (65, 1.8):", bmiCalculatorRounded(65, 1.8));
console.log(bmiCalculatorAdvanced(65, 1.8));

console.log("Leap year 2400:", isLeap(2400));
console.log("Leap year 1989:", isLeap(1989));

console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));
console.log("Fibonacci n=7:", fibonacciGenerator(7));

console.log(lifeInWeeksMessage(56));
console.log("Swap demo:", swapDemo());
