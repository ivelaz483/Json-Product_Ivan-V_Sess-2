const placesDOM = document.querySelector('.map');
//const url = "https://api.jsonbin.io/b/6256245cdc6e0124e8bfa8e5";


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
    .map((map) => {
      const { id } = map;
      const { name } = map;
      const { image } = map;
      //const {mapdetails} = ;
      
      // id,name,price,img
      return `<a class="single-product" href="productpage.html?id=${id}">
            <img src="${image}" width="500" height="600" class="single-product-img img" alt="${name}" />
            <footer>
              <h5 class="name">${name}</h5>
               
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
