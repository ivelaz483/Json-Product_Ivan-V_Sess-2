const placesDOM = document.querySelector('.product');
const url = "https://api.jsonbin.io/b/623e3699a703bb674934adbb";

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
      const { id } = place;
      const { name: title } = place.fields;
      const {url : img } = place.fields.image[0];
      const {mapdetails} =place.fields;
      
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
