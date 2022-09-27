// function stored inside a variable callled a function  epression.
function getSum(num1,num2){
    return num1 + num2;
}
console.log(getSum(2,3));//5

var findSum = function(num1, num2){
    return num1 + num2;
}
console.log(findSum(2,3));//5


let calculateArea = function(width,height){
    return area = width * height;
}
console.log(calculateArea(5,5))