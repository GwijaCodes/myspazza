//dati array
const settimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
const mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
let raccolta = [...document.querySelectorAll('label p span')].map(el => el.textContent);
setTimeout(() => { }, 100)


//mostra data
let date = new Date();
let dayN = date.getDay();
let weekday = settimana[dayN];
let month = mesi[date.getMonth()];
let day = date.getDate();
let oggi = document.querySelector('#oggi').innerHTML = `${weekday} ${day} ${month}`

//mostra cosa buttare oggi e domani

let spazza = raccolta[dayN];
let spazzaText = document.querySelector('#spazzaText').innerHTML = spazza;
let domani = document.querySelector('#spazzaDomani');
//trashbin
const trashbin = document.querySelector('.trashbin');
trashbin.style.backgroundPositionX = 1365 - (100 * dayN) + 'px';

//loop da sabato a domenica
if (dayN >= raccolta.length - 1) {
    domani.innerHTML = raccolta[0];
} else {
    domani.innerHTML = raccolta[dayN + 1];
}



const editPanel = document.querySelector('.edit-panel');
const list = document.querySelector('.list');
const edit = document.getElementsByClassName('edit');
const dt = document.getElementsByClassName('day-trash');



