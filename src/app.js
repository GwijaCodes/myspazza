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
let switched = false;

window.addEventListener('load', () => {


    console.log('ready')
    if (localStorage.getItem('raccolta') === null) {
        raccolta = [...document.querySelectorAll('label p span')].map(el => el.textContent)
    } else {
        raccolta = JSON.parse(localStorage.getItem('raccolta'));
        for (let i = 0; i < myDays.length; i++) {
            myDays[i].textContent = raccolta[i];
        }
    }

    if (localStorage.getItem('isDarkMode') === null) {
        document.querySelector('body').classList.remove('active')
    } else {
        document.querySelector('body').classList.add('active')

    }
})

setInterval(() => {
    today = document.querySelector('#today').innerHTML = raccolta[dayN];
    if (dayN >= raccolta.length - 1) {
        domani.innerHTML = raccolta[0];
    } else {
        domani.innerHTML = raccolta[dayN + 1];
    }

    //visualizza bidone
    switch (today) {
        case 'Plastica':
            trashbin.style.backgroundPositionX = 200 + 'px';
            break;
        case 'Umido':
            trashbin.style.backgroundPositionX = 0 + 'px';
            break;
        case 'Carta':
            trashbin.style.backgroundPositionX = 300 + 'px';
            break;
        case 'Vetro':
        case 'Metallo':
            trashbin.style.backgroundPositionX = 500 + 'px';
            break;
        case 'Indifferenziata':
            trashbin.style.backgroundPositionX = 400 + 'px';
            break;
        case 'Giorno Libero':
            trashbin.style.backgroundPositionX = 100 + 'px';
    }

}, 200)

if (localStorage.getItem('isDarkMode') === 'true') {
    document.querySelector('body').classList.add('active');
    switched = true;
    document.querySelector('.dark-switch-toggle').style.transform = 'translateX(180%)'
} else {
    switched = false
    document.querySelector('body').classList.remove('active');
}


//dark mode switch
const toggle = document.querySelector('.toggle-dark');
toggle.addEventListener('click', () => {
    switched = !switched;
    document.querySelector('body').classList.toggle('active');
    const toggled = document.querySelector('.dark-switch-toggle');
    switched ? (toggled.style.left = '100%', toggled.style.transform = 'translateX(-120%)') : (toggled.style.left = '0%', toggled.style.transform = 'translateX(20%)')
    localStorage.setItem('isDarkMode', true);
});


