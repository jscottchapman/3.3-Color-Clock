//setInterval(function, ms)
//var display = document.getElementById("display");

//var shazam = new Date();
//document.write(shazam.toTimeString(display));
(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(startTime, 1000);

        color = "#" + h + m + s;
        document.body.style.background = color;
    var percentage = (s / 60) * 100;
    console.log(percentage);
    var percentBar = document.querySelector('hr');
    percentBar.style.width = percentage + "%";
    


    }
    startTime();

})();
