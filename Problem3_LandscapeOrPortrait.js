//Problem-3: Landscape or Portrait
function isLandscape(width, height) {
    if(width > height) {
        return 'Landscape';
    } else {
        return 'Portrait';
    }
}

let result = isLandscape(7, 5);
console.log(result);

//another way
function isLandscape2(width, height) {
    if(width > height) {
        console.log('Landscape');
    }
    else {
        console.log('Portrait');
    }
}
isLandscape2(5, 7);

//more concise or effective
function isLandscape3(width, height) {
    return (width > height) ? true : false;
}
console.log(isLandscape3(800, 600));

//more effective
function isLandscape4(width, height) {
    return (width > height);
}

console.log(isLandscape4(500, 700));