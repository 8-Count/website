/********************************************/
/*THE CODE EXECUTED AT LOADING OF INDEX PAGE*/
/********************************************/

$(document).ready(function() {
    impactOccurred(20);
    updateTimeElapsed();
    updateRiskMeter();
    setInterval(updateTimeElapsed, 999);
});