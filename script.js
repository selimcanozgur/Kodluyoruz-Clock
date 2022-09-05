
const firstName = prompt ("İsminizi Giriniz")
const span = document.querySelector("#name");
const clock = document.querySelector ("#clock");
span.innerHTML = `${firstName}`

function time (){
const date = new Date()
const hour = date.getHours()
const minutes = date.getMinutes()
const second = date.getSeconds()
const day = date.getDay ();
let days = ["Sundey","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
clock.innerHTML= converter(hour)+":"+converter(minutes)+":"+ converter(second)+" "+days[day];
}

/* Converter fonksiyonu zaman dilimi öğelerini stringe çevirmek için yazıldı.
   Stringe çevirdiğimiz için örnek: 1 2 3 olarak gözüken saat 01:02:03 olarak gözüküyor.
*/

function converter(value){
    let values = value.toString();
    if(values.length == 1){
        return "0"+values;
    }
    else{
        return values;
    }
}

// setInterval işlemin kaç saniyede bir tekrar edeceğini temsil eder.
setInterval(time,1000);