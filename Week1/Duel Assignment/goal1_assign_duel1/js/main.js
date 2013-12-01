/*Name: Jeff Namenye
 * Date:11/26/13
 * Assignment: Goal1: Assignment: Duel1
 */ 
 
 //self-executing function
 (function(){
 	
 	console.log("Fight!!!");
 	
 	//player name
 	var playerOneName ="Spiderman";
 	var playerTwoName = "Batman";
 	
 	//player damage
 	var playerOneDamage = 20;
 	var playerTwoDamage = 20;
 	
 	//player health
 	var playerOneHealth = 100;
 	var playerTwoHealth = 100;
 	
 	var round = 1;
 	
 	//fight function
 	function fight () {
 		
 		console.log ("in the fight function");
 		
 		alert(playerOneName + ":" + playerOneHealth + " *Start* "+ playerTwoName + ":" + playerTwoHealth);
 		
 		
 		for (var i=0; i < 10; i ++) {
 			
 			//random formula is - Math.floor(Math.radom() * (max-min) + min);
 			
 			var minDamage1 = playerOneDamage * .5;
 			var minDamage2 = playerTwoDamage * .5;
 			var f1 = Math.floor(Math.random() * (playerOneDamage - minDamage1) + minDamage1 );
 			var f2 = Math.floor(Math.random() * (playerTwoDamage - minDamage2) + minDamage2);
 			//console.log(f1);
 			//console.log(f2);
		    //console.log(i);
		    
		    //inflict damage
		    playerOneHealth -= f1;
		    playerTwoHealth -= f2;
		    
		    //console.log(playerOneHealth);
		    //console.log(playerTwoHealth);
		   // console.log(playerOneName + ":" + playerOneHealth + " "+ playerTwoName + ":" + playerTwoHealth);
 		
 			var results = winnerCheck();
		    console.log (results);
		    };
 		
	   
	 };
	 //funtion to check for winner
	function winnerCheck(){
		//code will go here
		console.log ("in winnerCheck FN");
	var result = "no winner";
	
	if (playerOneHealth < 1 && playerTwoHealth < 1) {
		result = " You Both Die";
	} else if (playerOneHealth < 1) {
		result = playerTwoName + "WINS!!!";
	} else if (playerTwoHealth < 1) {
		result = playerOneName + "WINS!!!";
	}; 
	
	return result;
};
	
	/******The program gets started below******/
	
	console.log ("program starts");
	fight();
	
 })();
