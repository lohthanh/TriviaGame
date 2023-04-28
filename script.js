$(document).ready(function () {
  $("#about").click(function () {
    $("#panel").slideToggle("slow");
  });
});

const buttons = document.querySelectorAll(".genre button"); //list of all buttons
let selectedButtonIndex = -1; //start at nothing which is -1, 0 is first index
const displayQuestion = document.querySelector(".questions");
const displayAnswer = document.querySelector("#triviaAnswer");
const answer = document.querySelector(".answer");
const btn = document.querySelector("#btn");
const score = document.querySelector("#score");

//loop through buttons and contents
//displaying clicked function
//when a button is click, selcect genre

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.onclick = async () => {
    selectGenre(i);
    var questionData = await search(button.innerText);
    console.log(questionData);
    displayQuestion.innerText = questionData.results[0].question;
    var answerData = await search(button.innerText);
    displayAnswer.innerText = answerData.results[0].correct_answer;

    answer.style.display = "block";
    score.style.display = "block";

    $(".radioBtn").prop("checked", false);
  };
}

//comparing userinput with key answers

// var count = 0;
// function submit() {
//   // count += 25;
//   // score.innerText = "Score: " + count;
//   if (selectedRadioBtn == answerData.results[0].correct_answer) {
//     count += 25;
//   score.innerText = "Score: " + count;
//   }
// }

//displaying correct answer after hitting submit
btn.onclick = function () {
  displayAnswer.classList.add("fadeIn");
};

//need to check which radio button is checked

var selectedRadioBtn = document.querySelector('input[name="choices"]:checked');
console.log(selectedRadioBtn);

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
  Mythology: 20,
  "Entertainment: Books": 10,
  "Entertainment: Movies": 11,
  Celebrities: 26,
  "Entertainment: Music": 12,
  "Video Games": 15,
  Animals: 27,
  Sports: 21,
};

//Changing innertext on account and login for fun. No site to store saved value yet

function account() {
  document.querySelector("#login").innerText = "Logout";
  document.querySelector("#account").innerText = "Welcome Back!";
}

function createAccount() {
  document.querySelector("#account").innerText = "Thank you!";
}
