'use strict'; // let objectsArr = ['NARUTO SHIPPUDEN: Ultimate Ninja STORM 4', 'ELDEN RING', 
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

var objectsArr = [];
var gamesArr = [];
var moviesArr = [];
var animeArr = [];
var saveArray = [];
var savedReviews = [];
var savedIDs = [];
var messages = ['The narrative follows the young ninjas Naruto Uzumaki and Sasuke Uchiha as they participate in a world war between shinobi – the Fourth Shinobi World War – against the terrorist organization Akatsuki and unite to defeat it. Similar to Storm 3, the game uses regular fighting systems; however, players can switch among a team of three fighters who can assist each other. Other returning elements involve boss fights, where quick time events are required to reach hidden scenes and hack and slash areas. ', 'The Golden Order has been broken. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. \nIn the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shattered.Marika\'s offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. \nA war that meant abandonment by the Greater Will. \nAnd now the guidance of grace will be brought to the Tarnished who were spurned by the grace of gold and exiled from the Lands Between. \nYe dead who yet live, your grace long lost, follow the path to the Lands Between beyond the foggy sea to stand before the Elden Ring. \nAnd become the Elden Lord.', 'Dark Souls III is an action role-playing game played in a third-person perspective, similar to previous games in the series. According to lead director and series creator Hidetaka Miyazaki, the game\'s gameplay design followed "closely from Dark Souls II". Players are equipped with various weapons to fight against enemies, such as bows, throwable projectiles, and swords. Shields can act as secondary weapons, but they are mainly used to deflect enemies\' attacks and protect the player from suffering damage.', 'Red Dead Redemption 2 (stylized as Red Dead Redemption II) is a western-themed action-adventure video game developed and published by Rockstar Games. It is the third entry in the Red Dead series and a prequel to 2010\'s Red Dead Redemption and was released on October 26th, 2018 on PlayStation 4, Xbox One and on November 5th, 2019 for PC. Set in a fictional recreation of the American Old West in 1899, Red Dead Redemption 2 focuses on the life of Arthur Morgan and his position in the notorious Van der Linde gang. The game follows the gang\'s decline as they are pursued by lawmen, fellow gangs and Pinkerton agents. The narrative revolves around the characters of Dutch van der Linde, John Marston and Micah Bell in addition to Morgan.', 'Retired from fortune-hunting, Drake is suddenly forced back into the world of thieves. With the stakes much more personal, he embarks on a globe-trotting journey in pursuit of a historical conspiracy behind a fabled pirate treasure. His greatest adventure will test his physical limits, his resolve, and ultimately what he’s willing to sacrifice to save the ones he loves.', 'The game takes place in a realistic and modern setting. The campaign follows a CIA officer and British SAS forces as they team up with rebels from the fictional country of Urzikstan, combating together against Russian forces who have invaded the country. The game\'s Special Ops mode features cooperative play missions that follow up the campaign\'s story. The multiplayer mode supports cross-platform multiplayer and cross-platform progression for the first time in the series. It has been reworked for gameplay to be more tactical and introduces new features, such as a Realism mode that removes the HUD as well as a form of the Ground War mode that now supports 64 players.', 'Bloodborne follows the player\'s character, a Hunter, through the decrepit Gothic, Victorian-era–inspired city of Yharnam, whose inhabitants are afflicted with a blood-borne disease. Attempting to find the source of the plague, the player\'s character unravels the city\'s mysteries while fighting beasts and cosmic beings. The game is played from a third-person perspective. Players control a customizable protagonist, and the gameplay is focused on strategic weapons-based combat and exploration. Players battle varied enemies while using items such as swords and firearms, exploring different locations, interacting with non-player characters, and unravelling the city\'s mysteries.', 'Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they\'ve ever encountered -- Dom\'s forsaken brother.', 'Paranormal investigators Ed and Lorraine Warren take on one of the most sensational cases of their careers after a cop stumbles upon a dazed and bloodied young man walking down the road. Accused of murder, the suspect claims demonic possession as his defense, forcing the Warrens into a supernatural inquiry unlike anything they\'ve ever seen before.', 'Henry Brogan is an elite 51-year-old assassin who\'s ready to call it quits after completing his 72nd job. His plans get turned upside down when he becomes the target of a mysterious operative who can seemingly predict his every move. To his horror, Brogan soon learns that the man who\'s trying to kill him is a younger, faster, cloned version of himself.', 'A father brings up his baby girl as a single dad after the unexpected death of his wife who died a day after their daughter\'s birth.', 'Bullied as a teen for being overweight, Bob Stone (Dwayne Johnson) shows up to his high school reunion looking fit and muscular. While there, he finds Calvin Joyner (Kevin Hart), a fast-talking accountant who misses his glory days as a popular athlete. Stone is now a lethal CIA agent who needs Calvin\'s number skills to help him save the compromised U.S. spy satellite system. Together, the former classmates encounter shootouts, espionage and double-crosses while trying to prevent worldwide chaos.', 'The new adventure begins when a cyberattack reveals the identities of all active undercover agents in Britain, leaving Johnny English as the secret service\'s last hope. Called out of retirement, English dives headfirst into action with the mission to find the mastermind hacker. As a man with few skills and analogue methods, Johnny English must overcome the challenges of modern technology to make this mission a success.', 'Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that\'s a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.', 'Naruto: Shippuden sets on a fictionalized Earth where people are born with innate, elemental chakra powers. The world, as it exists, is divided into five global powers and some smaller countries. These countries are named and organized around the dominant elemental trait of the people who live there.', 'Naruto was a young shinobi with an incorrigible knack for mischief. He achieved his dream to become the greatest ninja in the village and his face sits atop the Hokage Monument. But this is not his story. A new generation of ninja are ready to take the stage, led by Naruto\'s own son, Boruto.', 'The story follows Light Yagami, a teen genius who discovers a mysterious notebook: the "Death Note", which belonged to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages.', 'The story takes place in Taishō-era Japan. It follows Tanjiro Kamado and his sister Nezuko Kamado as they seek a cure for Nezuko\'s demon curse. Tanjiro and Nezuko become entangled in the affairs of a secret society, known as the Demon Slayer Corps, that has been waging a secret war against demons for centuries.', 'Premise. The series focuses on Monkey D. Luffy, a young man who, inspired by his childhood idol and powerful pirate "Red Haired" Shanks, sets off on a journey from the East Blue Sea to find the titular treasure and proclaim himself the King of the Pirates.', 'The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or hunting down lawless individuals. Gon departs on a journey to become a Hunter and eventually find his father. Along the way, Gon meets various other Hunters and encounters the paranormal.', 'The plot of Attack on Titan centers on a civilization inside three walls, the last location where humans still live. Over one hundred years ago, humanity was driven to the brink of extinction after the emergence of humanoid giants called Titans, who attack and eat humans on sight.'];
var trailers = ['https://www.youtube.com/watch?v=SeBnDAD7mHE', 'https://www.youtube.com/watch?v=E3Huy2cdih0', 'https://www.youtube.com/watch?v=_zDZYrIUgKE', 'https://www.youtube.com/watch?v=eaW0tYpxyp0', 'https://www.youtube.com/watch?v=hh5HV4iic1Y', 'https://www.youtube.com/watch?v=bH1lHCirCGI', 'https://www.youtube.com/watch?v=G203e1HhixY', 'https://www.youtube.com/watch?v=FUK2kdPsBws', 'https://www.youtube.com/watch?v=h9Q4zZS2v1k', 'https://www.youtube.com/watch?v=AbyJignbSj0', 'https://www.youtube.com/watch?v=T3mwUEoZdrI', 'https://www.youtube.com/watch?v=0FKctBraQj0', 'https://www.youtube.com/watch?v=-Qv6p6pTz5I', 'https://www.youtube.com/watch?v=WvOgvFtcIAw', 'https://www.youtube.com/watch?v=thh7bVCgDHs', 'https://www.youtube.com/watch?v=ppLE9xycGm4', 'https://www.youtube.com/watch?v=tJZtOrm-WPk', 'https://www.youtube.com/watch?v=VQGCKyvzIM4', 'https://www.youtube.com/watch?v=S8_YwFLCh4U', 'https://www.youtube.com/watch?v=d6kBeJjTGnY', 'https://www.youtube.com/watch?v=MGRm4IzK1SQ'];
var searchBar = document.getElementById('searchBar');
var ulEl = document.getElementById('list');
var listClass = document.querySelector('listC');
var listDivEl = document.querySelector('.search-input');
var gamesRow = document.getElementById('gamesRow');
var moviesRow = document.getElementById('moviesRow');
var animeRow = document.getElementById('animeRow');
var addItemId = 0;

