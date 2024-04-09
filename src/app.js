//mostra data
let date = new Date();
let dayN = date.getDay();
//mese e settimana in italiano
const settimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
const mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
let weekday = settimana[dayN];
let month = mesi[date.getMonth()];
//data di oggi in italiano
let day = date.getDate();
let oggi = document.querySelector('#oggi').innerHTML = `${weekday} ${day} ${month}`

//mostra cosa buttare oggi e domani

let myDays = document.querySelectorAll('label p span');
let raccolta = [...myDays].map(el => el.textContent);
let today;
setInterval(() => {
    today = document.querySelector('#today').innerHTML = 'Carta';
    if (dayN >= raccolta.length - 1) {
        domani.innerHTML = raccolta[0];
    } else {
        domani.innerHTML = raccolta[dayN + 1];
    }

    switch (today) {
        case 'Plastica':
            trashbin.style.backgroundPositionX = 700 - (100 * 3) + 'px';
        case 'Umido':
            trashbin.style.backgroundPositionX = 700 - (100 * 2) + 'px';
        case 'Carta':
            trashbin.style.backgroundPositionX = 700 - (100 * 4) + 'px';

    }

}, 200)

let domani = document.querySelector('#tomorrow');
//trashbin
const trashbin = document.querySelector('.trashbin');

//loop da sabato a domenica




