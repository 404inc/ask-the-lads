let objectsArr = [];
const searchBar = document.getElementById('searchBar');
const ulEl = document.getElementById('list');
const listDivEl = document.querySelector('.search-input');

searchBar.addEventListener('keyup', (e) =>{
    const searchString = e.target.value.toLowerCase();
    
        const filteredObjects = objectsArr.filter(object => {
            return object.oName.toLowerCase().includes(searchString);
        });
        console.log(filteredObjects);
        display(filteredObjects);
        listDivEl.classList.add("active");
    
    if(searchBar.value.length == 0)
    {
        listDivEl.classList.remove("active");
    }
    
});

function Objects(oName, oDis, oLink)
{
    this.oName = oName;
    this.oDis = oDis;
    this.oLink = oLink;
    objectsArr.push(this);
}

new Objects('Naruto storm 4', 'Best Game', 'https://via.placeholder.com/800x800');
new Objects('Naruto storm 1', 'Great Game', 'https://via.placeholder.com/800x800');
new Objects('Elden Ring', 'I doubt you could even imagine it', 'https://via.placeholder.com/800x800');
new Objects('Dark Souls 3', 'Big Bonk', 'https://via.placeholder.com/800x800');
new Objects('Resident Evil 2 Remake', 'X gonna give it to ya', 'https://via.placeholder.com/800x800');
new Objects('Bloodborne', 'fear the old blood', 'https://via.placeholder.com/800x800');
console.log(objectsArr);

function display(arr)
{
    ulEl.innerHTML = '';
    for(let i = 0; i < arr.length; i++)
    {
        let liEl = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute('href', arr[i].oLink)
        link.textContent = arr[i].oName;
        liEl.appendChild(link);
        ulEl.appendChild(liEl);
    }
}
// display(objectsArr);