let calculator = {
    addition(firstNum, secondNum) {
        return firstNum + secondNum;
    },
    subtraction(firstNum, secondNum) {
        return firstNum - secondNum;
    },
    multiplication(firstNum, secondNum) {
        return firstNum * secondNum;
    },
    division(firstNum, secondNum) {
        if(secondNum == 0){
            return "Enter other than 0 in Second value";
        }
        return firstNum / secondNum;
    }
}

let input = prompt("Enter the input (add -> addition, sub -> subtraction, mul -> multiplication, div -> division,  clear -> clear)");

let firstNum = parseFloat(prompt("Enter the first Number"));
let secondNum = parseFloat(prompt("Enter the second Number"));

switch(input) {
    case 'add':
        console.log(calculator.addition(firstNum, secondNum));
        break;
    
    case 'sub':
        console.log(calculator.subtraction(firstNum, secondNum));
        break;

    case 'mul':
        console.log(calculator.multiplication(firstNum, secondNum));
        break;
    
    case 'div':
        console.log(calculator.division(firstNum, secondNum));
        break;

    default:
        console.log("Enter the correct value");
        break;
}