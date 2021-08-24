'use strict'
let homeLoadArr = [];

function readFromLocalStorage() 
{
    let stringObj = localStorage.getItem('load-saved');
    let normalObj = JSON.parse(stringObj);

    if (normalObj) 
    {
        saveArray = normalObj;
        for (let i = 0; i < saveArray.length; i++) {
            savedReviews.push(saveArray[i][0]);
            let temp = [saveArray[i][3], saveArray[i][4]]
            savedIDs[i] = temp;
            // document.getElementById(`saveButtonJs${saveArray[i][3]}`).src = "https://www.freeiconspng.com/thumbs/check-tick-icon/tick-mark-icon-png-7.png";
        }
    }

}
readFromLocalStorage();
function imagesDisplay(category, arrayName, containerName, array) {
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
        imageEl.setAttribute('onclick', `goToPage(${arrayName}, ${i})`);

        let titleEl = document.createElement('h4');
        titleEl.setAttribute('class', 'h4Js');
        titleEl.textContent = 'Title';
        
        let disEl = document.createElement('p');
        disEl.setAttribute('class', 'pJs');
        disEl.textContent = 'This is the description of the product';
        let saveImg = document.createElement('img');
        if(i < savedIDs.length){
            if(i === savedIDs[i][0] && category === savedIDs[i][1])
            {
                saveImg.setAttribute('src', 'https://www.freeiconspng.com/thumbs/check-tick-icon/tick-mark-icon-png-7.png');
            }
            else
            {
                saveImg.setAttribute('src', 'https://static.thenounproject.com/png/3162217-200.png');
            }
        }
        else
        {
            saveImg.setAttribute('src', 'https://static.thenounproject.com/png/3162217-200.png');
        }
        saveImg.setAttribute('class', 'saveButtonJs');
        saveImg.setAttribute('id', `saveButtonJs${i}${category}`)

        let saveButton = document.createElement('button');
        saveButton.setAttribute('class', 'saveButtonJs');
        saveButton.setAttribute('onclick', `addToSaved(${arrayName}, ${i}, document.getElementById('saveButtonJs${i}${category}'))`);

        // let pAlert = document.createElement('p');
        // pAlert.setAttribute('class', 'saveAlert');
        // pAlert.textContent = 'Save Review';

        imageContainer.appendChild(imageEl);
        imageContainer.appendChild(titleEl);
        imageContainer.appendChild(disEl);
        imageContainer.appendChild(saveImg);
        imageContainer.appendChild(saveButton);
        // imageContainer.appendChild(pAlert);
        column.appendChild(imageContainer);
    }
}
function goToPage(arr, num)
{
        // console.log(savedReviews.length);
        savedReviews.push(arr[num].oName);
        let tempArray = arr[num];
        window.open(arr[num].oLink, '_blank');
        saveToLocalStorage(tempArray, 'load-review');
    
}

imagesDisplay('games', 'gamesArr', gamesRow, gamesArr);
imagesDisplay('movies', 'moviesArr', moviesRow, moviesArr);
imagesDisplay('anime', 'animeArr', animeRow, animeArr);