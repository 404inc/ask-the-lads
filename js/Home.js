'use strict'
let homeLoadArr = [];

function readFromLocalStorage() {
    let stringObj = localStorage.getItem('load-saved');
    let normalObj = JSON.parse(stringObj);

    if (normalObj) {
        saveArray = normalObj;
        for (let i = 0; i < saveArray.length; i++) {
            savedReviews.push(saveArray[i][0]);
            let temp = [saveArray[i][3], saveArray[i][4]]
            savedIDs[i] = temp;
            
        }
    }

}
readFromLocalStorage();
// function imagesDisplay(category, arrayName, containerName, array) {
//     let column = document.createElement('div');
//     column.setAttribute('id', 'column');
//     column.setAttribute('class', 'column');
//     containerName.appendChild(column);

//     for (let i = 0; i < array.length; i++) {
//         let imageContainer = document.createElement('div');
//         imageContainer.setAttribute('id', 'imageContainer');
//         imageContainer.setAttribute('class', 'imageContainer');

//         let imageEl = document.createElement('img');
//         imageEl.setAttribute('src', array[i].oImage);
//         imageEl.setAttribute('alt', 'placeHolder');
//         imageEl.setAttribute('class', 'imgJs');
//         imageEl.setAttribute('onclick', `goToPage(${arrayName}, ${i})`);

//         let titleEl = document.createElement('h4');
//         titleEl.setAttribute('class', 'h4Js');
//         titleEl.textContent = 'Title';

//         let disEl = document.createElement('p');
//         disEl.setAttribute('class', 'pJs');
//         disEl.textContent = 'This is the description of the product';
//         let saveImg = document.createElement('img');
//         if(i < savedIDs.length){
//             if(i === savedIDs[i][0] && category === savedIDs[i][1])
//             {
//                 saveImg.setAttribute('src', 'https://www.freeiconspng.com/thumbs/check-tick-icon/tick-mark-icon-png-7.png');
//             }
//             else
//             {
//                 saveImg.setAttribute('src', 'https://static.thenounproject.com/png/3162217-200.png');
//             }
//         }
//         else
//         {
//             saveImg.setAttribute('src', 'https://static.thenounproject.com/png/3162217-200.png');
//         }
//         saveImg.setAttribute('class', 'saveButtonJs');
//         saveImg.setAttribute('id', `saveButtonJs${i}${category}`)

//         let saveButton = document.createElement('button');
//         saveButton.setAttribute('class', 'saveButtonJs');
//         saveButton.setAttribute('onclick', `addToSaved(${arrayName}, ${i}, document.getElementById('saveButtonJs${i}${category}'))`);

//         // let pAlert = document.createElement('p');
//         // pAlert.setAttribute('class', 'saveAlert');
//         // pAlert.textContent = 'Save Review';

//         imageContainer.appendChild(imageEl);
//         imageContainer.appendChild(titleEl);
//         imageContainer.appendChild(disEl);
//         imageContainer.appendChild(saveImg);
//         imageContainer.appendChild(saveButton);
//         // imageContainer.appendChild(pAlert);
//         column.appendChild(imageContainer);
//     }
// }
function imagesDisplay(category, arrayName, containerName, array) {
    let divSwiperContainer = document.createElement('div');
    divSwiperContainer.setAttribute('class', 'swiper-container');
    let divSwiperWrapper = document.createElement('div');
    divSwiperWrapper.setAttribute('class', 'swiper-wrapper');

    for (let i = 0; i < array.length; i++) {
        let divSwiperSlide = document.createElement('div');
        divSwiperSlide.setAttribute('class', 'swiper-slide');
        let divSliderBox = document.createElement('div');
        divSliderBox.setAttribute('class', 'slider-box');
        let divImgBox = document.createElement('div');
        divImgBox.setAttribute('class', 'img-box');
        let imgItem = document.createElement('img');
        imgItem.setAttribute('src', array[i].oImage);
        imgItem.setAttribute('alt', array[i].oName);
        imgItem.setAttribute('onclick', `goToPage(${arrayName}, ${i})`);

        let imgSave = document.createElement('img');
        if (i < savedIDs.length) {
            if (i === savedIDs[i][0] && category === savedIDs[i][1]) {
                imgSave.setAttribute('src', 'https://www.freeiconspng.com/thumbs/check-tick-icon/tick-mark-icon-png-7.png');
            }
            else {
                imgSave.setAttribute('src', 'https://static.thenounproject.com/png/3162217-200.png');
            }
        }
        else {
            imgSave.setAttribute('src', 'https://static.thenounproject.com/png/3162217-200.png');
        }
        imgSave.setAttribute('class', 'save');
        imgSave.setAttribute('id', `saveB${i}${category}`)

        let saveButton = document.createElement('button');
        saveButton.setAttribute('class', 'save');
        saveButton.setAttribute('id', 'save');
        saveButton.setAttribute('onclick', `addToSaved(${arrayName}, ${i}, document.getElementById('saveB${i}${category}'))`);

        divImgBox.appendChild(imgSave);
        divImgBox.appendChild(saveButton);
        divImgBox.appendChild(imgItem);
        divSliderBox.appendChild(divImgBox);
        divSwiperSlide.appendChild(divSliderBox);
        divSwiperWrapper.appendChild(divSwiperSlide);
    }

    divSwiperContainer.appendChild(divSwiperWrapper);
    containerName.appendChild(divSwiperContainer);


}
function goToPage(arr, num) {
    // console.log(savedReviews.length);
    savedReviews.push(arr[num].oName);
    let tempArray = arr[num];
    window.open(arr[num].oLink, '_blank');
    saveToLocalStorage(tempArray, 'load-review');

}

imagesDisplay('games', 'gamesArr', gamesRow, gamesArr);
imagesDisplay('movies', 'moviesArr', moviesRow, moviesArr);
imagesDisplay('anime', 'animeArr', animeRow, animeArr);