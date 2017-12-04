"use strict"

function crootArrays(){
	let ronDayne = [0,1.2,1.2,1.2.0]
	let russelWilson = [1.2,0,1.2,0,1.2]
	let monteeBall = [0,1.2,0,1.2,1.2]
	let nickToon = [0,0,1.2,1.2,.12,]
	let jackCichy = [1.2,0,0,1.2,1.2]
	let billNagy = [1.2,0,0,1.2,1.2]
}

function distanceArray(){
	let homeGrown = 5
	let regional = 2
	let national = 0 
}

function rollDice(message) {
	let sidesOnDie = prompt("Please Enter Sides On Die");
	let roll = Math.floor(Math.random() * sidesOnDie) + 1;
	console.log(roll);
	return roll
}


function playersAbilityDisplay(abilityRoll){  // Save the output so I can use it later
	let roll = rollDice();
	if (roll >= 19) { console.log("5 Star");}
	else if (roll < 11 ) {console.log ("3 Star");}
	else {console.log ("4 Star");}

}

function humanElement(humanElement){ // consider alerts over consolelogs to pause
	let roll = rollDice();
	if (roll = 1 ) {"Ron Dayne"} 
	else if (roll = 2){"Russel Wilson"} 
	else if (roll = 3){"Montee Ball"} 
	else if (roll = 4){"Nick Toon"} 
	else if (roll = 5){"Jack Cichy"} 
	else {"Bill Nagy"} 	
}




function distance(){
	let location = rollDice();
	if (location <= 2) {"HomeGrown"}
	else if (location = 3) {"Regional"}
	else if (location = 4) {"National"}

}


