//Problem-20: Except Or Exclude Elements from an Array

function except(array, excluded) {
    const output = [];
    for(let element of array) {
        if(!excluded.includes(element)) {
            output.push(element);
        }
    }
    return output;
}

const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [1, 2]);
console.log(output);