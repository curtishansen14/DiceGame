"use strict"

let crootPoints = [];
let croot = getCroot()

console.log(crootPoints)

function rollDice(sidesOnDie) {
	let roll = Math.floor(Math.random() * sidesOnDie) + 1;
	console.log(roll);
	return roll
}


function getDistance(){
	let homeGrown = 12
	let regional = 4
	let national = 0


	let distance;
	let roll = rollDice(4)
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
	crootPoints.push(distance)
}


function getTalent(){
	let FiveStar = 0
	let FourStar = 5
	let ThreeStar = 10


	let talent;
	let roll = rollDice(20);
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
		crootPoints.push(talent)
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
				alert("You're recruiting Ron Dayne");
				//document.getElementById("nameOfRecruit").innerHTML = "You're 'Crootin' Ron Dayne";
				return croot;
			break;
			
			case 2:
				croot = russellWilson; 
				alert("You're recruiting Russell Wilson");
				//document.getElementById("nameOfRecruit").innerHTML = "You're 'Crootin' Russell Wilson";
				return croot;
			break;

			case 3:
				croot = monteeBall;
				alert("You're recruiting Montee Ball");
				//document.getElementById("nameOfRecruit").innerHTML = "You're 'Crootin Montee Ball";
				return croot;
		 	break;

			case 4: 
				croot = nickToon; 
				alert("You're recruiting Nick Toon");
				//document.getElementById("nameOfRecruit").innerHTML = "You're 'Crootin Nick Toon";
				return croot;
			break;

			case 5:
				croot = jackCichy;
				alert("You're recruiting Jack Cichy");
				//document.getElementById("nameOfRecruit").innerHTML = "You're 'Crootin' Jack Cichy";
				return croot;
				break;
		
			case 6:
				croot = billNagy; 
				alert("You're recruiting Bill Nagy");
				//document.getElementById("nameOfRecruit").innerHTML = "You're 'Crootin Bill Nagy";
				return croot;	
			break;
		}
}

function pitchPlaytime(){
	let roll = rollDice(12);
	let playtimeArray = [1,0,0,0,0];
	let playtimeResult = 0;

	for(let i = 0; i < playtimeArray.length; i++) {
		playtimeArray[i] *= roll;
		playtimeArray[i] *= croot[i];
		playtimeResult += playtimeArray[i];
	}
	playtimeResult += roll
 crootPoints.push(playtimeResult)
}


function pitchChampionships(){
	let roll = rollDice(12);
	let championshipsArray = [0,1,0,0,0];
	let championshipsResult = 0;

	for(let i = 0; i < championshipsArray.length; i++) {
		championshipsArray[i] *= roll;
		championshipsArray[i] *= croot[i];
		championshipsResult += championshipsArray[i];
	}
	championshipsResult+=roll
	crootPoints.push(championshipsResult)
}

function pitchAcademics(){
	let roll = rollDice(10);
	let academicsArray = [0,0,1,0,0];
	let academicsResult = 0;

	for(let i = 0; i < academicsArray.length; i++) {
		academicsArray[i] *= roll;
		academicsArray[i] *= croot[i];
		academicsResult += academicsArray[i];
	}
	academicsResult+=roll
	crootPoints.push(academicsResult)
}

function pitchHistory(){
	let roll = rollDice(10);
	let historyArray = [0,0,0,1,0];
	let historyResult = 0;

	for(let i = 0; i < historyArray.length; i++) {
		historyArray[i] *= roll;
		historyArray[i] *= croot[i];
		historyResult += historyArray[i];
	}
	historyResult+=roll
	crootPoints.push(historyResult)
}

function pitchCampus(){
	let roll = rollDice(8);
	let campusArray = [0,0,0,0,1];
	let campusResult = 0;

	for(let i = 0; i < campusArray.length; i++) {
		campusArray[i] *= roll;
		campusArray[i] *= croot[i];
		campusResult += campusArray[i];
	}
	campusResult+=roll
	crootPoints.push(campusResult)
}



function playGame(){
	let croot = getCroot();
	let talent = getTalent();
	getDistance();
	pitchChampionships(croot);
	pitchPlaytime(croot);
	pitchCampus(croot);
	pitchHistory(croot);
	pitchAcademics(croot);
	console.log(crootPoints);

	let result = crootPoints.reduce(function(total, el){
	
		return total + el;

	});
	console.log(result)	
}

playGame()
