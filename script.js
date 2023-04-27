$(document).ready(function () {
  $("#about").click(function () {
    $("#panel").slideToggle("slow");
  });
});

const buttons = document.querySelectorAll(".genre button"); //list of all buttons
let selectedButtonIndex = -1; //start at nothing which is -1, 0 is first index
const displayQuestion = document.querySelector(".questions");
const displayAnswer = document.querySelector(".answer");
const userInput = document.querySelector("#userInput");
const verify = document.querySelector("#btn");
//loop through buttons and contents
//displaying clicked function

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.onclick = async () => {
    selectGenre(i);
    var questionData = await search(button.innerText);
    console.log(questionData)
    displayQuestion.innerText = questionData.results[0].question;
    var answerData = await search(button.innerText);
    displayAnswer.innerText = answerData.results[0].correct_answer;
    answer.style.display = "block"; 
  
  }; //when a button is click, selcect genre
}

//function to toggle the genre being clicked.
function selectGenre(i) {
  //check to see if there is selection selected
  if (selectedButtonIndex > -1) {
    //if yes, toggle off
    buttons[selectedButtonIndex].classList.toggle("selected");
  }
  //select a new button
  selectedButtonIndex = i;
  buttons[selectedButtonIndex].classList.toggle("selected");
}

//Searching for questions

async function search(category) {
  var response = await fetch(
    `https://opentdb.com/api.php?amount=1&category=${categoriesMap[category]}&difficulty=easy&type=boolean`
  );
  var questionData = await response.json();

  return questionData;
}

search();

//mapping categories
//read key value

var categoriesMap = {
  "General Knowledge": 9,
  "Mythology": 20,
  "Entertainment: Books" : 10,
  "Entertainment: Movies" : 11,
  "Celebrities" : 26,
  "Entertainment: Music" : 12,
  "Video Games" : 15,
  "Animals" : 27,
  "Sports" : 21,
};


//comparing userinput with key answers 
// var 
// function submit () {
//   if('true' == questionData.results[0].correct_answer || 'True' == questionData.results[0].correct_answer) {
//     verify.getElementById("btn").style.backgroundColor = 'green';
//   } else {
//     verify.getElementById("btn").style.backgroundColor = 'red';
//   }
// }
// submit ()


//Changing innertext on account and login for fun. No site to store saved value yet

function account() {
  document.querySelector("#login").innerText = "Logout";
  document.querySelector("#account").innerText = "Welcome Back!";
}

function createAccount() {
  document.querySelector("#account").innerText = "Thank you!";
}
