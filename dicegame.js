"use strict"

let ronDayne = [0,1.2,1.2,1.2.0]
let russellWilson = [1.2,0,1.2,0,1.2]
let monteeBall = [0,1.2,0,1.2,1.2]
let nickToon = [0,0,1.2,1.2,.12,]
let jackCichy = [1.2,0,0,1.2,1.2]
let billNagy = [1.2,0,0,1.2,1.2]


let homeGrown = 10
let regional = 4
let national = 0

let FiveStar = 0
let FourStar = 5
let ThreeStar = 10





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

// function getCroot(){ 
// 	let roll = rollforCroot()
// 		if (roll = 1) { alert("You're 'crooting Ron Dayne!") return ronDayne};
// 		else if (roll = 2) { alert("You're 'crooting Russell Wilson.") return russellWilson};
// 		else if (roll = 3) { alert("You're 'crooting Montee Ball.") return monteeBall};
// 		else if (roll = 4) { alert("You're 'crooting Nick Toon.") return nickToon};
// 		else if (roll = 5) { alert("You're 'crooting Jack Cichy") return jackCichy};
// 		else if (roll = 6) { alert("You're 'crooting Bill Nagy") return billNagy};
// }



// This is bad code that needs to changed so the output is saved in a global array with Distance 
// function getTalent(){
// 	let talent;
// 	let roll = rollforTalent();
// 	if      (roll >= 19) { 
// 				talent = FiveStar;
// 	 			alert("Your 'croot is 5 Star");}
// 	else if (roll < 11 ) { 
// 				talent = ThreeStar;	
// 				alert("Your 'croot is 3 Star");}
// 	else    
// 				{talent = FourStar;
// 				alert ("Your 'croot is 4 Star");}
// 	return talent

// }
