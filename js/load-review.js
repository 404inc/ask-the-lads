'use strict'
let tempArray = [];

let comments = [];

const reviewImg = document.getElementById('review-info-img');
const reviewInfo = document.getElementById('review-info-dis');
const textDiv = document.getElementById('textDiv');
const commentsField = document.getElementById('commentsField');
const inputForm = document.getElementById('inputForm');
const textareaEl = document.getElementById('textareaEl');

function readFromInfoLocalStorage() 
{
    let stringObj = localStorage.getItem('load-review');
    let normalObj = JSON.parse(stringObj);

    if (normalObj) 
    {
        tempArray = normalObj;
    }

    if (tempArray.oName === 'ELDEN RING') {
        let pEl = document.createElement('p');
        pEl.textContent = 'I doubt you could even imagine it';
        commentsField.appendChild(pEl);
    }

    for (let i = 0; i < tempArray.commentsA.length; i++) {
        let pEl = document.createElement('p');
        pEl.textContent = tempArray.commentsA[i];
        commentsField.appendChild(pEl);
        
    }
}
readFromInfoLocalStorage();

function displayer()
{
    let imgCover = document.getElementById('cover');
    imgCover.src = tempArray.oImage;
    let imgClass = document.getElementById('hero');

    document.documentElement.style.setProperty('--h', `url('${tempArray.oHero}')`); 

    let likes = document.getElementById('likes');
    likes.textContent = `${getRandomInt()} Likes`;

    let titleEl = document.getElementById('title1');
    titleEl.textContent = tempArray.oName;

    let column2 = document.getElementById('column2');
    let disEl = document.createElement('p');
    disEl.textContent = tempArray.oDis;
    column2.appendChild(disEl);

    let trailerButton = document.createElement('img');
    trailerButton.setAttribute('src', './img/playButton.png');
    trailerButton.setAttribute('class', 'coverPlay');
    trailerButton.setAttribute('onclick', 'goToTrailer()');
    column2.appendChild(trailerButton);

    inputForm.addEventListener('submit', comment);
}
displayer();

function goToTrailer(){
    console.log(tempArray.trailer);
    window.open(tempArray.trailer, '_blank');
}

// inputForm.addEventListener('submit', comment);

function comment(event)
{
    event.preventDefault();
    let text = event.target.textareaEl.value;
    let pEl = document.createElement('p');
    pEl.textContent = text;
    let sendArrayName = `${tempArray.category}Row`;
    tempArray.commentsA.push(text);

    displayComments(sendArrayName)

    commentsField.appendChild(pEl);
    inputForm.reset();
    saveToLocalStorage(tempArray, 'load-review');
}

function displayComments(){
    if(comments){
        for (let i = 0; i < comments.length; i++) {
            let pEl = document.createElement('p');
            pEl.textContent = comments[i];
            commentsField.appendChild(pEl)
            
        }
    }
}

function commentLocation(name)
{
    if (name === 'gamesRaw') 
    {
        for (let i = 0; i < gamesRaw.length; i++) {
            if (tempArray.oName === gamesRaw[i].oName) {
                gamesRaw[i].commentsA = tempArray.commentsA;
            }
        }
    }
    if (name === 'moviesRaw') 
    {
        for (let i = 0; i < moviesRaw.length; i++) {
            if (tempArray.oName === moviesRaw[i].oName) {
                moviesRaw[i].commentsA = tempArray.commentsA;
            }
        }
    }
    if (name === 'animeRaw') 
    {
        for (let i = 0; i < animeRaw.length; i++) {
            if (tempArray.oName === animeRaw[i].oName) {
                animeRaw[i].commentsA = tempArray.commentsA;
            }
        }
    }
    
}

displayComments();

