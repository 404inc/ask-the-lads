'use strict'
let homeLoadArr = [];

function readFromLocalStorage() 
{
    let stringObj = localStorage.getItem('load');
    let normalObj = JSON.parse(stringObj);

    if (normalObj) 
    {
        saveArray = normalObj;
        // renderOrders();
    }
}
readFromLocalStorage();
function imagesDisplay(arrayName, containerName, array) {
    let column = document.createElement('div');
    column.setAttribute('id', 'column');
    column.setAttribute('class', 'column');
    containerName.appendChild(column);

    for (let i = 0; i < array.length; i++) {
        let imageContainer = document.createElement('div');
        imageContainer.setAttribute('id', 'imageContainer');
        imageContainer.setAttribute('class', 'imageContainer');

        let imageEl = document.createElement('img');
        imageEl.setAttribute('src', array[i].oImage);
        imageEl.setAttribute('alt', 'placeHolder');
        imageEl.setAttribute('class', 'imgJs');
        imageEl.addEventListener('click', goToPage);

        let titleEl = document.createElement('h4');
        titleEl.setAttribute('class', 'h4Js');
        titleEl.textContent = 'Title';
        
        let disEl = document.createElement('p');
        disEl.setAttribute('class', 'pJs');
        disEl.textContent = 'This is the description of the product';

        let saveButton = document.createElement('button');
        saveButton.setAttribute('class', 'saveButtonJs');
        saveButton.textContent = 'save';

        saveButton.setAttribute('onclick', `addToSaved(${arrayName}, ${i})`);

        imageContainer.appendChild(imageEl);
        imageContainer.appendChild(titleEl);
        imageContainer.appendChild(disEl);
        imageContainer.appendChild(saveButton);
        column.appendChild(imageContainer);
    }
}
function goToPage(event)
{
    
}

imagesDisplay('gamesArr', gamesRow, gamesArr);
imagesDisplay('moviesArr', moviesRow, moviesArr);
imagesDisplay('animeArr', animeRow, animeArr);