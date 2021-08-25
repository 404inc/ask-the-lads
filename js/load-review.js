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
}
readFromInfoLocalStorage();

function readFromCommentLocalStorage() 
{
    let stringObj = localStorage.getItem('load-comment');
    let normalObj = JSON.parse(stringObj);

    if (normalObj) 
    {
        comments = normalObj;
    }
}
readFromCommentLocalStorage();

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
    comments.push(text);
    let pEl = document.createElement('p');
    pEl.textContent = text;
    commentsField.appendChild(pEl);
    inputForm.reset();
    saveToLocalStorage(comments, 'load-comment');
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
displayComments();

