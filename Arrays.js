//Arrays in depth: all about Arrays

/***Adding Elements:::::: */

const numbers = [3, 4];

//END
numbers.push(5, 6);
console.log(numbers);

//Begining
numbers.unshift(1, 2);
console.log(numbers);

//Middle
numbers.splice(3, 0, 'a', 'b');
console.log(numbers);

console.log('Finding Elements in a array:::::::::::');

/***Finding Elements(Primitives) in a array::::::::::: */

const number = [1, 2, 3, 1,  4];

console.log(number.indexOf('a'));
console.log(number.indexOf(2));

console.log(number.lastIndexOf(1));

console.log(number.indexOf(3)!== -1);
console.log(number.includes(3));

console.log(number.indexOf(1, 2));


/***Finding Elements(Reference type) in a array::::::::::: */
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

const course = courses.find(function(course) {
    return course.name === 'a';
});
console.log(course);

const course2 = courses.findIndex(function(course) {
    return course.name === 'b';
});
console.log(course2);

//Using Arrow function in the above example
const course3 = courses.find(course => course.name === 'a');
console.log(course3);

console.log('Removing elements from an array:::::::::::');


/***Removing elements from an array:::::::::::*/

const digits = [1, 2, 3, 4];

//END
const last = digits.pop();
console.log(digits);
console.log(last);

//Beginning
const first = digits.shift();
console.log(digits);
console.log(first);

//Middle
const digit = [1, 2, 3, 4];

const middle = digit.splice(2, 2);
console.log(digit);
console.log(middle);

console.log('Emptying an Array::::::::::::::::');

//Emptying an Array::::::::::::::::
let myArray = [1, 2, 3, 4];

//solution 1
// myArray = [];
// console.log(myArray);

//solution 2
let another = myArray;

myArray.length = 0;

//solution 3
myArray.splice(0, myArray.length);

console.log(myArray);
console.log(another);

console.log('Combining and Slicing Arrays:::::::::::');

//Combining and Slicing Arrays:::::::::::

const firstt = [1, 2, 3];
const second = [4, 5, 6];

const combined = firstt.concat(second);
console.log(combined);

// const slice = combined.slice(2, 4);
const slice = combined.slice(1, 5);
console.log(slice);

const slice2 = combined.slice(3);
console.log(slice2);

const slice3 = combined.slice();
console.log(slice3);

console.log('Spread operator::::::::::::::::::');

//Spread operator::::::::::::::::::

/*To cobine an array */
const myArray1 = [1, 2, 3];
const myArray2 = [4, 5, 6];

const combinedMyArray = [...myArray1, ...myArray2];
console.log(combinedMyArray);

/*To copy the array */
const copy = [...combinedMyArray];
console.log(copy);

console.log('Iterating an Array:::::::::::::::::');

//Iterating an Array:::::::::::::::::
const array = [1, 2, 3];

//1st approach
for(let element of array) {
    console.log(element);
}

//2nd approach
// array.forEach(function(element) {
//     console.log(element);
// });

array.forEach(element => console.log(element));

console.log('Joining Arrays:::::::::::::::::::');

//Joining Arrays:::::::::::::::::::
const one = [1, 2, 3];

const joined = one.join(',');
console.log(joined);
const joined2 = one.join(' and ');
console.log(joined2);

const message = 'This is me';
const parts = message.split(' ');
console.log(parts);

const together = parts.join('-');
console.log(together);

console.log('Sorting Arrays::::::::::::::::::::');

//Sorting Arrays::::::::::::::::::::
const unsorted = [2, 3, 1];
unsorted.sort();
console.log(unsorted);

unsorted.reverse();
console.log(unsorted);


/*sorting objects in an array */
const objArray = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'JavaScript'}
];

objArray.sort(function(a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});

console.log(objArray);

console.log('Testing the elements of an Array:::::::::::::');


//Testing the elements of an Array:::::::::::::

//every() method
const testArray = [1, 2, 3];

const allPositive = testArray.every(function(value) {
    return value >= 0;
});

console.log(allPositive);

const testArray2 = [1, -1, 2, 3];

const allPositive2 = testArray2.every(function(value) {
    return value >= 0;
});

console.log(allPositive2);

//some() method
const testArray3 = [1, -2, 3];

const atLeastOnePositve = testArray3.some(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositve);

const testArray4 = [-1, -2, -3];

const atLeastOnePositve2 = testArray4.some(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositve2);

console.log('Filtering an Array::::::::::::::::::');

//Filtering an Array:::::::::::::::::::::

const firstArray = [1, -1, 2, 3,-5, 7];

const filtered = firstArray.filter(function(value) {
    return value >= 0;
})

console.log(filtered);

/*we shuld use arrow function */
const firstArray2 = [1, -1, -5, 7];

const filtered2 = firstArray2.filter(value => value >= 0);

console.log(filtered2);

console.log('Mapping an Array::::::::::::::::');

//Mapping an Array::::::::::::::::

const forMap = [1, 2, 3];

const items = forMap.map(function(value) {
    return '<li>' + value + '</li>';
});

const html = '<ul>' + items.join('') + '</ul>';

console.log(html);

/*map the element into the object*/
const forMap2 = [1, 2, 3];

const items2 = forMap2.map(function(value) {
    // const obj = {key: value};
    // return obj;
    return {key: value};
});

console.log(items2);

console.log('Reducing an Array:::::::::::::::::::::');

//Reducing an Array:::::::::::::::::::::
const prices = [1, 2, 3];

let sum = 0;
for(let price of prices) {
    sum += price;
}
console.log(sum);

/*same code with reduce() method */
const prices2 = [1, 2, 3];

const sum2 = prices2.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum2);

/*if we don't set accumulator to 0, the first element in the array wiil be used to
initial value of accumulator*/
const sum3 = prices2.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(sum2);
