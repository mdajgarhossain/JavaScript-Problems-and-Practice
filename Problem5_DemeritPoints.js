//Problem-5: Demerit Points

/*
Speed Limit = 70km/h
speed < limit => OK
speed === limit => OK
every 5km above the limit gonna get 1 point
if the driver get more than 12 points then the license gets suspended
*/

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint) {
        console.log('Ok');
    }
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if(points >= 12) {
            console.log('License suspended');
        }
        else {
            console.log('Points:', points);
        }
    }
}
checkSpeed(89);