const mainCalc = document.querySelector('.main-calc');
const result = document.querySelector(".input-num");
const numberButton = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
let numberClicked = false;
let tempContainerVal = "";
let currentOperator = "";
let initialInput = "";
let output = 0;
let equalOperatorClicked = false;

mainCalc.addEventListener('click', function(event) {
    for(let i = 0; i < numberButton.length; i++) {
        if(numberButton[i] === event.target){
            if(numberClicked === false){ /* If first/ones digit is clicked */
                if(event.target.innerText === '.') result.value = '0' + event.target.innerText;
                else result.value = event.target.innerText;
                tempContainerVal = result.value;
                numberClicked = true;
            }else{ /* second/tens/more digits clicked */
                result.value = tempContainerVal + event.target.innerText;
                tempContainerVal = result.value;
            }
        }
    }
    for(let i = 0; i < operator.length; i++){
        if(operator[i] === event.target){
            if(event.target.innerText === 'C'){
                initialInput === "";
                tempContainerVal = "";
                result.value = "";
                currentOperator = "";
                equalOperatorClicked = false;
                numberClicked = false;
            } else if (event.target.innerText === '←') {
                tempContainerVal = tempContainerVal.slice(0,-1);
                result.value = tempContainerVal;
            }else {
                if (numberClicked === true){ /* if theres a previous input number or operand */
                    numberClicked = false; /* resets operand for additional input/operands */
                    if (initialInput === ""){
                        initialInput = tempContainerVal; /* first operand will be stored in initialInput when an operator is clicked */
                    }else{
                        if (currentOperator === '+') output = parseFloat(initialInput) + parseFloat(tempContainerVal);
                        else if (currentOperator === '−') output = parseFloat(initialInput) - parseFloat(tempContainerVal);
                        else if (currentOperator === '×') output = parseFloat(initialInput) * parseFloat(tempContainerVal);
                        else if (currentOperator === '÷') output = parseFloat(initialInput) / parseFloat(tempContainerVal);
                        else alert ("ERROR!!!");
                        result.value = output;
                        initialInput = result.value;
                    }   
                    if(event.target.innerText === '=') equalOperatorClicked = true;
                    else currentOperator = event.target.innerText;
                    tempContainerVal = ""; 
                } else {
                    if(equalOperatorClicked === true){
                        currentOperator = event.target.innerText;
                        equalOperatorClicked = false;
                    } else alert("ERROR!!!");
                }

            }
        }
    }
});
