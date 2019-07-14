//Problem-8: String Properties

/*
Create a function and pass an object
And this function should display all the properties of the object that are of type string. 
*/

function showProperties(obj) {
    for(let key in obj) {
        if(typeof obj[key] === 'string') {
            console.log(key, obj[key]);
        }
    }
}

const book = {
    title: 'Looking for Peace',
    releaseYear: 2019,
    rating: 5,
    author: 'Ustad Nouman Ali Khan'
};

showProperties(book);
