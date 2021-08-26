'use strict';

var homeLoadArr = [];

function readFromLocalStorage() {
  var stringObj = localStorage.getItem('load-saved');
  var normalObj = JSON.parse(stringObj);

  if (normalObj) {
    saveArray = normalObj;

    for (var i = 0; i < saveArray.length; i++) {
      savedReviews.push(saveArray[i][0]);
      var temp = [saveArray[i][3], saveArray[i][4]];
      savedIDs[i] = temp;
    }
  }
}

readFromLocalStorage();

function imagesDisplay(category, arrayName, containerName, array) {
  var divSwiperContainer = document.createElement('div');
  divSwiperContainer.setAttribute('class', 'swiper-container');
  var divSwiperWrapper = document.createElement('div');
  divSwiperWrapper.setAttribute('class', 'swiper-wrapper');

  for (var i = 0; i < array.length; i++) {
    var divSwiperSlide = document.createElement('div');
    divSwiperSlide.setAttribute('class', 'swiper-slide');
    var divSliderBox = document.createElement('div');
    divSliderBox.setAttribute('class', 'slider-box');
    var divImgBox = document.createElement('div');
    divImgBox.setAttribute('class', 'img-box');
    var imgItem = document.createElement('img');
    imgItem.setAttribute('src', array[i].oImage);
    imgItem.setAttribute('alt', array[i].oName);
    imgItem.setAttribute('onclick', "goToPage(".concat(arrayName, ", ").concat(i, ")"));
    var divpopup = document.createElement('div');
    divpopup.setAttribute('class', 'divPopup');
    var popup = document.createElement('div');
    popup.setAttribute('class', 'popup');
    var popSpan = document.createElement('span');
    popSpan.setAttribute('class', 'popuptext');
    popSpan.setAttribute('id', "myPopup".concat(i));
    popSpan.innerHTML = 'Saved';
    var linkSave = document.createElement('a');
    linkSave.setAttribute('class', 'saveLink');
    linkSave.innerHTML = '<i class="fas fa-bookmark"></i>';
    linkSave.setAttribute('onclick', "addToSaved(".concat(arrayName, ", ").concat(i, ")"));
    var titleEl = document.createElement('h3');
    titleEl.setAttribute('class', 'itemTitle');
    titleEl.textContent = array[i].oName;
    var divStar = document.createElement('div');
    divStar.setAttribute('class', 'divStar');
    divStar.innerHTML = "\n            <span class=\"fa fa-star checked\"></span>\n            <span class=\"fa fa-star checked\"></span>\n            <span class=\"fa fa-star checked\"></span>\n            <span class=\"fa fa-star\"></span>\n            <span class=\"fa fa-star\"></span>\n        ";
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
  var tempArray = arr[num];
  window.open(arr[num].oLink, '_self');
  saveToLocalStorage(tempArray, 'load-review');
}

imagesDisplay('games', 'gamesArr', gamesRow, gamesArr);
imagesDisplay('movies', 'moviesArr', moviesRow, moviesArr);
imagesDisplay('anime', 'animeArr', animeRow, animeArr);