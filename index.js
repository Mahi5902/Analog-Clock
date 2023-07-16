let hr=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

function displayTime(){
let date=new Date();
//getting hours minutes second
let hh=date.getHours();
let mm=date.getMinutes();
let ss=date.getSeconds();
let hhRotation=30*hh+mm/2;
let mmRotation=6*mm;
let ssRotation=6*ss;
hr.style.transform=`rotate(${hhRotation}deg)`
min.style.transform=`rotate(${mmRotation}deg)`;
sec.style.transform=`rotate(${ssRotation}deg)`;

}
setInterval(displayTime,1000);