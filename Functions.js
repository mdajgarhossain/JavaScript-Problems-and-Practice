//Hoisting

console.log(a);
var a = 1;
console.log(a);

// console.log(b);
let b = 2;
console.log(b);

// console.log(c);
const c = 3;
console.log(c);

//Hoisting with function::::::::::::::::

//Function Declaration
first();
function first() {
    console.log('First function!');
}

//Function Expression
// second();
// const second = function() {
//     console.log('Second function');
// }

//Nested Function Declaration
function third() {
    nested();
    function nested() {
        console.log('nested in the third function and this also a function declaration');
    }
    // nested();

}

third();

console.log('arguments object:::::::::::::');


//arguments object:::::::::::::
function test1(a, b) {
    console.log(arguments);
}

test1(1, 2, 3, 4, 5);

function sum() {
    let total = 0;
    for(let value of arguments) {
        total += value;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));

console.log('Rest Operator::::::::::::::::');

//Rest Operator::::::::::::::::
function sum2(...args) {
    console.log(args);
}

sum2();

function sum3(...args) {
    console.log(args);
}

sum3(1, 2, 3, 4, 5);

function sum4(...args) {
    const sum= args.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    return sum;
}
console.log(sum4(1, 2, 3, 4, 5));

//more concise
function sum5(...args) {
    return args.reduce((accumulator, currentValue) => accumulator + currentValue);
}
console.log(sum5(1, 2, 3, 4, 5));

function shoppingCartDiscount(discount, ...prices) {
    const total = prices.reduce((sum, value) => sum + value);
    const discountValue = total * discount;
    const priceAfterDiscount = total - discountValue;
    return priceAfterDiscount;
}

console.log(shoppingCartDiscount(0.1, 20, 30));
console.log(shoppingCartDiscount(0.1, 50, 50));

//more concise
function shoppingCartDiscount2(discount, ...prices) {
    const total = prices.reduce((sum, value) => sum + value);
    return total * (1 - discount);
}

console.log(shoppingCartDiscount2(0.1, 20, 30));

console.log('Default Parameters:::::::::::::::::::::');

//Default Parameters:::::::::::::::::::::
function interest(principal, rate, years) {
    return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5));

//with defaults
function interest2(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;

    return principal * rate / 100 * years;
}

console.log(interest2(10000));

//more concise and cleaner way in ES6
function interest3(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest3(10000));

console.log('Getters and Setters::::::::::::::::::');

//Getters and Setters::::::::::::::::::

const person = {
    firstName: 'Ajgar',
    lastName: 'Hossain'
};

console.log(`${person.firstName} ${person.lastName}`);

const person2 = {
    firstName: 'Ajgar',
    lastName: 'Hossain',
    fullName() {
        return `${person2.firstName} ${person2.lastName}`;
    }
};

console.log(person2.fullName());

//getters => access properties
//setters => change or mutate them

const person3 = {
    firstName: 'Ajgar',
    lastName: 'Hossain',
    get fullName() {
        return `${person3.firstName} ${person3.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person3.fullName = 'Mohammad Hasan';

console.log(person3);

console.log('Try and Catch : Error Handling:::::::::::::::');

//Try and Catch : Error Handling::::::::::::::::

const person4 = {
    firstName: 'Ajgar',
    lastName: 'Hossain',
    get fullName() {
        return `${person4.firstName} ${person4.lastName}`;
    },
    set fullName(value) {
        if(typeof value !== 'string') {
            throw new Error('Value in not a string!');
        }
        const parts = value.split(' ');
        if(parts.length !== 2) {
            throw new Error('Enter a first and last name')
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// person4.fullName = 'Mohammad Hasan';

try {
    // person4.fullName = null;
    // person4.fullName = '';
    person4.fullName = 'Mohammad Hasan';
}
catch(e) {
    alert(e);
}

console.log(person4);

console.log('Local vs. Global Scope::::::::::::::');

//Local vs. Global Scope::::::::::::::
const color = 'green'; //global variable

function start() {
    //local function scope
    const message = 'Hello'; //local variable
    console.log(message);

    const color = 'blue';
    console.log(color);
    
}
start();
// console.log(message);

function stop() {
    const message = 'bye';
    console.log(message);
}
stop();
// console.log(message);

console.log('Let vs. Var::::::::::::::::::::');

//Let vs. Var::::::::::::::::::::
function testing() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }
}
testing();

function testing2() {
    for(var i = 0; i < 5; i++) {
        console.log(i);
        if(true) {
            let paint = 'red';
        }
    }
    console.log(i);
    // console.log(paint);
}
testing2();

console.log(`The 'this' keyword and changing value of 'this:::::::::::::::::::::`);

// The 'this' keyword and changing value of 'this:::::::::::::::::::::

// const video = {
//     title: 'tuts',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag) {
//             console.log(this.title, tag);
//         }, this);
//     }
// };

// video.showTags();

// const video = {
//     title: 'tuts',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         const self = this;
//         this.tags.forEach(function(tag) {
//             console.log(self.title, tag);
//         });
//     }
// };

// video.showTags();

const video = {
    title: 'tuts',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach((tag) => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();