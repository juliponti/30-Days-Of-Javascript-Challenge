// Level 1

/* 1 */ const userAge = prompt("How old are you?");

if (userAge > 18) {
  alert("You are old enough to drive");
} else {
  const yearsLeft = 18 - +userAge;
  alert(`You are left with ${yearsLeft} years to drive.`);
}

/* 2 */ const myAge = 24;

if (userAge == myAge) {
  console.log("We've got the same age");
} else if (userAge > myAge) {
  console.log("You're older than me");
} else {
  console.log("I'm older than you");
}

/* 3 */

let a = 4;
let b = 3;

if (a > b) {
  console.log("a is greater than b");
} else if (b > a) {
  console.log("b is greater than a");
} else {
  console.log("a and b are equal");
}

a > b
  ? "a is greater than b"
  : b > a
  ? "b is greater than a"
  : "a and b are equal";

/* 4 */

const num = prompt("Enter a number: ");
(num / 2) % 0
  ? console.log(`${num} is an even number`)
  : console.log(`${num} is an odd number`);

// Level 2

/* 1 */

const score = prompt("Enter your Score between 0-100:");

(score >= 0) & (score < 49)
  ? console.log("Your Score is F")
  : (score >= 50) & (+score < 59)
  ? console.log("Your Score is D")
  : (score >= 60) & (score < 69)
  ? console.log("Your Score is C")
  : (score >= 70) & (score < 89)
  ? console.log("Your Score is B")
  : (score >= 80) & (score <= 100)
  ? console.log("Your Score is A")
  : console.log("Your score is not correct");

/* 2 */
const checkSeason = prompt("Enter current month").toLowerCase();

console.log(checkSeason);

switch (checkSeason) {
  case "september":
  case "october":
  case "november":
    console.log("The current season is Auttum");
    break;
  case "december":
  case "juanary":
  case "february":
    console.log("The current season is Winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("The current season is Spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("The current season is Summer");
    break;
  default:
    console.log("Entered value was not a month");
}

/* 3  */

const today = prompt("What day is today?: ").toLowerCase();

switch (today) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thrusday":
    console.log(`${today} is a working day`);
    break;
  case "saturday":
  case "sunday":
    console.log(`${today} is weekend`);
    break;
  default:
    console.log("enter value was not a day");
}

// Level

/* 1 */
const month = prompt("Enter current month: ").toLowerCase();

switch (month) {
  case "february":
    console.log(`${today} has 28 days`);
    break;
  case "juanary":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${month} has 31 days `);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${month} has 30 days`);
    break;
  default:
    console.log(`${month} is not a month`);
}

/* 2 */
const month2 = prompt("Enter current month: ").toLowerCase();

switch (month2) {
  case "february":
    console.log(`${month2} has 29 days`);
    break;
  case "juanary":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${month2} has 31 days `);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${month2} has 30 days`);
    break;
  default:
    console.log(`${month2} is not a month`);
}
