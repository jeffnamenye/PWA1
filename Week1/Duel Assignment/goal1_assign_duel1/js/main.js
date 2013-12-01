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
 			var f1 = Math.floor(Math.random() * (playerOneDamage - minDamage1) + minDamage1);
 			var f2 = Math.floor(Math.random() * (playerTwoDamage - minDamage2) + minDamage2);
 			console.log(f1);
 			console.log(f2);
		   console.log(i);
		 };
 		
	   
	 };
	 //funtion to check for winner
	function winnerCheck(){
		//code will go here
		
	};
	
	/******The program gets started below******/
	
	console.log ("program starts");
	fight();
	
 })();
