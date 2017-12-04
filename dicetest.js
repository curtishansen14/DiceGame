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

function rollDice(message) {
	let sidesOnDie = prompt("Please Enter Sides On Die");
	let roll = Math.floor(Math.random() * sidesOnDie) + 1;
	console.log(roll);
	return roll
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

function pitchByCroot(){
	
}