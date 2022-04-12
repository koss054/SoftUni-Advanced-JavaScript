function timeToWalk(steps, lenghtOfSteps, studentSpeed) {
    const metersForBreak = 500;
    let totalMeters = steps * lenghtOfSteps;
    let totalBreaks = Math.floor(totalMeters / metersForBreak);

    let totalTime = (totalMeters / (studentSpeed * 1000));

    let totalHours = 0;
    let totalMinutes = 0;
    let totalSeconds = 0;

    totalMinutes = (totalTime * 60) + totalBreaks;

    if (totalMinutes % 1 != 0) {
        totalSeconds = totalMinutes % 1;
        totalMinutes -= totalMinutes % 1;
        totalSeconds *= 60;
        totalSeconds = Math.round(totalSeconds);
    }

    while (totalMinutes >= 60) {
        totalHours++;
        totalMinutes -= 60;
    }

    totalHours = ('0' + totalHours).slice(-2);
    totalMinutes = ('0' + totalMinutes).slice(-2);
    totalSeconds = ('0' + totalSeconds).slice(-2);

    console.log(`${totalHours}:${totalMinutes}:${totalSeconds}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);