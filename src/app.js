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
    document.querySelector('.loading').style.opacity = '0'
    document.querySelector('.loading').style.transform = 'translateX(150%)'
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
    checkBins()

})



document.querySelector('body').addEventListener('click', () => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', 'var(--light)');

    checkBins()

})




//dark mode
let isDarkMode = false;

function darkMode() {
    isDarkMode = !isDarkMode;

    isDarkMode ? document.querySelector('body').classList.add('active') : document.querySelector('body').classList.remove('active');
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
}

// src/app.js

export function checkBins() {
    const trashCount = raccolta[dayN].split(',');
    trashCount.push('Libero')
    const bin = document.createElement('img');
    bin.classList.add('tmp');
    trashbin.textContent = '';

    for (let count of trashCount) {
        trashbin.appendChild(bin.cloneNode(true))
        bin.src = 'images/' + count.toLowerCase() + '.png';
    }

    const bins = document.querySelectorAll('.tmp')
    trashbin.removeChild(bins[0])

    today = document.querySelector('#today').innerText = raccolta[dayN].split(',').join(', ');
    if (dayN >= raccolta.length - 1) {
        domani.innerHTML = raccolta[0];
    } else {
        domani.innerHTML = raccolta[dayN + 1];
    }
}

export function showInfo(thisList) {
    document.querySelector('#' + thisList + ' span').classList.toggle('invisible-text');
    document.querySelector('#' + thisList).classList.toggle('open');
}

//RICERCA RIFIUTI
export const searchInput = document.getElementById('searchInput');
export const items = document.querySelectorAll('.infoList span');
export const mysearch = document.querySelector('.mysearch');
export const searchResult = document.querySelector('.search-result');

export function setupSearchListener() {
    searchInput.addEventListener('input', function () {
        const searchValue = searchInput.value.toLowerCase();
        searchValue != '' ? mysearch.innerText = searchInput.value + ' va in...' : mysearch.innerText = ''

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const itemName = item.textContent.toLowerCase();
            if (itemName.includes(searchValue)) {
                item.parentElement.classList.remove('invisible-text');
            } else {
                item.parentElement.classList.add('invisible-text');
            }
        }
    });
}

export function selectWithoutCtrl() {
    window.onmousedown = function (e) {
        var el = e.target;
        if (el.tagName.toLowerCase() == 'option') {
            e.preventDefault();

            if (el.hasAttribute('selected')) el.removeAttribute('selected');
            else el.setAttribute('selected', '');

            var select = el.parentNode.cloneNode(true);
            el.parentNode.parentNode.replaceChild(select, el.parentNode);
        }
    }
}

export function displayTrash(dayName, dayTrashes, dayEditPanel) {
    document.querySelector('.' + dayEditPanel).classList.toggle('invisible');
    document.querySelector('.' + dayEditPanel).classList.toggle('visible');

    let selectedValues = [];
    document.querySelectorAll("#" + dayTrashes + " input[type='checkbox']").forEach((item) => {
        if (item.checked === true) {
            selectedValues.push(item.value)
        }
    })

    document.querySelector("#" + dayName).innerText = selectedValues;
    raccolta = [...document.querySelectorAll('label p span')].map(el => el.textContent)
    spazza = raccolta[dayN];
    localStorage.setItem("raccolta", JSON.stringify(raccolta));
}

export function hidePanel(thisPanel) {
    document.querySelector('.' + thisPanel).classList.add('invisible')
    document.querySelector('.' + thisPanel).classList.remove('visible')
}

export function displaySearchPanel() {
    document.querySelector('.search-panel').classList.toggle('invisible');
    document.querySelector('.search-panel').classList.toggle('visible');
}

export function setupCustomBoxes() {
    const customBoxes = document.createElement('span');
    customBoxes.classList.add('customBoxes', 'concave');
    const allBoxes = document.querySelectorAll('.trashes label');
    for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].appendChild(customBoxes.cloneNode(true));
        if (allBoxes[i].checked === true) {
            customBoxes.style.background = '#000'
        }
    }
}

export async function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("./sw.js", {
          scope: "./",
        });
        if (registration.installing) {
          console.log("Service worker installing");
        } else if (registration.waiting) {
          console.log("Service worker installed");
        } else if (registration.active) {
          console.log("Service worker active");
        }
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  }
  