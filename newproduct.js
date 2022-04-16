const placesDOM = document.querySelector('.map');
const url = "https://api.jsonbin.io/b/6256245cdc6e0124e8bfa8e5";

const fetchProducts = async () => {
  placesDOM.innerHTML = '<div class="loading"></div>';
  try {

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const resp = await fetch(`${url}?id=${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    placesDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};

const displayProducts = (list) => {
  const placeList = list
    .map((place) => {
      const { id } = map;
     // const { name: title } = place.fields;
      const {url : img } = map.image;
      //const {mapdetails} = ;
      
      // id,name,price,img
      return `<a class="single-product" href="place.html?id=${id}">
            <iframe src= ${mapdetails} </iframe>
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
               
            </footer>
          </a>`;
    })
    .join('');
  placesDOM.innerHTML = ` <div class="products-wrapper">
         ${placeList}
          
        </div>`;
};
const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
