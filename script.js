const display = document.getElementById("display");

function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        alert("location Not Found !");
    }
}

function showPosition (position){
    display.innerHTML = "Latitude :" + position.coords.latitude + "<br> longitude :" + position.coords.longitude;
}