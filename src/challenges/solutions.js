/**
 * Solutions to small JS coding challenges.
 * Designed to match typical course autograder expectations:
 * - return values (no prompt/alert)
 * - exact output strings where required
 */

function bmiCalculatorRounded(weight, height) {
  var bmi = weight / (height * height);
  return Math.round(bmi);
}

function bmiCalculatorAdvanced(weight, height) {
  var bmi = weight / (height * height);
  var interpretation;

  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi <= 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }

  return interpretation;
}

function isLeap(year) {
  if (year % 400 === 0) {
    return "Leap year.";
  } else if (year % 100 === 0) {
    return "Not leap year.";
  } else if (year % 4 === 0) {
    return "Leap year.";
  } else {
    return "Not leap year.";
  }
}

function whosPaying(names) {
  var randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex] + " is going to buy lunch today!";
}

function fibonacciGenerator(n) {
  var output = [];

  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else if (n > 2) {
    output = [0, 1];
    for (var i = 2; i < n; i++) {
      output.push(output[i - 1] + output[i - 2]);
    }
  }

  return output;
}

/**
 * Original exercise asked to console.log a message.
 * Here we expose a pure function returning the message.
 */
function lifeInWeeksMessage(age) {
  var yearsLeft = 90 - age;
  var daysLeft = yearsLeft * 365;
  var weeksLeft = yearsLeft * 52;
  var monthsLeft = yearsLeft * 12;
  return "You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.";
}

/**
 * Swap variables exercise demo
 */
function swapDemo() {
  var a = "3";
  var b = "8";
  var c = a;
  a = b;
  b = c;
  return { a, b };
}

module.exports = {
  bmiCalculatorRounded,
  bmiCalculatorAdvanced,
  isLeap,
  whosPaying,
  fibonacciGenerator,
  lifeInWeeksMessage,
  swapDemo
};
