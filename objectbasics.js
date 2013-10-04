//Basic objects.

var player1 = {
	name : "Fred",
	score : 10000,
	rank : 1
};


//making a method for player1

function playerDetails(){
	document.writeln(this.name + " has a rank of: " + this.rank + " and a score of " + this.score);
}

//giving player1 access to playerDetails.

player1.logDetails = playerDetails;

player1.logDetails();
