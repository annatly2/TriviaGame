$(document).ready(function(){

var firstScreen;
var counter = 5;
var intervalId;

var triviaHTML;
var numAnswerCorrect = 0;
var numAnswerWrong = 0;
var unansweredQuestion = 0;
var questionCounter = 0;
var userAnswer;

var questions =[{
	question: "In The Little Mermaid, when Ursula transformed herself into a bride for Prince Eric, what did she call herself?",
	choice: ["Veronica", "Vanessa", "Victoria", "Vivian"],
	correctAnswer: 1,
	img: "<img class='center-block' src= 'https://68.media.tumblr.com/ea27c6140ece2a7be399c753d7d1f00b/tumblr_inline_nfq90upz0i1t2hh7q.gif'>"
},{
	question: "At the end of The Emperor's New Groove, what animal does Yzma turn into?",
	choice: ["Cat", "Dog", "Cow", "Llama"],
	correctAnswer: 0,
	img: "<img class = 'center-block' src= 'https://68.media.tumblr.com/9cca987c45baf7a3f9bfdc75c045e2a5/tumblr_oj9lczZHQp1st0dt8o1_500.gif'>"
}, {
	question: "What is Maleficent's crow called?", 
	choice: ["Raven", "Lucifer", "Diablo", "Rook"],
	correctAnswer: 2,
	img: "<img class = 'center-block' src= 'https://wereallmadinhere.files.wordpress.com/2012/10/260wtv7-jpg.gif'>"
}];

function startScreen(){
	firstScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start The Trivia Game</a></p>";
	$(".mainArea").html(firstScreen);
}

startScreen();

$("body").on("click", ".start-button", function (event){
	generateHTML();
	runTimer();
});

$("body").on("click", ".answer", function(event){
	userAnswer = $(this).text();
	if(userAnswer === questions[questionCounter].choice[questions[questionCounter].correctAnswer]){
		clearInterval(intervalId);
		updateWin();
	}
	else{
		clearInterval(intervalId);
		updateLoss();
	}

});

function generateHTML(){
	triviaHTML= "<p class='text-center timer-p'>Time Remaining: <span class='timer'>5</span></p><p class='text-center'>" + questions[questionCounter].question + "</p><p class='first-answer answer'>" + questions[questionCounter].choice[0] + "</p><p class='answer'>"+questions[questionCounter].choice[1]+"</p><p class='answer'>"+questions[questionCounter].choice[2]+"</p><p class='answer'>"+questions[questionCounter].choice[3]+"</p>";
	$(".mainArea").html(triviaHTML);
}

function lossDueToTimeOut(){
	unansweredQuestion++;
	triviaHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + questions[questionCounter].choice[questions[questionCounter].correctAnswer] + "</p>" + questions[questionCounter].img;
	$(".mainArea").html(triviaHTML);
	setTimeout(wait, 2000);
}

function updateWin(){
	numAnswerCorrect++;
	triviaHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You're correct! The answer is: " + questions[questionCounter].choice[questions[questionCounter].correctAnswer] + "</p>" + questions[questionCounter].img;
	$(".mainArea").html(triviaHTML);
	setTimeout(wait, 2000);
}

function updateLoss(){
	numAnswerWrong++;
	triviaHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You're wrong! The answer is: " + questions[questionCounter].choice[questions[questionCounter].correctAnswer] + "</p>" + questions[questionCounter].img;
	$(".mainArea").html(triviaHTML);
	setTimeout(wait, 2000);
}

function wait(){
	if(questionCounter < 2){
		questionCounter++;
		generateHTML();
		counter = 5;
		runTimer();
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
	triviaHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You got through the trivia! See your results below!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + numAnswerCorrect + "</p>" + "<p>Wrong Answers: " + numAnswerWrong + "</p>" + "<p>Unanswered: " + unansweredQuestion + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Trivia!</a></p>";
	$(".mainArea").html(triviaHTML);
}









});
