// Global Variables
var homePageDiv = document.getElementById("home")
var quizPageDiv = document.getElementById("quiz-page")
var postGameDiv = document.getElementById("postGame")
var startButton = document.getElementById("startBtn")
var highScoreButton = document.getElementById("hsBtn")
var quizTimer = document.getElementById("timer")

var quizQuestions = [{
    question: "Which character always ends a statement?",
    choices: [",", ".", "}", ";"],
    correctAnswer: ";"},
 {
    question: "Which character always ends a statement?",
    choiceA: ",",
    choiceB: ".",
    choiceC: "}",
    choiceD: ";",
    correctAnswer: "d"},
{
    question: "Which character always ends a statement?",
    choiceA: ",",
    choiceB: ".",
    choiceC: "}",
    choiceD: ";",
    correctAnswer: "d"},
{
    question: "Which character always ends a statement?",
    choiceA: ",",
    choiceB: ".",
    choiceC: "}",
    choiceD: ";",
    correctAnswer: "d"},
{
    question: "Which character always ends a statement?",
    choiceA: ",",
    choiceB: ".",
    choiceC: "}",
    choiceD: ";",
    correctAnswer: "d"},
{
    question: "Which character always ends a statement?",
    choiceA: ",",
    choiceB: ".",
    choiceC: "}",
    choiceD: ";",
    correctAnswer: "d"},
{
    question: "Which character always ends a statement?",
    choiceA: ",",
    choiceB: ".",
    choiceC: "}",
    choiceD: ";",
    correctAnswer: "d"},
{
    question: "Which character always ends a statement?",
    choiceA: ",",
    choiceB: ".",
    choiceC: "}",
    choiceD: ";",
    correctAnswer: "d"},
{
    question: "Which character always ends a statement?",
    choiceA: ",",
    choiceB: ".",
    choiceC: "}",
    choiceD: ";",
    correctAnswer: "d"},
{
    question: "Which character always ends a statement?",
    choiceA: ",",
    choiceB: ".",
    choiceC: "}",
    choiceD: ";",
    correctAnswer: "d"}
]

startButton.addEventListener('click', function () {
    document.getElementById("home").setAttribute("class","hide");
    document.getElementById("quiz-page").removeAttribute("class");
    buildQuestion();
})

function buildQuestion () {
// put question text in div
// set answered buttons
    document.getElementById("text").textContent= quizQuestions[0].question;
    quizQuestions[0].choices.forEach(function(choice,i){
        var Button = document.createElement("button")
        Button.textContent = i + " " + choice;
        Button.setAttribute("value", choice);
        Button.addEventListener("click", function(){
            console.log(this)
        })
        document.querySelector(".choice-container").appendChild(Button)
    })

}
