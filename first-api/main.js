const API = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector('button');
const img = document.querySelector('img');

const insertCat = async () => {
  try {
    const cat = await fetchCat(API);
    img.src = cat[0].url;
  } catch (error) {
    throw new Error(error);
  }
}

async function fetchCat(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}


window.addEventListener('load', insertCat);
btn.addEventListener('click', insertCat);
