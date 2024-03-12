
function plusZero (digits) {
    if (digits < 10) {
        digits = "0" + digits;
    }
    return digits;
  }


let requestCount = 0;

function helpMe (req, res, next) {
    req.timeItHasHappened = Date.now();
    req.start = new Date();
    
    req.hours = plusZero(req.start.getHours());
    req.minutes = plusZero(req.start.getMinutes());
    req.seconds = plusZero(req.start.getSeconds());

    req.time = `${req.hours}val : ${req.minutes}min : ${req.seconds}sec`;
    
    requestCount++
    console.log(requestCount, req.url)

    next();
}

export { helpMe }