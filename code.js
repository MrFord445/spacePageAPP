function start(){
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...;)";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}



function getData(){
    var loadedData = loadData();
    return loadedData;
}
function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}






function checkCreds() {
    // put the fname input into firstname variable
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    if (badgeNumb > 999 || badgeNumb < 0) {
        document.getElementById("loginStatus").innerHTML = "badge number is not applicable";
    }
    // Name validation
    if (fullName.length > 19) {
        document.getElementById("loginStatus").innerHTML = "Name Strng has too many characters";
    } else if (fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Name String does not have any characters";
    }

    alert("Access Granted, Welcome" + fullName);
    location.replace("index.html");

    //badge number validation
   
    // if (fullName.length < 20 && badgeNumb < 1000 && badgeNumb >= 0 && fullName.length > 1) {
     
    // }

}
function play() {
    var die1 = Math.ceil(Math.random() * 6);


    var die2 = Math.ceil(Math.random() * 6);



    var sum = die1 + die2
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    if (sum == 7 || sum == 11) {
        document.write("CRAPS - you lose")
        document.write("<br/>")
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.write("DOUBLES - you win")
        document.write("<br/>")
      
    
    }

}


function betterCtdnTimer() {
    // build coutndown timer using for loop, i am going from 20 to 0 by 2's
    var countDn = 20;
    for (var i = 0; i <= 10; i++) {
        setTimeout(function () {
            if (countDn == 0) {
                document.getElementById("ctdnTimer").innerHTML = "Blast off"

            } else if (countDn < 10) {
                document.getElementById("ctdnTimer").innerHTML =
                    "Warning Less than ½ way to launch, time left =" + countDn;
            } else {
                document.getElementById("ctdnTimer").innerHTML = countDn
            }
            countDn = countDn - 2;
        }, i * 2000);

    }
}
// used to play space station sounds
function playStation() {
    mySound = new sound("https://cdn.glitch.com/fd2582c5-2d19-4cf1-8286-ba9546fc672e%2Fus-lab-background.mp3?v=1617825994043");
    mySound.play();
}
    
function stopStation () {
    mySound.stop();
} 
    
   
function playJuice() {
    mySound = new sound("https://cdn.glitch.com/fd2582c5-2d19-4cf1-8286-ba9546fc672e%2FJuice.WRLD.Bad.Energy.mp3?v=1617830903134");
    mySound.play();
}

//play any sound
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload","audio");
    this.sound.setAttribute("controls","none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds =  time_seconds;
        this.latitude = latitude;
        this.longitude =  longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude =  bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

