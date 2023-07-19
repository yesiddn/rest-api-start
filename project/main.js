const API = 'https://api.thecatapi.com/v1/images/search';

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
    const cat = await fetchCat(API);
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
    const allCats = await fetchCat(`${API}?limit=10`);
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

oneCatBtn.addEventListener('click', insertOneCat);
threeCatsBtn.addEventListener('click', insertThreeCats);

insertOneCat();