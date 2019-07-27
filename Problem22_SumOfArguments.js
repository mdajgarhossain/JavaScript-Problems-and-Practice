//Problem - 22: Sum Of Arguments

//Solution
function sum(...args) {
    // console.log(args);    
    if(args.length === 1 && Array.isArray(args[0])) {
        args = [...args[0]];
    }
    return args.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(sum([1,3, 2, 4]));
console.log(sum(1,3, 2, 4));
