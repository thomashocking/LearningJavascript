var randomWords = [];
var chosenWord; 
var hitCount = 0;

var createRandomWords = function(){
	randomWords = ["chicken", "taco", "rain", "cat", "walter", "issaic", "max", "dog",		"computer", "word", "apple", "microsoft","thing","hustle","supernova","star","anything","else", "music"	];
};

var searchForWord = function(){
	chosenWord = prompt("What word would you like to search for?");
	chosenWord = chosenWord.toLowerCase();

	for(var i = 0; i < randomWords.length; i++){
		if(chosenWord == randomWords[i]){
			hitCount++;
		}				
	}
};

var writeRandomWords = function(wordArray){
	for(var i = 0; i < wordArray.length; i++){
		document.writeln(wordArray[i]);
	}
};

var displayTimesHit = function(){
	document.writeln("The word has been found " + hitCount + " times");
};

var startProgram = function(){
	createRandomWords();
	writeRandomWords(randomWords);
	searchForWord();
	displayTimesHit();
};

startProgram();

