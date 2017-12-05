"use strict"

let initialRolls = [];

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
