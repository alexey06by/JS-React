// Task 1
let x = 20;
let y = 58;
let z = 42;
console.log(x+y+z)

// Task 2
let secondsInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let daysInYear = 365;
let myAgeInSeconds = 35 * daysInYear * hoursInDay * minutesInHour * secondsInMinute;

// Task 3
let count = 42;
let userName = '42';
let string = count + "";
string = String(count);
let number = + userName;
number = Number(userName);

// Task 4
let a = 1;
let b = 2;
let c = "белых медведей";
console.log(a + (b + " " + c));

// Task 5
let word1 = "доступ";
let word2 = "морпех";
let word3 = "наледь";
let word4 = "попрек";
let word5 = "рубило";
let lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length;

// Task 6
let booleanVariable = true;
let numberVariable =  1;
let stringVariable = "Hello!"
console.log(`Variable: booleanVariable have type: ${typeof booleanVariable}`);
console.log(`Variable: numberVariable have type: ${typeof numberVariable}`);
console.log(`Variable: stringVariable have type: ${typeof stringVariable}`);

// Task 7
console.log(prompt("Enter your name and age"));

// Task 8.1
let a8 = 3;
let b8 = 4;
a8 = a8 + b8;
b8 = a8 - b8;
a8 = a8 - b8;
console.log(a8,b8)

// Task 8.2
let codeword1 = 'обернись';
let codeword2 = 'неужели';
let codeword3 = 'огурцы';
let codeword4 = 'липкие';
let codeword5 = '?!';

let cipher = codeword1[1] + codeword2[1] + codeword3[1] + codeword4[1] + codeword5[1];

console.log(cipher);
