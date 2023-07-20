const API = 'https://api.thecatapi.com/v1';
const API_KEY =
  'api_key=live_5gjCKPHcZgibL1vzu3k9EPtHv0LU2qN7y7CQECh7bxvIl56X9p10gaK6mVyAdIqX';

const oneCatBtn = document.querySelector('#regenerate');
const threeCatsBtn = document.querySelector('#regenerate-all');
const img = document.querySelector('img');
const images = document.getElementsByTagName('img');

// consult the API
async function fetchCat(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

// return just one cat
const insertOneCat = async () => {
  try {
    const cat = await fetchCat(`${API}/images/search`);
    img.src = cat[0].url;

    images[1].parentElement.classList.add('hidden');
    images[2].parentElement.classList.add('hidden');
  } catch (error) {
    throw new Error(error);
  }
}

// return three cats
const insertThreeCats = async () => {
  try {
    // const allCats = await fetchCat(
    //   `${API}/images/search?limit=3&api_key=${API_KEY}`
    // ); // with api_key we can get just 3 cats
    const allCats = await fetchCat(`${API}/images/search?limit=3`); // without api_key just we can get 10 cats
    console.log(allCats);
    const cats = allCats.slice(0, 3);

    const arrImages = [...images];

    arrImages.forEach((image, item) => {
      image.src = cats[item].url;
      image.parentElement.classList.remove('hidden');
    });
  } catch (error) {
    throw new Error(error);
  }
};

// return just one cat
const insertFavoritesCats = async () => {
  try {
    const cat = await fetchCat(`${API}/favourites?${API_KEY}`);

    console.log(cat);
  } catch (error) {
    throw new Error(error);
  }
}

oneCatBtn.addEventListener('click', insertOneCat);
threeCatsBtn.addEventListener('click', insertThreeCats);

insertOneCat();
insertFavoritesCats();