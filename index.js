const returnFirstTwoDrivers = driverArray => driverArray.slice(0,2);

const returnLastTwoDrivers = driverArray => driverArray.slice(2,4);

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(){
    function multiplier(x){
        return x*x
    }
    return multiplier;

}
function fareDoubler(fare){
    return fare * 2;

}
function fareTripler(fare){
    return fare * 3 
    
    
    
}

function selectDifferentDrivers(arrayOfDrivers, callbackFunction){
    return callbackFunction(arrayOfDrivers);}