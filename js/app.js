'use strict'
let objectsArr = [];

let gamesArr = [];
let moviesArr = [];
let animeArr = [];

let saveArray = [];

let savedReviews = [];

let savedIDs = [];
    
const searchBar = document.getElementById('searchBar');
const ulEl = document.getElementById('list');
const listDivEl = document.querySelector('.search-input');
const gamesRow = document.getElementById('gamesRow');
const moviesRow = document.getElementById('moviesRow');
const animeRow = document.getElementById('animeRow');

let addItemId = 0;

function saveToLocalStorage(arr, key) {
    let data = JSON.stringify(arr);
    localStorage.setItem(key, data);
}

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredObjects = objectsArr.filter(object => {
        return object.oName.toLowerCase().includes(searchString);
    });
    // console.log(filteredObjects);
    searchDisplay(filteredObjects);
    listDivEl.classList.add("active");

    if (searchBar.value.length == 0) {
        listDivEl.classList.remove("active");
    }

});

function Objects(oName, oDis, oImage, category) {
    this.oName = oName;
    this.oDis = oDis;
    this.oLink = 'review.html';
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

//// Name, description, image path, category.
new Objects('Naruto storm 4', 'Best Game', 'https://via.placeholder.com/400x480', 'games');
new Objects('Naruto storm 1', 'Great Game', 'https://via.placeholder.com/400x480', 'games');
new Objects('Elden Ring', 'I doubt you could even imagine it', 'https://via.placeholder.com/400x480', 'games');
new Objects('Dark Souls 3', 'Big Bonk', 'https://via.placeholder.com/400x480', 'games');
new Objects('Resident Evil 2 Remake', 'X gonna give it to ya', 'https://via.placeholder.com/400x480', 'games');
new Objects('Bloodborne', 'fear the old blood', 'https://via.placeholder.com/400x480', 'games');

new Objects('Naruto storm 4', 'Best Game', 'https://via.placeholder.com/400x480', 'movies');
new Objects('Naruto storm 1', 'Great Game', 'https://via.placeholder.com/400x480', 'movies');
new Objects('Elden Ring', 'I doubt you could even imagine it', 'https://via.placeholder.com/400x480', 'movies');
new Objects('Dark Souls 3', 'Big Bonk', 'https://via.placeholder.com/400x480', 'movies');
new Objects('Resident Evil 2 Remake', 'X gonna give it to ya', 'https://via.placeholder.com/400x480', 'movies');
new Objects('Bloodborne', 'fear the old blood', 'https://via.placeholder.com/400x480', 'movies');

new Objects('Naruto storm 4', 'Best Game', 'https://via.placeholder.com/400x480', 'anime');
new Objects('Naruto storm 1', 'Great Game', 'https://via.placeholder.com/400x480', 'anime');
new Objects('Elden Ring', 'I doubt you could even imagine it', 'https://via.placeholder.com/400x480', 'anime');
new Objects('Dark Souls 3', 'Big Bonk', 'https://via.placeholder.com/400x480', 'anime');
new Objects('Resident Evil 2 Remake', 'X gonna give it to ya', 'https://via.placeholder.com/400x480', 'anime');
new Objects('Bloodborne', 'fear the old blood', 'https://via.placeholder.com/400x480', 'anime');
// console.log(objectsArr);
// console.log(gamesArr);
// console.log(moviesArr);
// console.log(animeArr);

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



function addToSaved(arr, num, img)
{
    let breakAll = false;
    if(savedReviews.length === 0)
    {
        savedReviews.push(arr[num].oName);
        let sendArr = [arr[num].oName, arr[num].oImage, arr[num].oLink, addItemId++, arr[num].category];
        saveArray.push(sendArr);
        // console.log(img);
        img.src = "https://www.freeiconspng.com/thumbs/check-tick-icon/tick-mark-icon-png-7.png";
        saveToLocalStorage(saveArray, 'load-saved');
    } 
    else 
    {
        for (let i = 0; i < savedReviews.length; i++) {
            if(savedReviews[i] === arr[num].oName)
            {
                breakAll = true;
                savedIDs.push(num);
                console.log(breakAll);
                break;
            }
        }
        if (breakAll) 
        {
            // console.log(breakAll);
            alert('You already have it in saved');
        }
        else
        {
            savedReviews.push(arr[num].oName);
            let sendArr = [arr[num].oName, arr[num].oImage, arr[num].oLink, addItemId++, arr[num].category];
            saveArray.push(sendArr);
            // console.log(img);
            img.src = "https://www.freeiconspng.com/thumbs/check-tick-icon/tick-mark-icon-png-7.png";
            saveToLocalStorage(saveArray, 'load-saved');
        }
    }
    
}

// Side Bar

function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
}


