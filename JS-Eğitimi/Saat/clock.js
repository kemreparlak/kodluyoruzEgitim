let isim = prompt("Lütfen isminizi girin")

let ismim = document.getElementById("myName")
ismim.innerHTML = isim;


function showTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  t=setTimeout('showTime()',1000);
  if (h == 00 && m == 00 ){
      setInterval(gunler)
  }
  let myclock = document.getElementById("myClock");
  myclock.innerHTML =  h + ":" + m + ":" + s + " ";
}


function gunler() {
  const hafta = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

  const d = new Date();
  let gun = hafta[d.getDay()];
  document.getElementById("myClock").innerHTML += gun;

} 

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

showTime();
gunler();

