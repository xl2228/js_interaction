var titleName;
var name;
var titleQuestion;
var executeButton;
var answer;
var inputQuestion;
var inputName;
var box;

var book = [
  "COLLABORATION WILL BE THE KEY",
  "THE OUTCOME WIL BE POSITIVE",
  "DON'T WASTE YOUR TIME",
  "ABSOLUTELY NOT",
  "YOU MAY HAVE TO DROP OTHER THINGS",
  "WAIT FOR A BETTER OFFER",
  "THAT'S OUT OF YOUR CONTROL",
  "UNQUESTIONABLY",
  "LAUGH ABOUT IT",
  "PAY ATTENTION TO THE DETAILS",
  "YOU'LL NEED MORE INFORMATION",
  "NOT IF YOU'RE ALONE",
  "IT SEEMS ASSURED",
  "YOU MAY HAVE OPPOSITION",
  "YOU'LL NEED TO TAKE THE INITIATIVE"
];


window.addEventListener('DOMContentLoaded', function(){
  titleName = document.getElementById('name');
  inputName = document.getElementById('userName');
  box = document.getElementById('output')
  titleQuestion = document.getElementById('question');
  executeButton = document.getElementById('executeButton');
  answer = document.getElementById('answerOutput');
  inputQuestion = document.getElementById('userInput');

  executeButton.addEventListener("click", generateAnswer);
}
);


function generateAnswer(){
  var currentlyInputName = inputName.value;
  var currentlyInputWord = inputQuestion.value;
  var randomAnswer = Math.floor(Math.random() * book.length);

  answer.innerHTML =
  "<span style = 'color: #4A3DE0; font-weight:bold; font-size: 1.21em'>Hi " + currentlyInputName +
  "!</span> <br> <br> Here is the answer <br> to your question about <span style='font-size: 1.21em; font-weight:bold; text-decoration: underline'>"
  + currentlyInputWord +
  "</span> : <br> <br> <span style = 'color: #FA5B16; font-weight: bold; font-size: 1.21em'>"
  + book[randomAnswer] + "</span>";

  titleName.classList.toggle("styleOne");
  titleQuestion.classList.toggle("styleTwo");

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  var outputColor = "rgb(" + r + "," + g + "," + b + ")";
  var putoutColor = "rgb(" + g + "," + r + "," + b + ")";
  var boxColor = "rgb(" + g + "," + g + "," + r + ")";

  titleName.style.color = outputColor;
  titleQuestion.style.color = putoutColor;
  output.style.background = boxColor;

  titleName.style.transform = "scale(1.3,1.3)";
  titleQuestion.style.transform = "scale(1.3,1.3)";
  titleName.style.transition = ".5s all";
  titleQuestion.style.transition = ".5s all";
  output.style.transition = ".5s all";
};
