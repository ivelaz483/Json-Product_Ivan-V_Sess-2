let output = document.querySelector(".output");
//let output2 = document.querySelector(".output2");
const url = "product.json";
let myList = [];
let localDate = localStorage.getItem("myList");

myList = JSON.parse(localStorage.getItem("myList"));
console.log(myList);
jsloader();

function jsloader() {
    fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
        myList = data;
        maker();
        savetoStorage();
        dynamic();
    });
}

function maker() {
    if (document.body.contains(output)) {
        output.innerHTML = " ";
        myList.forEach((el, index) => {
            makeList(el, index);
        });
    }
else {
    dynamic();
}
}


function makeList(item, index) {
    const box = document.createElement('div');
    box.className = "box";
    const div = document.createElement('div');
    div.className = "text";
    const img = document.createElement("img");
    img.src = `${item.image}`;
    img.style.width= "300px";
    img.className = "image";
    /*const img2 = document.createElement("img");
    img2.src = `${item.image2}`;
    img2.style.width= "300px";
    img2.className = "image";*/
    //map.className="map";
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    h2.innerHTML = (index + 1) + ".  " + item.name;
    p.innerHTML = `${item.price}`;
    output.append(box);
    box.append(img);
    box.append(div);
    box.append(h2);
    div.append(p);
    savetoStorage();
}

/*img.addEventListener("click", change =>{
    img.style.display="none";
    map.innerHTML = "<iframe src = ${item.map} width="350" height="350"> </iframe>";
})*/

function savetoStorage() {
    localStorage.setItem("myList", JSON.stringify(myList));
}

function dynamic() {
    var image = document.getElementsByClassName("image");
    for (let i = 0; i < image.length; i++) {
        console.log(image);
        image[i].addEventListener("click", function () {
            if (image[i] === image[i]) {
                openInNewTab('productpage.html');
                localStorage.setItem("map", i);

            }
        });
            }
        }

        function openInNewTab(url) {
            const open = window.open(url, '_blank');
            open.focus();
        }

  