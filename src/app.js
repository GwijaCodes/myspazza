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
let domani = document.querySelector('#tomorrow');


//mostra cosa buttare oggi e domani

let myDays = document.querySelectorAll('label p span');
let raccolta = [...myDays].map(el => el.textContent);
let today;
const trashbin = document.querySelector('.trashbin');

window.addEventListener('load', () => {

    console.log('ready')

    if (JSON.parse(localStorage.getItem('isDarkMode')) === true) {
        document.querySelector('body').classList.add('active');
    }

    if (localStorage.getItem('raccolta') === null) {
        raccolta = [...document.querySelectorAll('label p span')].map(el => el.textContent)
    } else {
        raccolta = JSON.parse(localStorage.getItem('raccolta'));
        for (let i = 0; i < myDays.length; i++) {
            myDays[i].textContent = raccolta[i];
        }
    }


})

setInterval(() => {
    document.querySelector('.loading').style.opacity = '0'
    document.querySelector('.loading').style.transform = 'translateX(150%)'

    today = document.querySelector('#today').innerText = raccolta[dayN];
    if (dayN >= raccolta.length - 1) {
        domani.innerHTML = raccolta[0];
    } else {
        domani.innerHTML = raccolta[dayN + 1];
    }

    //visualizza bidone

    switch (today) {
        case 'Plastica':
            trashbin.style.background = 'url(../images/bin-yellow.png)';
            break;
        case 'Umido':
            trashbin.style.background = 'url(../images/bin-brown.png)';
            break;
        case 'Carta':
            trashbin.style.background = 'url(../images/bin-bluee.png)';
            break;
        case 'Vetro':
        case 'Metallo':
            trashbin.style.background = 'url(../images/bin-green.png)';
            break;
        case 'Indifferenziata':
            trashbin.style.background = 'url(../images/bin-grey.png)';
            break;
        case 'Giorno Libero':
            trashbin.style.background = 'url(../images/bin-party.png)';
    }

}, 500)

//dark mode
let isDarkMode = false;

function darkMode() {
    isDarkMode = !isDarkMode;

    isDarkMode ? document.querySelector('body').classList.add('active') : document.querySelector('body').classList.remove('active');
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
}



