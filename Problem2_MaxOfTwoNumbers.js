//Problem-2: write a function that takes two numbers and returns the maximum of two

function maxOfTwo(x, y) {
    if(x > y) {
        console.log(x);
    } else {
        console.log(y);
    }
}
maxOfTwo(4, 4);

//more cleaner
function max(a, b) {
    if(a > b) {
        return a;
    } else {
        return b;
    }
}

let number = max(8, 8);
console.log(number);

//more cleaner
function maxNumber(a, b) {
    return (a > b) ? a : b;
}

let maxNum = maxNumber(9, 5);
console.log(maxNum);
