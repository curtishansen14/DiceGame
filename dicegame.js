"use strict"

let ronDayne = [0,1.2,1.2,1.2.0]
let russelWilson = [1.2,0,1.2,0,1.2]
let monteeBall = [0,1.2,0,1.2,1.2]
let nickToon = [0,0,1.2,1.2,.12,]
let jackCichy = [1.2,0,0,1.2,1.2]
let billNagy = [1.2,0,0,1.2,1.2]


let homeGrown = 10
let regional = 4
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

function getCroot(){ //Display Distance
	let roll = rollforCroot()
		if (roll = 1) {return ronDayne}
		else if (roll = 2) { return russelWilson}
		else if (roll = 3) { return monteeBall}
		else if (roll = 4) { return nickToon}
		else if (roll = 5) { return jackCichy}
		else if (roll = 6) { return billNagy}
}

function getDistance(){ //Display Distance
	let location = rollforDistance()
	if      (location <= 2) {console.log(HomeGrown) return homeGrown}
	else if (location = 3)  {console.log(Regional) return regional}
	else if	(location = 4)  {console.log(National) return national}
}