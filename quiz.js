//Welcome message
alert("Welcome to the capital cities quiz game");

//initialise score to 0
var score = 0;


//Question 1
var answer1 = prompt("What is the capital of Scotland?");
if (answer1.toUpperCase() === "EDINBURGH"){
score += 1;
}

//Question 2
var answer2 = prompt("What is the capital of France?");
if (answer2.toUpperCase() === "PARIS") {
score += 1;
}

//Question 3
var answer3 = prompt("What is the capital of Iraq?");
if (answer3.toUpperCase() === "BAGHDAD") {
score += 1;
}

//Question 4
var answer4 = prompt("What is the capital of Portugal?");
if (answer4.toUpperCase() === "LISBON") {
score += 1;
}

var answer5 = prompt("What is the capital of Egypt?");
if (answer5.toUpperCase() === "CAIRO"){
score += 1;
}


//Rank player and return results

document.write("<p>You scored a total of " + score + " out of 5</p>");

if (score === 5) {
document.write("<p>You got the Gold prize!</p>");
}
else if (score === 4 || score === 3){
document.write("<p>You got the Silver prize!</p>");
}
else if (score === 2 || score === 1){
document.write("<p>You got the Bronze prize!</p>");
}
 else {
 document.write("<p>You suck!</p>");
 }
 