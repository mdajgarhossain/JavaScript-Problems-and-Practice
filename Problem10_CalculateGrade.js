//Problem-10: Calculate Grade

/*
Create a function and pass an array to the function that have marks of a student of different subject
Calculate the average marks
Then calculate what grade this average corresponds to.
1-59: F
60-69: D
70-79: C
80-89: B
90-100: A
*/

//Own
function calculateGrades(marks) {
    let sum = 0;
    let average;
    
    for(let mark of marks) {
        sum += mark;
    }

    average = sum / marks.length;
    if(average >= 90 && average <= 100) return 'A';
    if(average >= 80 && average < 90) return 'B';
    if(average >= 70 && average < 80) return 'C';
    if(average >= 60 && average < 70) return 'D';
    else return 'F';
}

const marks = [80, 80, 50];
console.log(calculateGrades(marks));

//Solution-more concise
// function calculateGrade(marks) {
//     let sum = 0;
    
//     for(let mark of marks) {
//         sum += mark;
//     }

//     let average = sum / marks.length;
//     if(average < 60) return 'F';
//     if(average < 70) return 'D';
//     if(average < 80) return 'C';
//     if(average < 90) return 'B';
//     else return 'A';
// }

// const subjectMarks = [90, 93, 100];
// console.log(calculateGrade(subjectMarks));


//Another solution
/*** Single Responsibilty Principle
        We can break calculateGrade() function into two smaller function
*/
const subjectMarks = [90, 93, 100];
console.log(calculateGrade(subjectMarks));

function calculateGrade(subjectMarks) {
    const average = calculateAverage(subjectMarks);
    if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    else return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    
    for(let value of array) {
        sum += value;
    }
    let average = sum / array.length;
    return average;
}

