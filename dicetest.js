"use strict"
// function run(){
// 	let abilityRoll = rollDice();
// 	console.log(firstRoll)
// 	let personalityRoll = rollDice();
// 	console.log(secondRoll)
// 	let DistanceRoll = rollDice();
// }
// run();


// for multiplying arrays
// var sum = 0;
// for(var i=0; i< arr1.length; i++) {
//     sum += arr1[i]*arr2[i];


let ronDayne = [0,1.2,1.2,1.2.0]
let russelWilson = [1.2,0,1.2,0,1.2]
let monteeBall = [0,1.2,0,1.2,1.2]
let nickToon = [0,0,1.2,1.2,.12,]
let jackCichy = [1.2,0,0,1.2,1.2]
let billNagy = [1.2,0,0,1.2,1.2]

let homeGrown = 5
let regional = 2
let national = 0 

let playtime = [1,0,0,0,0]
let championships = [0,1,0,0,0]
let academics = [0,0,1,0,0]
let history = [0,0,0,1,0]
let campus = [0,0,0,0,1] 

let totaalscore =[]

function getUserInput(message){
	let userinput = prompt(message);
	return userinput;
}


function rollforCroot() {
	let crootRoll = Math.floor(Math.random() * 7) + 1;
	return crootRoll
}

function rollforTalent(){
	let talentRoll = Math.floor(Math.random() * 21) + 1;
	return talentRoll
}

function rollforDistance(){
	let distanceRoll = Math.floor(Math.random() * 21) + 1;
	return distanceRoll
}

function talent(){
	let roll = rollforTalent();
	let FiveStar  = 0
	let FourStar  = 5 
	let ThreeStar = 10
	if (roll >= 19) { console.log("5 Star");}
	else if (roll < 11 ) {console.log ("3 Star");}
	else {console.log ("4 Star");}

}


// function Crootmultiplier(){
// let arr1 = [4,0,0,0,0]
// let arr2 = [1.2,0,1.2,1.2,0]
// console.log(4 * arr1[4, 0, 0, 0, 0]);
// console.log(4 * arr2[1.2,0,1.2,1.2,0]);
// }

// function runCroot(){
// 	let arr1 = [4,2,0,0,0]
// 	let arr2 = [1.2,0,1.2,1.2,0]
// 	console.log(4 * arr1[0, 0, 4, 0, 0]);
// 	console.log(4 * arr2[1.2,0,1.2,1.2,0]);
// 	console.log(rollDice()) 

// 	rollDice() * arr1[4,2,0,0,0]
// 	rollDice() * arr2[1.2,0,1.2,1.2,0]

// }

// runCroot()

// function arrayTest(){
// 	let arr1 = [1,   0,  0,  0,   0];
// 	let arr2 = [1.2, 0, 1.2, 1.2, 0];
// 	let arr3 = [];
// 	let arr4 = [];
// 	for (let i=0; i<arr1.length; i++){
// 		arr3.push(arr1[i] * arr2[i]);
// 		}
// 	for (let i = 0; i < arr3.length; i++) {
// 			arr4.push(arr3[i] )
// 	}
// console.log(arr4)
// return arr4
// }
// arrayTest()

// function crootArrays(){
// 	let ronDayne = [0,1.2,1.2,1.2.0]
// 	let russelWilson = [1.2,0,1.2,0,1.2]
// 	let monteeBall = [0,1.2,0,1.2,1.2]
// 	let nickToon = [0,0,1.2,1.2,.12,]
// 	let jackCichy = [1.2,0,0,1.2,1.2]
// 	let billNagy = [1.2,0,0,1.2,1.2]
// }

// function multiplyByRoll(){
// 	crootArrays()
// }
function humanElement(){
	let roll = rollDice();
	if (roll = 1 ) {ronDayne} 
	else if (roll = 2){russelWilson} 
	else if (roll = 3){monteeBall} 
	else if (roll = 4){nickToon} 
	else if (roll = 5){jackCichy} 
	else {billNagy} 	
}


function pitchPlayTime(){
	let playtime = [1,0,0,0,0]
	let croot = humanElement()
}

function TotalScore(){
let ronDayne = [0,1.2,1.2,1.2.0]
let russelWilson = [1.2,0,1.2,0,1.2]
let monteeBall = [0,1.2,0,1.2,1.2]
let nickToon = [0,0,1.2,1.2,.12,]
let jackCichy = [1.2,0,0,1.2,1.2]
let billNagy = [1.2,0,0,1.2,1.2]

let homeGrown = 5
let regional = 2
let national = 0 

let playtime = [1,0,0,0,0]
let championships = [0,1,0,0,0]
let academics = [0,0,1,0,0]
let history = [0,0,0,1,0]
let campus = [0,0,0,0,1]


function Totalscore2(){
let Score = [pitch1(), pitch2(), pitch3(), distance(), talent()]

Score.reduce()  

}