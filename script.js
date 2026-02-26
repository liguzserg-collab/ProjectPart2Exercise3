
//const shiftValue = 3;
const randomDecimal = Math.random();
const range = 33 - 3 + 1; 
//Answer1 - to include both ends of our range, 3 and 33

const randomInRange = randomDecimal * range;
//Answer2 - Multiplying `randomDecimal` by `range` scales the decimal number so that it falls in the range from 0 to `range`

const randomInt = Math.floor(randomInRange);
//Answer3 - We use Math.floor() to ensure rounding down to the nearest integer, yielding an integer between 0 and range - 1

const shiftValue = randomInt + 3;
//Answer4 - randomInt is a number between 0 and range - 1 , adding 3 shifts this range up, resulting in numbers from 3 to 33 inclusive.




const friend = "BRUTUS";
const alphabet = "abcdefghijklmnopqrstuvwxyz";

const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());



const alphabetLength = alphabet.length;
const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];



const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3);

console.log(encryptedFirstLetter);
console.log(teaserMessage);




