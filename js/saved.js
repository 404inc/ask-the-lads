'use strict'
let output = document.getElementById('output');

let tempArray = [];

function readFromLocalStorage() 
{
    let stringObj = localStorage.getItem('load-saved');
    let normalObj = JSON.parse(stringObj);

    if (normalObj) 
    {
        tempArray = normalObj;
        // renderOrders();
    }
}
readFromLocalStorage();
function displayer()
{
    output.innerHTML = '';
    let ulEl2 = document.createElement('ul');
    for (let i = 0; i < tempArray.length; i++) {
        let liEl = document.createElement('li');
        let linkEl = document.createElement('a');
        linkEl.setAttribute('href', tempArray[i][2]);
        linkEl.textContent = tempArray[i][0];

        let img = document.createElement('img');
        img.setAttribute('src', tempArray[i][1]);
        img.setAttribute('alt', `${tempArray[i][0]} image`);
        img.setAttribute('width', 100);
        img.setAttribute('height', 50);

        let delButton = document.createElement('button');
        delButton.setAttribute('class', 'delButtonJs');
        delButton.textContent = 'delete';

        delButton.setAttribute('onclick', `removeItem(${i})`);

        liEl.appendChild(delButton);
        liEl.appendChild(img);
        liEl.appendChild(linkEl);
        ulEl2.appendChild(liEl);
    }
    output.appendChild(ulEl2);
}
displayer();

function removeItem(id){
    if(id === tempArray[id][3])
    {
        tempArray.splice(id, 1);
            for (let i = 0; i < tempArray.length; i++) {
                if(tempArray[i][3] > id)
                {
                    tempArray[i][3]--;
                }
            }
        // console.log(tempArray);
        saveToLocalStorage(tempArray, 'load-saved');
        displayer();
    }
    else
    {
        tempArray.splice(id, 1);
        saveToLocalStorage(tempArray, 'load-saved');
        displayer();
    }
}