"use strict"

let initialRolls = [];
let croot = getCroot()

function rollDice(sidesOnDie) {
	let roll = Math.floor(Math.random() * sidesOnDie) + 1;
	console.log(roll);
	return roll
}


function getDistance(initialRolls){
	let homeGrown = 12
	let regional = 4
	let national = 0


	let distance;
	let roll = rollDice(4)
	console.log(roll)
	if      (roll <= 2)
	{ 
				distance = homeGrown 
					alert("Your 'croot is Home Grown!");
	}
	else if (roll === 3)
	{
				distance = regional
					alert("Your 'croot is Regional!");
	}
	else if (roll === 4)
	{
				distance = national
					alert("Your 'croot is National!");
	}
	initialRolls.push(distance)
}


function getTalent(initialRolls){
	let FiveStar = 0
	let FourStar = 5
	let ThreeStar = 10


	let talent;
	let roll = rollDice(20);
	console.log(roll)
	if      (roll >= 19)
	{ 
				talent = FiveStar;
	 			alert("Your 'croot is 5 Star");
	 		}
	else if (roll < 11 ) 
	{ 
				talent = ThreeStar;	
				alert("Your 'croot is 3 Star");
			}
	else    
				{talent = FourStar;
				alert ("Your 'croot is 4 Star");
			}
		initialRolls.push(talent)
		}


function getCroot(){ 
	let ronDayne = [0,1.2,1.2,1.2,0]
	let russellWilson = [1.2,0,1.2,0,1.2]
	let monteeBall = [0,1.2,0,1.2,1.2]
	let nickToon = [0,0,1.2,1.2, 1.2,]
	let jackCichy = [1.2,0,0,1.2,1.2]
	let billNagy = [1.2,0,0,1.2,1.2]

	let croot;

	let roll = rollDice(6)
		switch (roll){
			
			case 1: 
				croot = ronDayne;
				alert("You're 'crooting Ron Dayne!");
				return croot;
			break;
			
			case 2:
				croot = russellWilson; 
				alert("You're 'crooting Russell Wilson.");
				return croot;
			break;

			case 3:
				croot = monteeBall;
				alert("You're 'crooting Montee Ball.");
				return croot;
		 	break;

			case 4: 
				croot = nickToon; 
				alert("You're 'crooting Nick Toon.");
				return croot;
			break;

			case 5:
				croot = jackCichy;
				alert("You're 'crooting Jack Cichy");
				return croot;
				break;
		
			case 6:
				croot = billNagy; 
				alert("You're 'crooting Bill Nagy");
				return croot;	
			break;
		}
}

// function runGame() {
// 	let croot; 

// 	getDistance(initialRolls)
// 	getTalent(initialRolls)
// 	console.log(initialRolls)
// 	croot = getCroot()
// 	console.log(croot)
// }

// runGame();

function pitchPlaytime(){
	let roll = rollDice(12);
	let playtimeArray = [1,0,0,0,0];
	let playtimeResult = 0;

	for(let i = 0; i < playtimeArray.length; i++) {
		playtimeArray[i] *= roll;
		playtimeArray[i] *= croot[i];
		playtimeArray[i] += roll;
		platimeResult += playtimeArray[i];
	}
return playtimeResult
}


function pitchChampionships(){
	let roll = rollDice(12);
	let championshipsArray = [0,1,0,0,0];
	let championshipResult = 0;

	for(let i = 0; i < championshipsArray.length; i++) {
		championshipsArray[i] *= roll;
		championshipsArray[i] *= croot[i];
		championshipsArray[i] += roll;
		championshipsResult += championshipsArray[i];
	}
return championshipResult
}

function pitchAcademics(){
	let roll = rollDice(10);
	let academicsArray = [0,0,1,0,0];
	let playtimeResult = 0;

	for(let i = 0; i < academicsArray.length; i++) {
		academicsArray[i] *= roll;
		academicsArray[i] *= croot[i];
		academicsArray[i] += roll;
		academicsResult += academicsArray[i];
	}
return academicsResult
}

function pitchHistory(){
	let roll = rollDice(10);
	let historyArray = [0,0,0,1,0];
	let historyResult = 0;

	for(let i = 0; i < historyArray.length; i++) {
		historyArray[i] *= roll;
		historyArray[i] *= croot[i];
		historyArray[i] += roll;
		historyResult += historyArray[i];
	}
return historyResult
}

function pitchCampus(){
	let roll = rollDice(8);
	let campusArray = [0,0,0,0,1];
	let campusResult = 0;

	for(let i = 0; i < campusArray.length; i++) {
		campusArray[i] *= roll;
		campusArray[i] *= croot[i];
		campusArray[i] += roll;
		campusResult += campusArray[i];
	}
return campusResult
}
