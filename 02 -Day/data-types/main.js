// Level 1 -

/* 1 */ const challenge = "30 Days Of JavaScript";
/* 2 */ console.log(challenge);
/* 3 */ console.log(challenge.length);
/* 4 */ console.log(challenge.toUpperCase());
/* 5 */ console.log(challenge.toLowerCase());
/* 6 */ console.log(challenge.substr(3, 4));
/* 7 */ console.log(challenge.slice(3, challenge.length));
/* 8 */ console.log(challenge.includes("Script"));
/* 9 */ console.log(challenge.split());
/* 10 */ console.log(challenge.split(""));

/* 11 */
const socialMedia = "Facebook, Google, Microsoft, Apple, IMB, Oracle, Amazon";
console.log(socialMedia.split(","));

/* 12 */ console.log(challenge.replace("JavaScript", "Phyton"));

/* 13 */ console.log(challenge.charCodeAt());
/* 14 */ console.log(challenge.charCodeAt(12));
/* 15 */ console.log(challenge.indexOf("a"));
/* 16 */ console.log(challenge.lastIndexOf("a"));

/* 17 */
const string =
  "You cannot end a sentence with because because is a conjunction";
console.log(string.indexOf("because"));

/* 18 */ console.log(string.lastIndexOf("because"));
/* 19 */ console.log(string.search("because"));

/* 20 */
const spacingChallenge = "          30 Days of JavaScript       ";
console.log(spacingChallenge.trim());

/* 21 */ console.log(challenge.startsWith("30"));
/* 22 */ console.log(challenge.endsWith("t"));

/* 23 */
let pattern = /a/gi;
console.log(challenge.match(pattern));

/* 24 */
const partOne = "30 Days";
console.log(partOne.concat("Of JavaScript"));

/* 25 */ console.log(challenge.repeat(2));

// Level 2 -

/* 1 */ const johnQuote =
  "There is no exercise better for the heart than reaching down and lifting people up";
console.log(johnQuote);

/* 2 */ const teresaQuote =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(teresaQuote);

/* 3 */ console.log("10" === 10);
console.log(+"10" === 10);

/* 4 */ const num = parseFloat("9,8");
console.log(num == 10);
console.log(num + 1 == 10);

/* 5 */ const p = "phyton";
const j = "jargon";
console.log(p.includes("on"));
console.log(j.includes("on"));

/* 6 */ const sentence = "I hope this course is not full of jargon";
console.log(sentence.includes("jargon"));

/* 7 */ const random = Math.floor(Math.random() * 101);
console.log(random);

/* 8 */ const random2 = Math.floor(Math.random() * 51 + 50);
console.log(random2);

/* 9 */ const random3 = Math.floor(Math.random() * 256);
console.log(random3);

/* 10 */ const js = "JavaScript";
const randomNum = Math.floor(Math.random() * 10);
console.log(js.charAt(randomNum));

/* 11 */ const pattern1 = "1 ".repeat(5);
const pattern2 = "2 1 2 4 8";
const pattern3 = "3 1 3 9 27";
const pattern4 = "4 1 4 16 64";
const pattern5 = "5 1 5 25 125";
console.log(pattern1);
console.log(pattern2);
console.log(pattern3);
console.log(pattern4);
console.log(pattern5);

/* 12 */ const string2 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(string2.substr(30, 25));

// Level 3 -

/* 1 */ const anotherString =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(anotherString.match(/love/gi));

/* 2 */ console.log(string2.match(/because/gi));

/* 3 */ const sentence2 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let regEx = /\b\w+\b/g;
const result = sentence2.match(regEx);
console.log(result); // unfinished

/* 4 */
const text =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
const regEx2 = /\W+/g;
const partialIncome = text.match(regEx2);
const finalIncome =
  parseInt(partialIncome[0]) +
  parseInt(partialIncome[1]) +
  parseInt(partialIncome[2]);
console.log(finalIncome);
