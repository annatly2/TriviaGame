$(document).ready(function(){

var firstScreen;
var counter = 10;
var intervalId;

var unansweredQuestion;
var triviaHTML;
var numAnswerCorrect;
var numAnswerWrong;
var questionCounter = 0;


function startScreen(){
	firstScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start The Trivia Game</a></p>";
	$(".mainArea").html(firstScreen);
}

startScreen();

$("body").on("click", ".start-button", function (event){
	//insert functions to generate HTML and start timer
});

function generateHTML(){

}

function lossDueToTimeOut(){
	unansweredQuestion++;
	triviaHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(triviaHTML);
	setTimeout(wait, 3000);

}

function updateWin(){
	numAnswerCorrect++;
	triviaHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(triviaHTML);
	setTimeout(wait, 3000);
}

function updateLoss(){
	numAnswerWrong++;
	triviaHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	setTimeout(wait, 3000);

}


function wait(){
	if(questionCounter > 2){
		questionCounter++;
		generateHTML();
		counter = 10;
		//timer
	}
	else {
	finalScreen();
	
	}
}

function runTimer(){
	intervalId = setInterval(decrementTimer, 1000);

	function decrementTimer(){

		if (counter ===0){
			clearInterval(intervalId);
			lossDueToTimeOut();
		}
		if (counter > 0){
		counter--;
		$(".timer").html(counter);

		}
	}

}


function finalScreen(){
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You got through the trivia! See your results below!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + numAnswerCorrect + "</p>" + "<p>Wrong Answers: " + numAnswerWrong + "</p>" + "<p>Unanswered: " + unansweredQuestion + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Trivia!</a></p>";
	$(".mainArea").html(triviaHTML);
}







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

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;




function displayCurrentQuestion(){


$("#question").html("<h2>"+questions[0].question+"</h2>");
$("#choices").html("<h2>"+questions[0].choice+"</h2>");


}


displayCurrentQuestion();

});




//yzma

//https://68.media.tumblr.com/9cca987c45baf7a3f9bfdc75c045e2a5/tumblr_oj9lczZHQp1st0dt8o1_500.gif
//maleficent
//https://wereallmadinhere.files.wordpress.com/2012/10/260wtv7-jpg.gif

///ursula picture
//https://68.media.tumblr.com/ea27c6140ece2a7be399c753d7d1f00b/tumblr_inline_nfq90upz0i1t2hh7q.gif