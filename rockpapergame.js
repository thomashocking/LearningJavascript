var generateUserInput = function(){
	userChoice = prompt("rock, paper, or scissors?");
};

var generateComputerChoice = function(){
	computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} else if(computerChoice <= 0.67) {
		computerChoice = "paper";
	} else 	{	
		computerChoice = "scissors";
	}		 
};

var checkInput = function(){
	userChoice = userChoice.toLowerCase();
	while(userChoice != "rock" && userChoice != "scissors" && userChoice != "paper"){
		userChoice = prompt("Do you choose rock, paper, or scissors?");
	}
};

var compare = function(choice1,choice2){
    
  if(choice1 == choice2)
    return ("The result is a tie!");
  
  if(choice1 == "rock"){
      if(choice2 == "scissors")
      return "rock wins";
      else{
          return "paper wins";
      }
  }
  
  if(choice1 == "paper"){
      if(choice2 == "rock")
      return "paper wins";
      else{
          return "scissors wins";
      }
  }
  
  if(choice1 == "scissors"){
      if(choice2 == "paper")
      return "scissors wins";
      else{
          return "rock wins";
      }
  }
};

var theGame = function(){
	var userChoice;
	var computerChoice;
	generateUserInput();	
	generateComputerChoice();
	checkInput();
	document.writeln(compare(userChoice,computerChoice));
};



theGame();
