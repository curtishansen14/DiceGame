"use strict"

function rollDice(message) {
	let sidesOnDie = prompt("Please Enter Sides On Die");
	let roll = Math.floor(Math.random() * sidesOnDie) + 1;
	console.log(roll);
	return roll
}

//rollDice()

// function run(){
// 	let abilityRoll = rollDice();
// 	console.log(firstRoll)
// 	let personalityRoll = rollDice();
// 	console.log(secondRoll)
// 	let DistanceRoll = rollDice();

// }
// run();

function playersAbilityDisplay(abilityRoll){  // Save the output so I can use it later
	let roll = rollDice();
	if (roll >= 19) { console.log("5 Star");}
	else if (roll < 11 ) {console.log ("3 Star");}
	else {console.log ("4 Star");}

}

function humanElement(humanElement){ // consider alerts over consolelogs to pause
	let roll = rollDice();
	if (roll = 1 ) {"Ron Dayne"} // {"History Championships Academics"} 
	else if (roll = 2){"Russel Wilson"} // {"Campus, Academics, Play"}
	else if (roll = 3){"Montee Ball"} //{"Championships Campus History" }
	else if (roll = 4){"Jonathan Taylor"} // {"Campus Academics History" }
	else if (roll = 5){"Jack Cichy"} // {"Play Campus History"}
	else {"Bill Nagy"} // {"Campus Play History"}	
}


function distance(){
	let location = rollDice();
	if (location <= 2) {"HomeGrown"}
	else if (location = 3) {"Regional"}
	else if (location = 4) {"National"}

}

// for multiplying arrays
// var sum = 0;
// for(var i=0; i< arr1.length; i++) {
//     sum += arr1[i]*arr2[i];

