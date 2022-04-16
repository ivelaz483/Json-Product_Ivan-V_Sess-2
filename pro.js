const output = document.querySelector('.output');


console.log(output);
const url = 'product.json';
let myList = [];
let localData = localStorage.getItem('myList');
console.log(localData);

        myList= JSON.parse(localStorage.getItem("myList"));
console.log(myList);
        jsloader();
    




function jsloader() {
    fetch(url).then(rep => rep.json())
        .then((data) => {
            myList = data;
            maker();
            savetoStorage();
        });
}


function maker() {
   
    output.innerHTML = '';
    myList.forEach((el, index) => {
        makeList(el, index);
    });
}

function makeList(item, index) {
    const div = document.createElement('div');
    div.innerHTML=`${item.image}`;
    
    div.classList.add('box');
   
    div.innerHTML = `${item.name}`;
    div.innerHTML= `${item.address}`;
    div.innerHTML=`<iframe src = ${item.map} width="350" height="350"> </iframe>`;
    
    output.append(div);
    if (item.status) {
        div.classList.add('confirmed');
    } else {
        div.classList.add('notConfirmed')
    }
    div.addEventListener('click', (e) => {
        div.classList.toggle('confirmed');
        div.classList.toggle('notConfirmed');
        console.log(div.classList.contains('confirmed'));
        if (div.classList.contains('confirmed')) {
            myList[index].status = true;
        } else {
            myList[index].status = false;
        }
        savetoStorage();
    })

    
  

}

function savetoStorage() {
    console.log(myList);
    localStorage.setItem('myList', JSON.stringify(myList));
}

