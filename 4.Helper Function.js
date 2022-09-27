//print factorial of all the odd numbers between 1-5
function factorial(num) {
    let fact = 1;
    while( num>0){
        fact = fact * num;
        num--;
    }
    return fact;
}

function checkIfOdd(num) {
    if(num%2 !==0){
       console.log(factorial(num));
    }
}
//factorial is  a 'helper function' for checkifodd function
checkIfOdd(5);//120