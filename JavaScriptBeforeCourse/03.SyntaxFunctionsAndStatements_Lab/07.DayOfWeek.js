function getDay(currentDay) {
    let dayToReturn;

    switch (currentDay) {
        case 'Monday': dayToReturn = '1'; break;
        case 'Tuesday': dayToReturn = '2'; break;
        case 'Wednesday': dayToReturn = '3'; break;
        case 'Thursday': dayToReturn = '4'; break;
        case 'Friday': dayToReturn = '5'; break;
        case 'Saturday': dayToReturn = '6'; break;
        case 'Sunday': dayToReturn = '7'; break;
        default: return 'error';
    }

    return dayToReturn;
}

console.log(getDay('Monday'));
console.log(getDay('Sunday'));
console.log(getDay('Wednesday'));
console.log(getDay('Fake'));