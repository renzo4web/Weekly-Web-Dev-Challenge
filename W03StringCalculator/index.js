const mainContainer = document.getElementById('main-container');
const equationField = document.getElementById('equation-field');
const solveButton = document.getElementById('solve-button');
const solutionDisplay = document.getElementById('solution-display');
const regexOperators = /(\+|-|\*|\/|=|>|<|>=|<=|&|\||%|!|\^|\(|\))/;

solveButton.addEventListener('click', function () {
  // Clears the solution contents on each click
  solutionDisplay.innerHTML = ``;
  let inputValue = equationField.value;
  // Write your code here 👇
  //parseInput(inputValue);

  calculator(parseInput(inputValue));
});

function parseInput(inputValue) {
  //let vals = Array.from(inputValue).filter((element) => element !== ' ');
  let vals = inputValue.split(regexOperators);
  console.log(vals);
  return vals;
}

function calculator(ArrayOfvalues) {
  let calc = [];

  // Parse Array
  for (let index = 0; index < ArrayOfvalues.length; index++) {
    //check is numeric
    if (parseInt(ArrayOfvalues[index])) {
      calc.push(parseInt(ArrayOfvalues[index]));
    } else {
      calc.push(ArrayOfvalues[index]);
    }
  }

  let g = 0;

  for (let index = 0; index < calc.length; index++) {
    if (calc[index] === '+') {
      g += calc[index - 1];
      //calc.splice(calc[index + 1]);
      //calc.splice([index], 1);
    } else if (calc[index] === '-') {
      calc[index - 1] - calc[index + 1];
      calc.splice([index], 1);
    } else if (calc[index] === '*') {
      calc[index - 1] * calc[index + 1];
      calc.splice([index], 1);
    } else if (calc[index] === '/') {
      calc[index - 1] / calc[index + 1];
      calc.splice([index], 1);
    }
  }

  console.log(g, calc);

  solutionDisplay.innerHTML = ``;
}

function operatorChecker(a, b) {
  if (index === '+') {
    return '' + '';
  } else if (index === '-') {
    return '' - '';
  } else if (index === '/') {
    return '' / '';
  } else if (index === '*') {
    return '' * '';
  }
}

/*
Part 1 (Calculation): 
    +Your first goal is to solve a simple text-based
        math problem entered in the input field
    +The problem can be add/sub/multiply/divide
    +Here are few examples: 
        "3 + 3" -> 6
        "10 - 3" -> 7
        "44 / 2" -> 22
        "2 * 8" -> 16 
    +When the 'Solve' button is clicked
        -Create a new div with the
            class 'equation-component'
            its text value should be the solution
            to the input equation
        -This element should be added as a child of 
            the `solutionDisplay` div

    Note: You can assume there will always only be 2 values, 
        both whole integers, and always a space between each 
        integer and the operator as in the above examples


Part 2 (Flex Display): 
    Then, you'll Flex your Flexbox skills!
    + Vertically stack the contents of the mainContainer
    + Center the content horizontally
    + Display all components of the equation 
        in the solutionDisplay using a horizontal Flexbox
        with `space around` each component
    
Skills: 
    Event Listeners, String Manipulation, Array Manipulation, 
Arithmetic, DOM Manipulation, Flexbox



STRETCH GOALS:
    +Accept and solve more complex problems with more than 2 inputs
    +Signal the different types of components (operator/value/solution) with different colors
    +Accept strings without spaces
    +Can you improve the overall design?
*/
