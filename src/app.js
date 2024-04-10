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
const trashbin = document.querySelector('.trashbin');

window.addEventListener('load', () => {
    console.log('ready')
    if (localStorage.getItem('raccolta') === null) {
        raccolta = [...document.querySelectorAll('label p span')].map(el => el.textContent)
        console.log('didnt find shit')
    } else {
        raccolta = JSON.parse(localStorage.getItem('raccolta'));
        for (let i = 0; i < myDays.length; i++) {
            myDays[i].textContent = raccolta[i];
        }
        console.log('found it')
    }
})

setInterval(() => {
    today = document.querySelector('#today').innerHTML = raccolta[dayN];
    if (dayN >= raccolta.length - 1) {
        domani.innerHTML = raccolta[0];
    } else {
        domani.innerHTML = raccolta[dayN + 1];
    }


    switch (today) {
        case 'Plastica':
            trashbin.style.backgroundPositionX = 300 + 'px';
            break;
        case 'Umido':
            trashbin.style.backgroundPositionX = 100 + 'px';
            break;
        case 'Carta':
            trashbin.style.backgroundPositionX = 400 + 'px';
            break;
        case 'Vetro':
        case 'Metallo':
            trashbin.style.backgroundPositionX = 600 + 'px';
            break;
        case 'Indifferenziata':
            trashbin.style.backgroundPositionX = 500 + 'px';
            break;
        case 'Giorno Libero':
            trashbin.style.backgroundPositionX = 200 + 'px';


    }

}, 200)

let domani = document.querySelector('#tomorrow');
//trashbin

//il bidone deve seguire il giorno corrente
//ci sono dei bug nella selezione dei types
//salvare le impostazioni scelte in memoria locale



