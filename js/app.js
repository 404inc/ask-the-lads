'use strict'
// let objectsArr = ['NARUTO SHIPPUDEN: Ultimate Ninja STORM 4', 'ELDEN RING', 
// 'Dark Souls 3', 'Red Dead Redemption 2', 'Uncharted 4: A Thiefs End', 
// 'Call of Duty: Modern Warfare', 'Bloodborne', 'Fast and Furious 9', 'The Conjuring: The Devil Made Me Do It',
// 'Gemini Man', 'Fatherhood', 'Central Intelligence', 'Johnny English Strikes Again',
// 'The Croods 2: A New Age', 'Naruto Shippuden', 'One Piece', 'Boruto: Naruto Next Generations', 
// 'Death Note', 'Demon Slayers', 'Attack on Titan', 'Death Note'];

// let gamesArr = ['NARUTO SHIPPUDEN: Ultimate Ninja STORM 4', 'ELDEN RING', 
// 'Dark Souls 3', 'Red Dead Redemption 2', 'Uncharted 4: A Thiefs End', 
// 'Call of Duty: Modern Warfare', 'Bloodborne'];

// let moviesArr = ['Fast and Furious 9', 'The Conjuring: The Devil Made Me Do It',
// 'Gemini Man', 'Fatherhood', 'Central Intelligence', 'Johnny English Strikes Again',
// 'The Croods 2: A New Age'];

// let animeArr = ['Naruto Shippuden', 'One Piece', 'Boruto: Naruto Next Generations', 
// 'Death Note', 'Demon Slayers', 'Attack on Titan', 'Death Note'];

let objectsArr = [];
let gamesArr = [];
let moviesArr = [];
let animeArr = [];

let saveArray = [];

let savedReviews = [];

let savedIDs = [];

const searchBar = document.getElementById('searchBar');
const ulEl = document.getElementById('list');
const listClass = document.querySelector('listC');
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
    
    listDivEl.classList.add("active");
    searchDisplay(filteredObjects);

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
    if (category === 'games') {
        gamesArr.push(this);
    }
    else if (category === 'movies') {
        moviesArr.push(this);
    }
    else if (category === 'anime') {
        animeArr.push(this);
    }
    objectsArr.push(this);
}

//// Name, description, image path, category.
new Objects('NARUTO SHIPPUDEN: Ultimate Ninja STORM 4', 'Whatever', './img/narutoStorm4.png', 'games');
new Objects('ELDEN RING', 'Whatever', './img/eldenring.jpg', 'games');
new Objects('Dark Souls 3', 'Whatever', './img/Dark-Souls.jpg', 'games');
new Objects('Red Dead Redemption 2', 'Whatever', './img/reddeadredemption2.jpg', 'games');
new Objects('Uncharted 4: A Thiefs End', 'Whatever', './img/unch4.jpg', 'games');
new Objects('Call of Duty: Modern Warfare', 'Whatever', './img/modernwarfare19.jpg', 'games');
new Objects('Bloodborne', 'Whatever', './img/bloodborne.jpg', 'games');

new Objects('Fast and Furious 9', 'Whatever', './img/FF9.jpg', 'movies');
new Objects('The Conjuring: The Devil Made Me Do It', 'Whatever', './img/conjuring.jpeg', 'movies');
new Objects('Gemini Man', 'Whatever', './img/geminiman.jpg', 'movies');
new Objects('Fatherhood', 'Whatever', './img/fatherhood.jpg', 'movies');
new Objects('Central Intelligence', 'Whatever', './img/central-intelligence.jpg', 'movies');
new Objects('Johnny English Strikes Again', 'Whatever', './img/JE.jpg', 'movies');
new Objects('The Croods 2: A New Age', 'Whatever', './img/thecroods.jpg', 'movies');

new Objects('Naruto Shippuden', 'Whatever', './img/NS.jpg', 'anime');
new Objects('Boruto: Naruto Next Generations', 'Whatever', './img/BNNG.jpg', 'anime');
new Objects('Death Note', 'Whatever', './img/DN.jpeg', 'anime');
new Objects('Demon Slayers', 'Whatever', './img/demonslayer.jpg', 'anime');
new Objects('One Piece', 'Whatever', './img/oneP.png', 'anime');
new Objects('Hunter x Hunter', 'Whatever', './img/HxH.jpg', 'anime');
new Objects('Attack on Titan', 'Whatever', './img/AoT.jpg', 'anime');
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
        // let link = document.createElement('a');
        liEl.textContent = arr[i].oName;

        // link.addEventListener('click', searchForThePage(arr[i].oName));
        liEl.setAttribute('onclick', `searchForThePage('${arr[i].oName}')`);
        // liEl.appendChild(link);
        ulEl.appendChild(liEl);
    }
}

function searchForThePage(name){
    console.log(name);
    for (let i = 0; i < objectsArr.length; i++) {
        if(name === objectsArr[i].oName){
            let tempArray = objectsArr[i];
            console.log(tempArray);
            window.open(tempArray.oLink, "_self");
            saveToLocalStorage(tempArray, 'load-review');
        }
    }
}

function addToSaved(arr, num, img) {
    let breakAll = false;
    if (savedReviews.length === 0) {
        savedReviews.push(arr[num].oName);
        let sendArr = [arr[num].oName, arr[num].oImage, arr[num].oLink, addItemId++, arr[num].category];
        saveArray.push(sendArr);
        // console.log(img);
        img.src = "https://www.freeiconspng.com/thumbs/check-tick-icon/tick-mark-icon-png-7.png";
        saveToLocalStorage(saveArray, 'load-saved');
    }
    else {
        for (let i = 0; i < savedReviews.length; i++) {
            if (savedReviews[i] === arr[num].oName) {
                breakAll = true;
                savedIDs.push(num);
                console.log(breakAll);
                break;
            }
        }
        if (breakAll) {
            // console.log(breakAll);
            alert('You already have it in saved');
        }
        else {
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


