//All about objects in JavaScript

//Objects creation ::::::::::::::::::::::::::
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw');
//     },
//     move() {
//         console.log('move');
//     }
// };

// circle.draw();

//Factory Function: A pattern for creating an object
// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     }
// }

// const circle1 = createCircle(3);
// console.log(circle1);

// console.log(circle1.constructor); // constructor property

// const circle2 = createCircle(7);
// console.log(circle2);

//Constructor Function: Another pattern for creating an object
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle1 = new Circle(1);
// console.log(circle1);

// const circle2 = new Circle(2);
// console.log(circle2);

// console.log(circle2.constructor); // constructor property


//Dynamic nature of Objects:
// const person = {
//     name: 'Ajgar'
// };

// person.age = 25; //adding new property
// person.introduce = function() {
//     console.log('I am AJGAR');
// }

// delete person.age;

// console.log(person);


//Functions are Objects:::::::
// function flowers(name) {
//     return {
//         name,
//         fragrance() {
//             console.log('Scents are released when roses are ready to be pollinated!');
//         }
//     }
// }

// const rose = flowers('rose');
// console.log(rose);

// console.log(flowers.constructor);

// function Mobiles(brand, price) {
//     this.brand = brand;
//     this.price = price;
//     this.mainFeature = function() {
//         console.log('1.Incoming call, 2.Outgoing call');
//     }
// }

// const samsung = new Mobiles('Samsung', '$150');
// console.log(samsung);

// console.log(Mobiles.name);
// console.log(Mobiles.length);
// console.log(Mobiles.constructor);


//The 'this' keyword : The value of 'this' depends on how the function is called.

//'this' in constructor function :::
// function Cat(name) {
//     this.name = name;
//     this.sayName = function() {
//         console.log(`Meow! My name is ${this.name}`);
//     }
// }

// const bailey = new Cat('Bailey');
// console.log(bailey);

// bailey.sayName();

/*When is this Assigned?
A common misconception is that this refers to the object where it is defined. This is not the case! The value of this is actually not assigned to anything until an object calls the method where this is used. In other words, the value assigned to this is based on the object that invokes the method where this is defined.
*/

// const dog = {
//     bark: function() {
//         console.log('woof!');
//     },

//     barkTwice: function() {
//         this.bark();
//         this.bark();
//     }
// };

// dog.bark();
// dog.barkTwice();


//There are four ways to call functions, and each way sets this differently.

/*1.First, calling a constructor function with the new keyword sets this to a newly-created object.*/
function Course(name) {
    this.name = name;
    this.description = function() {
        console.log(`This is ${this.name} course`);
    }
}

const javascript = new Course('JavaScript');
console.log(javascript);
javascript.description();


/*2.Second, calling a function that belongs to an object (i.e., a method) sets this to
the object itself.*/
const city = {
    name: 'Dhaka',
    intro: function() {
        console.log(`${this.name} is the capital of Bangladesh`);
    }
};

city.intro();

/*3.Third, calling a function on its own (i.e., simply invoking a regular function)
will set this to window, which is the global object if the host environment is the
browser.*/
function regularFunction() {
    return this;
}
console.log(regularFunction());

/*4.The fourth way to call functions allows us to set this ourselves! JavaScript
offers a few methods that can do just that! There are yet two more ways to invoke a
function: either using the call() or the apply() methods.*/

//4.1 call(): call() is a method directly invoked onto a function.
function multiply(x, y) {
    return x * y;
}

console.log(multiply(3, 4));

console.log(multiply.call(window, 3, 4)); //For the first argument of the call() method, we pass in the value to be set as this, which is window.


/* Using call() to invoke a method allows us to "borrow" a method from one object --
then use it for another object! */
const react = {
    title: 'RectJS',
    intro: function() {
        console.log(`${this.title} is used for front-end development`);
    }
};
react.intro();

const html = {
    title: 'HTML'
};
react.intro.call(html);


/*4.2 apply(): Just like call(), the apply() method is called on a function to not only invoke that function, but also to associate with it a specific value of this.*/
function division(x, y) {
    return x / y;
}

console.log(division(10, 5));
console.log(division.call(window, 10, 5));
console.log(division.apply(window, [10, 5]));

//Now what about invoking an object's method with apply()?
const book = {
    title: 'Search for peace',
    describe: function() {
        console.log(`'${this.title}' is the best book`);
    }
};

book.describe();

const book2 = {
    title: 'Namazer Modhurota'
};

book.describe.call(book2);
book.describe.apply(book2);

/*Both approaches produce the same result. call() may be limited if you don't know
ahead of time the number of arguments that the function needs. In this case, apply()
would be a better option, since it simply takes an array of arguments, then unpacks
them to pass along to the function.*/