function getRandomInt() {
  var min = 100;
  var max = 10000;
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function saveToLocalStorage(arr, key) {
  var data = JSON.stringify(arr);
  localStorage.setItem(key, data);
}

searchBar.addEventListener('keyup', function (e) {
  var searchString = e.target.value.toLowerCase();
  var filteredObjects = objectsArr.filter(function (object) {
    return object.oName.toLowerCase().includes(searchString);
  }); // console.log(filteredObjects);

  listDivEl.classList.add('active');
  searchDisplay(filteredObjects);

  if (searchBar.value.length === 0) {
    listDivEl.classList.remove('active');
  }
});

function Objects(oName, oDis, oImage, oHero, category, trailer, commentsA) {
  this.oName = oName;
  this.oDis = oDis;
  this.oLink = 'review.html';
  this.oImage = oImage;
  this.oHero = oHero;
  this.category = category;
  this.trailer = trailer;
  this.commentsA = commentsA;

  if (category === 'games') {
    gamesArr.push(this);
  } else if (category === 'movies') {
    moviesArr.push(this);
  } else if (category === 'anime') {
    animeArr.push(this);
  }

  objectsArr.push(this);
} //// Name, description, image path, hero path, category.


new Objects('NARUTO SHIPPUDEN: Ultimate Ninja STORM 4', messages[0], './img/narutoStorm4.png', '../img/stormHero.jpg', 'games', trailers[0], []);
new Objects('ELDEN RING', messages[1], './img/eldenring.jpg', '../img/eldenhero.jpg', 'games', trailers[1], []);
new Objects('Dark Souls 3', messages[2], './img/Dark-Souls.jpg', '../img/darksouls3Hero.jpg', 'games', trailers[2], []);
new Objects('Red Dead Redemption 2', messages[3], './img/reddeadredemption2.jpg', '../img/redDeadHero.jpg', 'games', trailers[3], []);
new Objects('Uncharted 4: A Thiefs End', messages[4], './img/unch4.jpg', '../img/unCh4Hero.jpg', 'games', trailers[4], []);
new Objects('Call of Duty: Modern Warfare', messages[5], './img/modernwarfare19.jpg', '../img/callOfDutyHero.jpg', 'games', trailers[5], []);
new Objects('Bloodborne', messages[6], './img/bloodborne.jpg', '../img/bloodborneHero.jpg', 'games', trailers[6], []);
new Objects('Fast and Furious 9', messages[7], './img/FF9.jpg', '../img/ff9Hero.jpg', 'movies', trailers[7], []);
new Objects('The Conjuring: The Devil Made Me Do It', messages[8], './img/conjuring.jpeg', '../img/conHero.jpg', 'movies', trailers[8], []);
new Objects('Gemini Man', messages[9], './img/geminiman.jpg', 'https://mocah.org/uploads/posts/305649-Gemini-Man-Movie-Poster-Will-Smith-4K.jpg', 'movies', trailers[9], []);
new Objects('Fatherhood', messages[10], './img/fatherhood.jpg', '../img/fatherhoodHero.jpg', 'movies', trailers[10], []);
new Objects('Central Intelligence', messages[11], './img/central-intelligence.jpg', 'https://miro.medium.com/max/3840/1*5aO3F4xmS-J1eGvKk3XwuQ.jpeg', 'movies', trailers[11], []);
new Objects('Johnny English Strikes Again', messages[12], './img/JE.jpg', 'https://material.asset.catchplay.com/NBC-IN-001-A1154/artworks/posters/NBC-IN-001-A1154-P544.jpg?hash=1627551321', 'movies', trailers[12], []);
new Objects('The Croods 2: A New Age', messages[13], './img/thecroods.jpg', 'https://movies.universalpictures.com/media/croods-mobile-1080x745-5f654de4efbe1-1.png', 'movies', trailers[13], []);
new Objects('Naruto Shippuden', messages[14], './img/NS.jpg', 'https://www.gojinshi.com/wp-content/uploads/2020/07/Naruto-Shippuden-Filler-Episodes-List-1024x538.jpg', 'anime', trailers[14], []);
new Objects('Boruto: Naruto Next Generations', messages[15], './img/BNNG.jpg', 'https://img4.hulu.com/user/v3/artwork/e567be4f-2fd8-4127-bc08-580baad908e3?base_image_bucket_name=image_manager&base_image=a91d87f4-f239-4792-9266-b047a2546dea&size=1200x630&format=jpeg', 'anime', trailers[15], []);
new Objects('Death Note', messages[16], './img/DN.jpeg', 'https://img3.hulu.com/user/v3/artwork/9065c6f1-4d2d-4150-a1ef-58bced498809?base_image_bucket_name=image_manager&base_image=76ff493f-55aa-4f5b-b9f0-d22ce651a57c&region=US&format=jpeg&size=952x536', 'anime', trailers[16], []);
new Objects('Demon Slayers', messages[17], './img/demonslayer.jpg', 'https://store-images.s-microsoft.com/image/apps.18969.14398749872176704.f59f9492-0750-4d03-9a2d-acee18167bb9.40c2a4db-e37d-48f1-a8e0-ff5213d9d6b8?mode=scale&q=90&h=720&w=1280', 'anime', trailers[17], []);
new Objects('One Piece', messages[18], './img/oneP.png', 'https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/04/Featured-Image-One-Piece-Stampede-Cropped.jpg', 'anime', trailers[18], []);
new Objects('Hunter x Hunter', messages[19], './img/HxH.jpg', 'https://www.whats-on-netflix.com/wp-content/uploads/2021/06/seasons-5-6-of-hunter-x-hunter-is-coming-to-netflix-in-july-2021.png', 'anime', trailers[19], []);
new Objects('Attack on Titan', messages[20], './img/AoT.jpg', 'https://otakukart.com/wp-content/uploads/2021/05/featured-imagee.jpg', 'anime', trailers[20], []); // console.log(objectsArr);
// console.log(gamesArr);
// console.log(moviesArr);
// console.log(animeArr);
// console.log(gameIdNumber);
// console.log(movieIdNumber);
// console.log(animeIdNumber);

function searchDisplay(arr) {
  ulEl.innerHTML = '';

  for (var i = 0; i < arr.length; i++) {
    var liEl = document.createElement('li'); // let link = document.createElement('a');

    liEl.textContent = arr[i].oName; // link.addEventListener('click', searchForThePage(arr[i].oName));

    liEl.setAttribute('onclick', "searchForThePage('".concat(arr[i].oName, "')")); // liEl.appendChild(link);

    ulEl.appendChild(liEl);
  }
}

function searchForThePage(name) {
  console.log(name);

  for (var i = 0; i < objectsArr.length; i++) {
    if (name === objectsArr[i].oName) {
      var tempArray = objectsArr[i];
      console.log(tempArray);
      window.open(tempArray.oLink, '_self');
      saveToLocalStorage(tempArray, 'load-review');
    }
  }
}

function addToSaved(arr, num) {
  var breakAll = false;

  if (savedReviews.length === 0) {
    savedReviews.push(arr[num].oName);
    var sendArr = [arr[num].oName, arr[num].oImage, arr[num].oLink, addItemId++, arr[num].category];
    saveArray.push(sendArr);
    saveToLocalStorage(saveArray, 'load-saved');
  } else {
    for (var i = 0; i < savedReviews.length; i++) {
      if (savedReviews[i] === arr[num].oName) {
        breakAll = true;
        savedIDs.push(num);
        console.log(breakAll);
        break;
      }
    }

    if (breakAll) {
      // console.log(document.getElementById('myPopup'));
      popupSaved(num);
    } else {
      savedReviews.push(arr[num].oName);
      var _sendArr = [arr[num].oName, arr[num].oImage, arr[num].oLink, addItemId++, arr[num].category];
      saveArray.push(_sendArr);
      saveToLocalStorage(saveArray, 'load-saved');
    }
  }
}

function popupSaved(id) {
  var popup = document.getElementById("myPopup".concat(id));
  popup.classList.toggle('show');
  setTimeout(function () {
    popup.classList.remove('show');
  }, 2000);
}