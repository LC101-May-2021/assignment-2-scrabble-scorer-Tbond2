// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let oldScrabbleScorer = function(word){
  word = word.toUpperCase();

	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
    
		 }
	  }
	}
	return letterPoints;
}

let scrabbleObject = {
  name:"Scrabble",
  description:"The traditional scoring algorithm.",
  scoringFunction: oldScrabbleScorer
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   userWord = input.question("Let's play some scrabble! Enter a word: ");
   return userWord;
};

let simpleScore = function(word) {
  let wordPoints = 0;

  for (let i = 0; i < word.length; i++){
     wordPoints++;
  }
  return wordPoints
}
let simpleScoreObject ={
name:"Simple Score",
description: "Each letter is worth 1 point.",
scoringFunction: simpleScore
}

let vowelBonusScore = function(word){
  word = word.toUpperCase();
  let vowelPoints = 0;
 for (let i = 0; i < word.length; i++) {
  if (word[i] === "A" || word[i] === "E" ||word[i] === "I" ||word[i] === "O" ||word[i] === "U") {
			vowelPoints = vowelPoints+3;
      } else
      vowelPoints = vowelPoints+1  
 }
return vowelPoints
}

let vowelScoreObject ={
  name:"Bonus Vowels",
  description:"Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScore
}

let scrabbleScore = function(word){
  word = word.toLowerCase();
  let letterPoints = 0;
  for(let i = 0; i < word.length;i++){
    letterpoints += Number(newPointStructure[word[i]]);
  }
return letterPoints;
};
let newScrabbleScore = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction: scrabbleScore
}
const scoringAlgorithms = [simpleScoreObject, vowelScoreObject, newScrabbleScore]

function scorerPrompt() {
  console.log(`Which scoring algorithm would you like to use?
  
  0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
  1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
  2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description} `);
  
let scorerChoice = input.question("Enter 0, 1, or 2: ");
scorerChoice = Number(scorerChoice);
while (scorerChoice !== 0 && scorerChoice !== 1 && scorerChoice !== 2){
scorerChoice = input.question("Invalid input. Please enter 0, 1, or 2: ")
scorerChoice = Number(scorerChoice);
}
console.log(`Score for ${userWord}: ${scoringAlgorithms[scorerChoice].scoringFunction(userWord)}`)
}

function transform(object) {
  let newScoreObject = {};
  for(item in object){
    (i=0; i < object[item].length; i++){
      newScoreObject[object[item][i].toLowerCase()] = Number(item);
    }
  }
  return newScoreObject;
};

let newPointStructure = transform(oldPointStructure);

newPointStructure[" "] = 0;

function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

