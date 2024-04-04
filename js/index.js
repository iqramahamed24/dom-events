//attaching event listeners
//document.addEventListener (DOMcontentloaded)
//document.addEventListener("DOMContentLoaded",function () {
console.log("the dom has finished loading");

const submitButton = document.querySelector("#submit");

let count = 0;

submitButton.addEventListener("click", () => {
  //A.P.I -> Application programming interface
  let input = prompt("Enter your Score");

  input = Number(input);

  //

  const gradeOutput = document.querySelector('#grade-output')

  if (input >50) {
    gradeOutput.innerText = 'Your score is A'
    gradeOutput.computedStyleMap.color = '#54'
  }else {
    gradeOutput.innerText = 'Your score is 8'
  }

});
