function displayTime()
{
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var am = document.getElementById('am');

    if(hrs >= 12)
    {
        am.innerHTML = 'PM';
    }
    else{
        am.innerHTML = 'AM';
    }

    if(hrs > 12)
    {
        hrs = hrs - 12;    
    }

    hrs = (hrs < 10) ? "0" + hrs : hrs;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('mins').innerHTML = min;
    document.getElementById('secs').innerHTML = sec;
}

setInterval(displayTime, 10);
