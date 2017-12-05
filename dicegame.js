"use strict"

let crootPoints = [];
let croot = getCroot()

function rollDice(sidesOnDie) {
	let roll = Math.floor(Math.random() * sidesOnDie) + 1;
	console.log(roll);
	return roll
}


function getDistance(crootPoints){
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


function getTalent(crootPoints){
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
	let ronDayne = [0,.2,.2,.2,0]
	let russellWilson = [.2,0,.2,0,.2]
	let monteeBall = [0,.2,0,.2,.2]
	let nickToon = [0,0,.2,.2,.2,]
	let jackCichy = [.2,0,0,.2,.2]
	let billNagy = [.2,0,0,.2,.2]

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

function pitchPlaytime(crootPoints){
	let roll = rollDice(12);
	let playtimeArray = [1,0,0,0,0];
	let playtimeResult = 0;

	for(let i = 0; i < playtimeArray.length; i++) {
		playtimeArray[i] *= roll;
		playtimeArray[i] *= croot[i];
		playtimeResult += playtimeArray[i];
	}
	playtimeResult += roll
 initialRolls.push(playtimeResult)
}


function pitchChampionships(crootPoints){
	let roll = rollDice(12);
	let championshipsArray = [0,1,0,0,0];
	let championshipResult = 0;

	for(let i = 0; i < championshipsArray.length; i++) {
		championshipsArray[i] *= roll;
		championshipsArray[i] *= croot[i];
		championshipsResult += championshipsArray[i];
	}
	championshipsResult+=roll
	initialRolls.push(championshipsResult)
}

function pitchAcademics(crootPoints){
	let roll = rollDice(10);
	let academicsArray = [0,0,1,0,0];
	let playtimeResult = 0;

	for(let i = 0; i < academicsArray.length; i++) {
		academicsArray[i] *= roll;
		academicsArray[i] *= croot[i];
		academicsResult += academicsArray[i];
	}
	academicsResult+=roll
	initialRolls.push(academicsResult)
}

function pitchHistory(crootPoints){
	let roll = rollDice(10);
	let historyArray = [0,0,0,1,0];
	let historyResult = 0;

	for(let i = 0; i < historyArray.length; i++) {
		historyArray[i] *= roll;
		historyArray[i] *= croot[i];
		historyResult += historyArray[i];
	}
	historyResult+=roll
	initialRolls.push(historyResult)
}

function pitchCampus(crootPoints){
	let roll = rollDice(8);
	let campusArray = [0,0,0,0,1];
	let campusResult = 0;

	for(let i = 0; i < campusArray.length; i++) {
		campusArray[i] *= roll;
		campusArray[i] *= croot[i];
		campusResult += campusArray[i];
	}
	campusResult+=roll
	initialRolls.push(campusResult)
}

