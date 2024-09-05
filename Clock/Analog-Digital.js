setInterval(function () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hourAngle = 30*hours + minutes/2;
    var minuteAngle = minutes * 6;
    var secondAngle = seconds * 6;
    document.querySelector('.hourneedle').style.transform = `rotate(${hourAngle}deg)`;
    document.querySelector('.minuteneedle').style.transform = `rotate(${minuteAngle}deg)`;
    document.querySelector('.secondneedle').style.transform = `rotate(${secondAngle}deg)`;

}, 1000);

function time(){
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const M_E = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    hours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const formattedTime = `${hours}:${formattedMinutes}:${formattedSeconds} ${M_E}`;

    const a = document.getElementById('Digital-Clock')
    a.innerText = formattedTime;
    a.style.color = 'white';
    a.style.fontSize = '8em';


}
time();
setInterval(time, 1000);