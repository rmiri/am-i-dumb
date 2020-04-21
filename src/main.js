'use strict';
const answerDiv = document.getElementById('answer-div');

function answer(answer) {
  
  setTimeout(() => {
    answerDiv.innerHTML = `<p>${answer}</p>`;
  }, 1000);
  
}

function buttonClick() {
  const loaderDiv = document.getElementById('loader-div');
  const div = document.createElement('div');

  div.setAttribute("id", "loader");
  loaderDiv.append(div);

  const answers = ['yes','no','sometimes', 'you were that time'];

  let item = answers[Math.floor(Math.random() * answers.length)];
  
  console.log(item)
  setTimeout(() => {
   div.remove();
  }, 999);

  answer(item);
  
}

document.getElementById('dumb-button').addEventListener("click", buttonClick)

function dotHover(element) {
  element.setAttribute("class", "dotHover");
}
