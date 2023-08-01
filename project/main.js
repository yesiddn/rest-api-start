const API = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_5gjCKPHcZgibL1vzu3k9EPtHv0LU2qN7y7CQECh7bxvIl56X9p10gaK6mVyAdIqX';

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

/**
 * Return a list of cats
 * @param {Array} cats
 * @param {String} btnMessage
 */
function renderCats(cats, btnMessage, typeFuntion) {
  const toRender = [];

  cats.toReversed().forEach((cat) => {
    const article = document.createElement('article');
    const img = document.createElement('img');
    const btn = document.createElement('button');
    const textBtn = document.createTextNode(btnMessage);

    if (typeFuntion === 'Random cat') {
      img.src = cat.url;
      btn.onclick = () => saveFavouriteCat(cat.id);
    } else if (typeFuntion === 'Favoite cat') {
      img.src = cat.image.url;
      btn.onclick = () => deleteFavouriteCat(cat.id);
    } else {
      btn.onclick = () => console.log('Function type not found');
    }

    btn.append(textBtn);
    img.classList.add('w-full', 'max-w-sm', 'rounded-lg');
    img.alt = typeFuntion;
    img.setAttribute('loading', 'lazy');

    article.append(img, btn);
    toRender.push(article);
  });

  return toRender;
}

// return just one cat
const insertOneCat = async () => {
  try {
    const cat = await fetchCat(`${API}/images/search`);
    const randomSection = document.querySelector('#random-michis');

    const toRender = renderCats(
      cat,
      'Guardar michi en favoritos',
      'Random cat'
    );

    randomSection.innerHTML = '';
    randomSection.append(...toRender);
  } catch (error) {
    throw new Error(error);
  }
};

// return three cats
const insertThreeCats = async () => {
  try {
    // const cats = await fetchCat(`${API}/images/search?limit=3`); // without api_key just we can get 10 cats
    const cats = await fetchCat(
      `${API}/images/search?limit=3&api_key=${API_KEY}`
    ); // with api_key we can get just 3 cats

    const randomSection = document.querySelector('#random-michis');

    const toRender = renderCats(
      cats,
      'Guardar michi en favoritos',
      'Random cat'
    );

    randomSection.innerHTML = '';
    randomSection.append(...toRender);
  } catch (error) {
    throw new Error(error);
  }
};

// save favourite cat
async function saveFavouriteCat(idCat) {
  try {
    // const response = await fetch(`${API}/favourites?${API_KEY}`, { // API Key as a query param
    const response = await fetch(`${API}/favourites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY, // API Key as a header
      },
      body: JSON.stringify({
        image_id: idCat,
      }),
    });
    const data = await response.json();

    console.log('Cat added to favourites');
    console.log(data);
    insertFavoutireCats();
  } catch (error) {
    throw new Error(error);
  }
}

// insert favourite cats
const insertFavoutireCats = async () => {
  try {
    const cats = await fetchCat(`${API}/favourites?api_key=${API_KEY}`);
    const favouritesSection = document.querySelector('#favourite-michis');
    
    const toRender = renderCats(
      cats,
      'Sacar al michi de favoritos',
      'Favoite cat'
    );

    favouritesSection.innerHTML = '';
    favouritesSection.append(...toRender);
  } catch (error) {
    throw new Error(error);
  }
};

// delete favourite cat
async function deleteFavouriteCat(idCat) {
  try {
    const response = await fetch(`${API}/favourites/${idCat}`, {
      method: 'DELETE',
      headers: {
        'x-api-key': API_KEY,
      },
    });
    const data = await response.json();

    console.log('Cat delete from favourites');
    console.log(data);
    insertFavoutireCats();
  } catch (error) {
    throw new Error(error);
  }
}

oneCatBtn.addEventListener('click', insertOneCat);
threeCatsBtn.addEventListener('click', insertThreeCats);

insertOneCat();
insertFavoutireCats();
