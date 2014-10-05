var impactHistoryStorageKey = "impactHistoryData";

/**
 * The function called first when a new impact occurs.
 * Logs the impact (for viewing in the 'history' page), 
 * and displays immediately on index page.
 * 
 * @TODO: Debug.
 **/
function impactOccurred(rawData) {
    var percentConcussion = getPercentConcussion(rawData);
    recordImpact(percentConcussion); 
    
    //timeLastImpactOccurred = new Date(); // resets to current time
    updateTimeElapsed(); // updates the time immediately (for UX purposes)
    updateRiskMeter();
}

/**
 * Calculates and returns the chance of a concussion.
 * Uses the rawData received from MG1.
 * 
 * @TODO: Implement.
 **/
function getPercentConcussion(rawData) {
    return rawData;
}

/**
 * Record the impact so that the history page can fetch the data later.
 * 
 * @TODO: Debug.
 **/
function recordImpact(percentConcussion) {
    var impactHistory = getImpactHistory();
    impactHistory.push(
        { 
            date: new Date(), // record the current time.
            percentConcussion: percentConcussion 
        });
    
    setImpactHistory(impactHistory);
}

/**
 * Fetches all recorded impact data from storage.
 * Used by 'history' page.
 * 
 * @TODO: Debug.
 **/
function getImpactHistory() {
    var impactHistoryJSON = localStorage.getItem(impactHistoryStorageKey);
    if (impactHistoryJSON === null) {
        return [];   
    }
    
    return JSON.parse(impactHistoryJSON);
}

/**
 * Sets the impact history.
 * 
 * @TODO: Debug.
 **/
function setImpactHistory(history) {
    localStorage.setItem(impactHistoryStorageKey, JSON.stringify(history)); 
}

/**
 * Update the "time since last impact occurred" textblock on index.html.
 * 
 * @TODO: Debug.
 **/
function updateTimeElapsed() {
    var lastImpact = getLastImpact();
    
    if (lastImpact !== null) {
        var timeElapsedInSeconds = Math.floor((new Date() - lastImpact.percentConcussion) / 1000);
        ticker.innerHTML="Last impact occurred " + timeElapsedInSeconds + " seconds ago";    
    } 
}

/**
 * Update the UI to show the latest impact on the concussion risk meter on index.html.
 * 
 * @TODO: Debug.
 **/
function updateRiskMeter() {
    var lastImpact = getLastImpact();
    
    if (lastImpact !== null) {
        $('.riskMeter').delay(800).ClassyLoader({
            percentage: getLastImpact.percentConcussion,
            fontFamily: "Segoe UI",
            speed: 10,
            width: 380,
            height: 250,
            fontSize: '3.3em',
            animate: true,
            diameter: 100,
            fontColor: 'rgba(51,51,51,1)',
            lineColor: 'rgba(51,51,51,1)',
            remainingLineColor: 'rgba(0,0,0,0.2)',
            lineWidth: 22
        });
    }
}

/**
 * Returns whether or not the app has launched before.
 * 
 * @TODO: Implement.
 **/
function isFirstLaunch() {
    return false;
}

/**
 * Returns the last impact that occurred.
 * If no impact occurred, this returns null.
 * 
 * @TODO: Debug.
 **/
function getLastImpact() {
    var impactHistory = getImpactHistory();
    
    if (impactHistory.length === 0) {
        return null;
    }
    
    return impactHistory[impactHistory.length - 1];
}