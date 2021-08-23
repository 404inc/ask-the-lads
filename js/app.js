'use strict'
let objectsArr = [];

let gamesArr = [];
let moviesArr = [];
let animeArr = [];

let saveArray = [];
    
const searchBar = document.getElementById('searchBar');
const ulEl = document.getElementById('list');
const listDivEl = document.querySelector('.search-input');
const gamesRow = document.getElementById('gamesRow');
const moviesRow = document.getElementById('moviesRow');
const animeRow = document.getElementById('animeRow');

let addItemId = 0;

function saveToLocalStorage(arr) {
    let data = JSON.stringify(arr);
    localStorage.setItem('load', data);
}

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredObjects = objectsArr.filter(object => {
        return object.oName.toLowerCase().includes(searchString);
    });
    console.log(filteredObjects);
    searchDisplay(filteredObjects);
    listDivEl.classList.add("active");

    if (searchBar.value.length == 0) {
        listDivEl.classList.remove("active");
    }

});

function Objects(oName, oDis, oLink, oImage, category) {
    this.oName = oName;
    this.oDis = oDis;
    this.oLink = oLink;
    this.oImage = oImage;
    this.category = category;
    if(category === 'games')
    {
        gamesArr.push(this);
    }
    else if(category === 'movies')
    {
        moviesArr.push(this);
    }
    else if(category === 'anime')
    {
        animeArr.push(this);
    }
    objectsArr.push(this);
}

//// Name, description, link, image path, category.
new Objects('Naruto storm 4', 'Best Game', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'games');
new Objects('Naruto storm 1', 'Great Game', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'games');
new Objects('Elden Ring', 'I doubt you could even imagine it', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'games');
new Objects('Dark Souls 3', 'Big Bonk', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'games');
new Objects('Resident Evil 2 Remake', 'X gonna give it to ya', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'games');
new Objects('Bloodborne', 'fear the old blood', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'games');

new Objects('Naruto storm 4', 'Best Game', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'movies');
new Objects('Naruto storm 1', 'Great Game', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'movies');
new Objects('Elden Ring', 'I doubt you could even imagine it', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'movies');
new Objects('Dark Souls 3', 'Big Bonk', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'movies');
new Objects('Resident Evil 2 Remake', 'X gonna give it to ya', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'movies');
new Objects('Bloodborne', 'fear the old blood', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'movies');

new Objects('Naruto storm 4', 'Best Game', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'anime');
new Objects('Naruto storm 1', 'Great Game', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'anime');
new Objects('Elden Ring', 'I doubt you could even imagine it', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'anime');
new Objects('Dark Souls 3', 'Big Bonk', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'anime');
new Objects('Resident Evil 2 Remake', 'X gonna give it to ya', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'anime');
new Objects('Bloodborne', 'fear the old blood', 'https://via.placeholder.com/800x800', 'https://via.placeholder.com/400x480', 'anime');
console.log(objectsArr);
console.log(gamesArr);
console.log(moviesArr);
console.log(animeArr);

// console.log(gameIdNumber);
// console.log(movieIdNumber);
// console.log(animeIdNumber);

function searchDisplay(arr) {
    ulEl.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        let liEl = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute('href', arr[i].oLink)
        link.textContent = arr[i].oName;
        liEl.appendChild(link);
        ulEl.appendChild(liEl);
    }
}



function addToSaved(arr, num)
{
    console.log(arr[num].oName);
    let sendArr = [arr[num].oName, arr[num].oImage, arr[num].oLink, addItemId++];
    saveArray.push(sendArr);
    saveToLocalStorage(saveArray);
}

// Side Bar

function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
}


