








var item = localStorage.getItem("map");
console.log(item);
var list = localStorage.getItem("myList");
const myList = JSON.parse(list);
var i = Number(item);

var map = document.querySelector(".map");

function makeMap() {
    var item = myList[i];
    var img = document.createElement('img');
    var content = document.createElement('div');
    content.className = "content";
    img.src = `${item.image}`;
    img.style.width = "400px";
    img.id = "item-image";
    var add = document.createElement('img');
    
    map.innerHTML=`<img src = ${item.image} width="100%" height="auto" >`
}
makeMap();
