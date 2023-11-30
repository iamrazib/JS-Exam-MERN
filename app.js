
console.log('1. Return the Sum of Two Numbers::  ');
console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));

function addition(num1, num2) {
    return num1 + num2;
}   


console.log('2. Convert Minutes into Seconds');
console.log(convert(5));
console.log(convert(3));
console.log(convert(2));

function convert(num1) {
    return num1 *60;
}   


console.log('3. Return the Next Number from the Integer Passed');
console.log(NextNumber(0));
console.log(NextNumber(9));
console.log(NextNumber(-3));

function NextNumber(num1) {
    return num1 + 1;
}   


console.log('4. Area of a Triangle');
console.log(triArea(3, 2));
console.log(triArea(7, 4));
console.log(triArea(10, 10));

function triArea(base, height) {
    return (1 / 2) * base * height;
}  


console.log('5. Return the First Element in an Array');

function getFirstValue(myArray) { 
    return myArray[0];
}
 
console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));

console.log('6. Convert Age to Days');

function calcAge(ageInYears) {
    return ageInYears * 365;
}

console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));


console.log('7. Power Calculator');

function circuitPower(voltage, current) {
    return voltage * current;
}
console.log(circuitPower(230, 10));
console.log(circuitPower(110, 3));
console.log(circuitPower(480, 20));


console.log('8. Maximum Edge of a Triangle');

function nextEdge(side1, side2) {
    return side1 + side2 - 1;
}

console.log(nextEdge(8, 10));
console.log(nextEdge(5, 7));
console.log(nextEdge(9, 2));


console.log('9. Return the Remainder from Two Numbers');

function remainder(num1, num2) {
    return num1 % num2;
}

console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));


console.log('10. Return Something to Me');

function giveMeSomething(arg) {
    const str = "something ";
    const result = str.concat(arg);
    return result;
}

console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));


console.log('11. Correct the Mistakes');

function squared(num1) {
    return num1 ** 2;
}
console.log(squared(5));
console.log(squared(9));
console.log(squared(100));


console.log('12. Is the Number Less than or Equal to Zero?');

function lessThanOrEqualToZero(num) {
    return num <= 0;
}

console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));


console.log('13. Sum of Polygon Angles');

function sumPolygon(side) {
    return (side - 2) * 180;
}

console.log(sumPolygon(3));
console.log(sumPolygon(4));
console.log(sumPolygon(6));

console.log('14. Basic Variable Assignment');

function nameString(name) {
    const result = name.concat('Coder');
    return result;
}

console.log(nameString("Mubashir"));
console.log(nameString("Matt"));
console.log(nameString("javaScript"));


console.log('15. Less Than 100');

function lessThan100(num1, num2) {
    return (num1 + num2) < 100;
}

console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));