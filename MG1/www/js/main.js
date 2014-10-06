/********************************************/
/*THE CODE EXECUTED AT LOADING OF INDEX PAGE*/
/********************************************/

$(document).ready(function() {
    updateTimeElapsed();
    updateRiskMeter();
    setInterval(updateTimeElapsed, 999);
    $("#deleteLastImpactButton").width($("#viewImpactHistoryButton").width());
});


