const url ="https://api.jsonbin.io/b/6256245cdc6e0124e8bfa8e5";

const placesDOM = document.querySelector('.output');

const fetchProducts = async () => {
  placesDOM.innerHTML = '<div class="loading"></div>';
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    placesDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};

const displayProducts = (list) => {
  const placeList = list
    .map((output) => {
      const { id } = output;
      const { name} = output;
      const {url: img } = output.fields.image[0];
      
      // id,name,price,img
      return `<a class="single-product" href="productpage.html?id=${id}">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
               
            </footer>
          </a>`;
    })
    
    .join('');
  placesDOM.innerHTML = ` <div class="products-container">
         ${placeList}
          
        </div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
