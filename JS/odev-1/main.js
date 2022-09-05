let inName = prompt("Adını Şahanesnizi Bizle Paylaştır mısınız?");
let myName = document.querySelector("#myName");
myName.innerHTML = inName;

let days = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

function showTime() {
  const today = new Date();
  let day = today.getDay();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  document.querySelector("#myClock").innerHTML =
    hours + ":" + minutes + ":" + seconds + " " + days[day - 1];
  setTimeout(showTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
showTime();
