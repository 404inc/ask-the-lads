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

        let divpopup = document.createElement('div');
        divpopup.setAttribute('class', 'divPopup');
        let popup = document.createElement('div');
        popup.setAttribute('class', 'popup');
        let popSpan = document.createElement('span');
        popSpan.setAttribute('class', 'popuptext');
        popSpan.setAttribute('id', `myPopup${i}`);
        popSpan.innerHTML = 'Saved';

        let linkSave = document.createElement('a');
        linkSave.setAttribute('class', 'saveLink');
        linkSave.innerHTML = "<i class=\"fas fa-bookmark\"></i>";

        linkSave.setAttribute('onclick', `addToSaved(${arrayName}, ${i})`);

        let titleEl = document.createElement('h3');
        titleEl.setAttribute('class', 'itemTitle');
        titleEl.textContent = array[i].oName;

        let divStar = document.createElement('div');
        divStar.setAttribute('class', 'divStar');
        divStar.innerHTML = 
        `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        `;


        popup.appendChild(popSpan);
        divpopup.appendChild(popup);
        divImgBox.appendChild(divStar);
        divImgBox.appendChild(titleEl);
        divImgBox.appendChild(divpopup);
        divImgBox.appendChild(linkSave);
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