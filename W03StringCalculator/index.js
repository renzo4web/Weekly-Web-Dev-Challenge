const mainContainer = document.getElementById('main-container');
const equationField = document.getElementById('equation-field');
const solveButton = document.getElementById('solve-button');
const solutionDisplay = document.getElementById('solution-display');






solveButton.addEventListener('click', function () {
  // Clears the solution contents on each click
  solutionDisplay.innerHTML = ``;
  let inputValue = equationField.value;
  
  parseInput(inputValue);
});



function parseInput(inputValue) {

  let operation = htmlEntities(inputValue).split("")
  const equal = ["="]
  let result = [eval(htmlEntities(inputValue))];
  let displayOperation = operation.concat(equal,result)
  


// Create the components
displayOperation.forEach(element => {
  let equationComp = document.createElement('div');
  equationComp.classList.add('equation-component');
  equationComp.textContent = element;
  solutionDisplay.appendChild(equationComp);
});

  equationField.value = ""

  
}





function htmlEntities(str) {
  return String(str)
    .replace(/&/g, ' ')
    .replace(/</g, ' ')
    .replace(/>/g, ' ')
    .replace(/[A-Za-z]/g, ' ')
    .replace(/"/g, ' ');
}





