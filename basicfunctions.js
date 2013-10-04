function myFunction (x,y){
	var myVar = x * y;
	document.writeln(myVar);
};

function simpleFunction(){
	var foo = 500;   //local var.
	document.writeln(foo);
}



var multipleValues = []; //creating an empty array.

multipleValues[0] = 50;
multipleValues[1] = 60;
multipleValues[2] = "Mouse";

//log it out.
console.log(multipleValue[2]);

//easier way.
var multipleValues[50,60,"Mouse"];

//or.
var multipleValues = new Array();


document.writeln(multipleValues.length);


var phrase = "this is a simple phrase.";
var words = phrase.split(" ");

var position = phrase.indexOf("simple");
var segment = phrase.slice(6,11);

var today = new Date(); //current date and time.

var y2k = new Date(2000, 0 , 1);
