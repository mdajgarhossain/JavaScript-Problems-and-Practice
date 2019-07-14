//:::For loop:::
// for(let i = 0; i < 5; i++) {
//     console.log('Welcome to JavaScript!', i);
// }

//alternatively
// for(let i = 1; i <= 5; i++) {
//     console.log('Welcome to JavaScript!', i);
// }

//another example
// for(let i = 1; i <= 5; i++) {
//     if(i % 2 !== 0) {
//         console.log(`${i} is an odd number!`);
//     }
// }

//alternatively
// for(let i = 5; i >= 1; i--) {
//     if(i % 2 !== 0) {
//         console.log(`${i} is an odd number!`);
//     }
// }


//:::while loop:::
// let i = 0;
// while(i <= 5) {
//     if(i % 2 !== 0) {
//         console.log(`${i} is an odd number!`);
//     }
//     i++;
// }


//:::do...while loop:::
// let i = 0;
// do {
//     if(i % 2 !== 0) {
//         console.log(`${i} is an odd number!`);
//     }
//     i++;
// } while(i <= 5);

/*do...while always executes at least once even if the condition evaluates to false */
// let i = 9; // now we initialize i to 9
// do {
//     if(i % 2 !== 0) {
//         console.log(`${i} is an odd number!`); //return: 9 is an odd number!
//     }
//     i++;
// } while(i <= 5); // but condition is false


//:::infinite loop:::
// let i = 0;
// while(i < 5) {
//     console.log(i);
//     // i++;
// }

// while (true) {
//     //this is also an infinite loop
// }

// let x = 0;
// do  {
//     x++;
//     //this is also an infinite loop
// } while(x < 5);

// for(let i = 0; i > 0; i++) {
//     //this is also an infinite loop
// }


//:::for...in loop:::
// const person = {
//     name: 'Jewell',
//     age: 25
// };

// for(let key in person) {
//     console.log(key);
// }

// const person = {
//     name: 'Jewell',
//     age: 25
// };

// for(let key in person) {
//     console.log(key, person[key]);
// }

//another example
// const colors = ['green', 'blue', 'white'];

// for(let index in colors) {
//     console.log(index);
// }

const color = ['green', 'blue', 'white'];

for(let index in color) {
    console.log(index, color[index]);
}


//:::for...of loop:::
const colors = ['green', 'blue', 'white'];

for(let color of colors) {
    console.log(color);
}


//:::::::break and continue:::::::::

//break
// let i = 0;
// while(i <= 10) {
//     if(i === 5) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

//continue
let i = 0;
while(i <= 10) {
    if(i % 2 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}