//dati array
const settimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
const mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
const raccolta = ["Umido", "Secco", "Umido e Vetro", "Plastica", "Carta", "Umido e Metallo", "Giorno Libero"]

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
trashbin.style.backgroundPositionX = 1365 - (195 * dayN) + 'px';

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


//check which day to edit
let editBtns = [...edit]; //all buttons
const dayTrash = [...dt]; //all days

list.addEventListener('click', (e) => {

    //open panel
    if (e.target.classList.contains('edit')) {
        const currentEdit = editBtns.indexOf(e.target);
        //console.log(dayTrash)
        editPanel.classList.remove('invisible');
    }

    //which day to edit
    const currentEditDay = e.target.parentElement.parentElement.firstElementChild.firstElementChild.innerText;
    const legend = document.querySelector('legend').innerText = `${currentEditDay}`;
    let arrTrash = {
        domTrash: [],
        lunTrash: [],
        marTrash: []
    }
    switch (currentEditDay) {
        case 'Domenica:':
            console.log('dom'); break;
        case 'Lunedi:':
            console.log('lun'); break;
        case 'Martedi:':
            console.log('mar'); break;
        default: console.log('empty')
    }

})

let myTest = 0;
let valueTest = '';
setInterval(() => {
    myTest = document.querySelector('.test').value
    valueTest = document.querySelector('.input-test').innerHTML = myTest;

    return valueTest;
}, 100)



//close panel
const back = document.querySelector('.back').addEventListener('click', () => {
    editPanel.classList.add('invisible');
})

//style and select trash types








const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked')





