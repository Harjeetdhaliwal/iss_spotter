const {nextISSTimesForMyLocation} = require("./iss");


const printPassTimes = function(passTimes){
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
}

nextISSTimesForMyLocation((error, data) => {
  if(error){
    console.log("It didn't work:", error);
    return;
  }
  printPassTimes(data);
    
});






/*
fetchCoordsByIp("162.245.144.abcdeff", (error, data) => {
  if(error){
    console.log("It didn't work:", error);
    return;
    }
    console.log("It worked! Returned: ", data);

});



fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error,data) => {
  if (error) {
    console.log("It didn't work:", error);
    return;
  }
  console.log("It worked! Returned flyover times: ", data);
})




fetchMyIp((error, ip) => {
  if(error){
    console.log("It didn't work:", error);
    return;
  }
  console.log("It worked! Returned IP:", ip);
});
*/