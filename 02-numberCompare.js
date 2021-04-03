var num1 = 7;
var num2 = 4;

alert(numberCompare(num1, num2));

function numberCompare(num1, num2){
    if (num1 == num2){
        return "these numbers are equal";
    }

    else if (num1 < num2) {
        return "the second number is greater than the first";
    }

    else {
        return "the first number is greater than the second";
    }

}