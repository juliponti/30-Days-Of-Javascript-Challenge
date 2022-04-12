// Level 1

/* 1 */
const firstName = "Padme";
const lastName = "Amidala";
const country = "Naboo";
const city = "capital";
const age = 24;
const isMarried = true;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);

/* 2 */ console.log("10" == 10);

/* 3 */ console.log(parseInt("9.8") == 10);

/* 4 */
// truthy values
console.log(1 ? "is true" : "is false");
console.log("HELLO" ? "is true" : "is false");
console.log(-100 ? "is true" : "is false");

// falsy Values
console.log(0 ? "is true" : "is false");
console.log(undefined ? "is true" : "is false");
console.log(null ? "is true" : "is false");

/* 5 */ // Predicting results

4 > 3; // true
4 >= 3; // true
4 < 3; // false
4 <= 3; // false
4 == 4; // true
4 === 4; // true
4 != 4; // false
4 !== 4; // false
4 != "4"; // false
4 == "4"; // true
4 === "4"; // false

console.log("phyton".length !== "jargon".length ? "true" : "false");

/* 6 */ // Predicting results

4 > 3 && 10 < 12; // true && true -> true
4 > 3 && 10 > 12; // true && false -> false
4 > 3 || 10 < 12; // true -> true
4 > 3 || 10 > 12; // true -> true
!(4 > 3); //!(true) -> false
!(4 < 3); //!(false) -> true
!false; //true
!(4 > 3 && 10 < 12); //!(true && true -> true) -> false
!(4 > 3 && 10 > 12); //!(true && false -> false) -> true
!(4 === "4"); //!(false) -> true

const string = "There is no 'on' in both dragon and python";
console.log(string ? "true" : "false"); // true

/* 7 */

const date = new Date();

const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentHour = date.getHours();
const currentMinutes = date.getMinutes();
const secsElapsed = date.getTime();
// i
console.log(`Our current year is ${currentYear}`);
console.log(`Our current month in number is ${currentMonth}`);
console.log(`Our current hour is ${currentHour} hs`);
console.log(`Our current minute is ${currentMinutes}min`);
console.log(
  `the number of seconds elapsed from juanary 1 1970 up to now are ${secsElapsed} seconds`
);

// Level 2

/* 1 */
let height = prompt("Enter height");
let base = prompt("Enter Base");
const area = 0.5 * base * height;
alert(`the area of the triangle is ${area}`);

/* 2 */
let sideA = prompt("Enter side a");
let sideB = prompt("Enter side b");
let sideC = prompt("Enter side c");
const perimeter = +sideA + +sideB + +sideC;
alert(`The perimeter of the triangle is ${perimeter}`);

/* 3 */
const length = prompt("Enter length of triangle");
const width = prompt("Enter width of triangle");
const area1 = +length * +width;
const perimeter1 = 2 * (+length + +width);
alert(
  `the area of the triangle is ${area1} and the perimeter is ${perimeter1}`
);

/* 4 */
const radius = prompt("Enter radius", "in milimenters");
const pi = Math.PI;
const stringPi = pi.toString().slice(0, 4);
const area2 = +stringPi * radius * radius;
const circum = 2 * +stringPi * radius;

alert(`The area of the circle is ${area2} and the circumference is ${circum}`);

/* 5 */
function calcSlope(x) {
  const y = 2 * x - 2;
  const answer = y / x;
  return console.log(+answer);
}
const answer1 = calcSlope(2);

/* 6 */
function slope(x1, y1, x2, y2) {
  const answer = (y2 - y1) / (x2 - x1);
  return console.log(+answer);
}
const answer2 = slope(2, 2, 6, 10);

/* 7*/
console.log(+answer1 === +answer2 ? "true" : "false");

/* 8 */
function valueOf(x) {
  const y = x ** 2 + 6 * x + 9;
  return console.log(+y);
}

valueOf(2);
valueOf(5);
valueOf(1);
valueOf(-1);
valueOf(-2.5);
valueOf(-2.1);
valueOf(-3); // returns 0

/* 9 */

const hours = prompt("Enter hours per week");
const rate = prompt("Enter rate per hour");
const calc = +rate * +hours;
alert(`Your weekly earning is ${calc}`);

/* 10 */
console.log("Julieta".length > 7 ? "my name is long" : "my name is short");

/* 11 */
let firstName1 = "Julieta";
let surname = "Pontino";
const firstCondition = firstName1.length > surname.length;
const secondCondition = firstName1.length < surname.length;
const thirdCondition = firstName1.length == surname.length;
console.log(
  firstCondition
    ? `my firstname ${firstName1} is longer than my surname ${surname}`
    : secondCondition
    ? `my surname ${surname} is longer than my firstname ${firstName1}`
    : `my firstname ${firstName1} is equally longer than my surname ${surname}`
);

/* 12 */
let myAge = 24;
let yourAge = 250;
const difference = yourAge - myAge;
console.log(`You're ${difference} years older than me`);

/* 13 */

const birthYear = prompt("Enter your brith year");
const userAge = 2022 - +birthYear;

+userAge >= 18
  ? alert(`You're ${userAge}. You are old enough to drive`)
  : userAge < 18
  ? alert(
      `You're ${userAge}, You'll be allowed to drive after ${
        18 - +userAge
      } years`
    )
  : "";

/* 14 */

const yearsLived = prompt("Enter number of years you live");
const secondsLived = +yearsLived * 365 * 24 * 60 * 60;
alert(`You've lived ${secondsLived} seconds`);

/* 15 */

const currentDay = date.getDay();
console.log(
  `${currentYear}-${currentMonth}-${currentDay} ${currentHour}:${currentMinutes}`
);
console.log(
  `${currentDay}-${currentMonth}-${currentYear} ${currentHour}:${currentMinutes}`
);
console.log(
  `${currentDay}/${currentMonth}/${currentYear} ${currentHour}:${currentMinutes}`
);

// Level 3
console.log(
  `0${currentDay}/0${currentMonth}/${currentYear} ${currentHour}:${currentMinutes}`
);
