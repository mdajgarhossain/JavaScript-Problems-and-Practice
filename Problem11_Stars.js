//Problem-11: Stars
/*
    *
    **
    ***
    ****
    *****
*/

function showStars(rows) {
    for(let row = 1; row <= rows; row++) {
        let addStars = '';
        for(let column = 1; column <= row; column++) {
            addStars += '*';
        }
        console.log(addStars);
    }
}

showStars(5);