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
