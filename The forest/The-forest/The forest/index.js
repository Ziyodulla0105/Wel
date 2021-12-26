function soat() {
hozir= new Date();
hour=hozir.getHours();
minut=hozir.getMinutes();
sekund=hozir.getSeconds();
vaqtimiz=hour;
if (minut<10) { vaqtimiz+= ":0"+minut } else { vaqtimiz+= ":" +minut}
if (sekund<10) { vaqtimiz+= ":0"+sekund } else { vaqtimiz+= ":" +sekund}
document.forma1.vaqt.value=vaqtimiz;
setTimeout("soat()", 1000)
}
