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
    let imgEl = document.createElement('img');
    imgEl.setAttribute('class', 'review-img');
    imgEl.setAttribute('src', tempArray.oImage);
    imgEl.setAttribute('alt', 'Review image');
    reviewImg.appendChild(imgEl);

    let h3TitleEl = document.createElement('h3');
    h3TitleEl.textContent = tempArray.oName;

    let pDisEl = document.createElement('p');
    pDisEl.textContent = tempArray.oDis;

    let submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('name', 'submitF');
    submit.setAttribute('id', 'submitF');
    submit.setAttribute('class', 'submitF');

    inputForm.appendChild(submit);

    reviewInfo.appendChild(h3TitleEl);
    reviewInfo.appendChild(pDisEl);
}
displayer();

inputForm.addEventListener('submit', comment);

function comment(event)
{
    event.preventDefault();
    let text = event.target.textareaEl.value;
    comments.push(text);
    let pEl = document.createElement('p');
    pEl.textContent = text;
    commentsField.appendChild(pEl);
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

