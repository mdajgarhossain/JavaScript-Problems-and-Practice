//Problem-7: Count Truthy

/*
Create a function that gets an array and
returns the number of truthy values in this array
*/

function countTruthy(array) {
    let newArray = [];
    for(let value of array) {
        if(value !== undefined && value!== null && value !== 0 && value !=='' && value !== false && value !== NaN) {
            newArray.push(value);
        }
    }
    return newArray.length;
}

console.log(countTruthy([null, undefined, 7, 3, 4, 5, 0, 'Jewel']));

//more concise
function countTruthyValue(array) {
    let count = 0;
    for(let value of array)  {
        if(value) {
            count++;
        }
    }
    return count;
}

console.log(countTruthyValue([1, 2, 3, 0, false, true]));