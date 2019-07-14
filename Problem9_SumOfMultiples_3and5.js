//Problem-9: Sum Of Multiples 3 and 5

/*
If limit is 10 means multiples of 3 & 5 between 0 to 10 then
multiples of 3: 3, 6, 9
multiples of 5: 5, 10
now the task is sum of these multiples: 33
*/

function sum(limit) {
    let result = 0;
    for(let i = 0; i <= limit; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            result += i;
        }
    }
    return result;
}
console.log(sum(10));