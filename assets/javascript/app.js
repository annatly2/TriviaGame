$(document).ready(function(){




//Timer

var counter = 10;
var intervalId;

function runTimer(){
	intervalId = setInterval(decrementTimer, 1000);
}

function decrementTimer(){
	counter--;
	$("#counter-number").html("<h2>" + counter +"</h2>");

	if (counter===0){
		stopTimer();
		alert("You are out of time!");
	}
}

function stopTimer(){
	clearInterval(intervalId);
}


runTimer();



//Questions

var questions =[{
	question: "In The Little Mermaid, when Ursula transformed herself into a bride for Price Eric, what did she call herself?",
	choice: ["Veronica", "Vanessa", "Victoria", "Vivian"],
	correctAnswer: 1
},{
	question: "At the end of The Emperor's New Groove, what animal does Yzma turn into?",
	choice: ["Cat", "Dog", "Cow", "Llama"],
	correctAnswer: 1
}, {
	question: "What is Maleficent's crow called?", 
	choice: ["Raven", "Lucifer", "Diablo", "Rook"],
	correctAnswer: 2
}];


});




//yzma

//https://68.media.tumblr.com/9cca987c45baf7a3f9bfdc75c045e2a5/tumblr_oj9lczZHQp1st0dt8o1_500.gif
//maleficent
//https://wereallmadinhere.files.wordpress.com/2012/10/260wtv7-jpg.gif

///ursula picture
//https://68.media.tumblr.com/ea27c6140ece2a7be399c753d7d1f00b/tumblr_inline_nfq90upz0i1t2hh7q.gif