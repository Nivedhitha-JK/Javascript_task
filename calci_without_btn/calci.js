

const button = document.querySelector('button');
// add event listener

button.addEventListener('click', calculate);


function calculate() {
    let inputVal = document.getElementById('input').value;
    console.log(inputVal);
    console.log(typeof(inputVal)); //string

    let operator, operand1, operand2, result;

splitInput = inputVal.split(/[+\-*/]/);
console.log(splitInput)
console.log(typeof(splitInput)); // object

//match return array so, we want to access the first match use [0]
operator = inputVal.match(/[+\-*/]/)[0];
console.log(operator);
operand1 = parseFloat(splitInput[0]);
operand2 = parseFloat(splitInput[1]);
console.log(operand1);
console.log(operand2);

// parseFloat - converting strings into floating point numbers
   


    switch(operator){
    case '+':
        result = operand1 + operand2;
        console.log(result.toFixed(2));
        break;
    case '-':
        result = operand1 - operand2;
        console.log(result.toFixed(2));
        break;
    case '*':
        result = operand1 * operand2;
        console.log(result.toFixed(2));
        break;
    case '/':
        result = operand1 / operand2;
        console.log(result.toFixed(2));
        console.log(typeof(result));
        break;  
    }
    console.log(result);
    
    let resultDiv = document.createElement('div');
    resultDiv.id = 'result1';
    document.getElementById('wrapper').appendChild(resultDiv);
    document.getElementById('result1').innerHTML = ` Result = ${result.toFixed(2)}`;
}