// call and apply all in action
const fruit = {
    name: 'Mango'
};

function describe(message) {
    console.log(`${message} is ${this.name}!`);
}

describe.call(fruit, 'The King of fruits');
describe.apply(fruit, ['The tasty fruit']);

//Callbacks and 'this'::::::::::::::::
function invokeTwice(callback) {
    callback();
    callback();
}

const dog = {
    age: 5,
    growOneYear: function() {
        this.age += 1;
    }
};

console.log(dog.age);

// dog.growOneYear();
// console.log(dog.age);

// invokeTwice(dog.growOneYear);
// console.log(dog.age);

/*invokeTwice() does indeed invoke growOneYear -- but it is invoked as a function
rather than a method! if a function is simply invoked, this is set to the global
object: window. Because the value of 'this' depends how the function is called*/

//Saving this with an Anonymous Closure
// invokeTwice(function() {
//     dog.growOneYear();
// });

// console.log(dog.age);

/*Since this is such a common pattern, JavaScript provides an alternate and less
verbose approach: the bind() method. */

//Saving 'this' with bind():::
/*Similar to call() and apply(), the bind() method allows us to directly define a
value for this. bind() is a method that is also called _on_ a function, but unlike 
call() or apply(), which both invoke the function right away -- bind() returns a new
function that, when called, has this set to the value we give it.*/
const myGrow = dog.growOneYear.bind(dog);
invokeTwice(myGrow);
console.log(dog.age);

console.log('Primitives or Value types VS Reference types:::::');
//Primitives or Value types VS Reference types::::::::::::::::::::

// let x = 10;
// let y = x;
// console.log('x = ' + x);
// console.log('y = ' + y);

// x = 20;
// console.log('x = ' + x);
// console.log('y = ' + y);


let x = {value: 10};
let y = x;

x.value = 20;
console.log(x);
console.log(y);

y.value = 30;
console.log(x);

//another example
// let number = 70;

// function increase(number) {
//     number++;
// }
// increase(number);

// console.log(number);


// let number = 70;

// function increase(number) {
//     number++;
//     console.log(number);
// }
// increase(number);

let obj = {value: 70};

function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj);

console.log('Enumerating properties of an object:::::::');

//Enumerating properties of an object:::::::
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for(let key in circle) {
    console.log(key, circle[key]);
}

for(let key of Object.keys(circle)) {
    console.log(key);
}

for(let entry of Object.entries(circle)) {
    console.log(entry);
}

if('radius' in circle) {
    console.log('Yes');
}


console.log('Cloning an object::::::::::::');

//Cloning an object::::::::::::

//1. First approach:::::
const developer = {
    name: 'Ajgar',
    age: 25
};

const another = {};

for(let key in developer) {
    another[key] = developer[key];
}

console.log(another);

//2. Second approach:::::
// ***Another approach for cloning an object: Object.assign() method in ES6

// const another = Object.assign({}, developer);
// console.log(another);

const another2 = Object.assign({
    language: 'JavaScript'
}, developer);
console.log(another);


//3. Third approach:::::
//****Another elegant way to clone an object: ...spread operator
const another3 = {...developer};
console.log(another3);

console.log('String: built-in object::::::::');

//String: built-in object::::::::

//string primitive
const message = 'Hello';
console.log(message);
console.log(typeof message);
console.log(message.length);
console.log(message[0]);
console.log(message[2]);
console.log(message.includes('o'));
console.log(message.includes('u'));
console.log(message.startsWith('H'));
console.log(message.indexOf('l'));
console.log(message.replace('Hello', 'Hola'));
console.log(message);
console.log(message.toUpperCase());
console.log(message.toLowerCase());

const msg = ' Jewel ';
console.log(msg);
console.log(msg.trim());
console.log(msg.trimLeft());
console.log(msg.trimRight());

const msg2 = 'My name is \'ajgar\'';
console.log(msg2);

const msg3 = 'My name is \najgar';
console.log(msg3);

const msg4 = 'My name is ajgar';
console.log(msg4.split(' '));

const msg5 = `My name is 
ajgar`;
console.log(msg5);

const msg6 = `Hi Jewel,

Thank you joining my mailing list.

Regards,
Ajgar`;
console.log(msg6);

//string object
const message2 = new String('Hello');
console.log(message2);
console.log(typeof message2);

console.log('Date: built-in object::::::');

//Date: built-in object::::::::::

//different ways to create date object
const now = new Date();
const date1 = new Date('July 22 2019 16:00');
const date2 = new Date(2019, 6, 22, 16, 35);
console.log(date2);

now.setFullYear(2017);
console.log(now);
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());