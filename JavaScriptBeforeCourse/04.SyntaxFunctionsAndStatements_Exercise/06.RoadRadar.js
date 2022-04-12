function checkSpeedLimit(driverKph, zone) {
    let speedLimit = 0;

    switch (zone) {
        case 'motorway': speedLimit = 130; break;
        case 'interstate': speedLimit = 90; break;
        case 'city': speedLimit = 50; break;
        case 'residential': speedLimit = 20; break;
    }

    if (driverKph <= speedLimit) {
        console.log(`Driving ${driverKph} km/h in a ${speedLimit} zone`)
    }
    else {
        let speedDifference = driverKph - speedLimit;
        let status = '';

        if (speedDifference <= 20) {
            status = 'speeding';
        }
        else if (speedDifference <= 40) {
            status = 'excessive speeding';
        }
        else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }
}

checkSpeedLimit(40, 'city');
checkSpeedLimit(21, 'residential');
checkSpeedLimit(120, 'interstate');
checkSpeedLimit(200, 'motorway');