//Problem-18: Array From Range

//own solution: in my solution you can input any of the two numbers and output will return the range from minimum to maximum
function arrayFromRange1(min, max) {
    let array = [];
    if(min < max) {
        for(let i = min; i <= max; i++) {
            array.push(i);
        }
    }
    else {
        for(let i = max; i <= min; i++) {
            array.push(i);
        }
    }
    return array;
}

const numbers = arrayFromRange1(-4, -10);
console.log(numbers);

//Solution:::
function arrayFromRange(min, max) {
    const output = [];
    for(let i = min; i <= max; i++) {
        output.push(i);
    }
    return output;
}

const nums = arrayFromRange(1, 7);
console.log(nums);

