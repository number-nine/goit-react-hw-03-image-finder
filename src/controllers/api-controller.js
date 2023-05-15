import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '35449391-877499d7e02cc8d7dbb493e51',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    // page: 1,
    // q: 'cat',
  },
};

export default async function getPictures({ query, page }) {
  console.log(query, page);
  options.params.q = query;
  options.params.page = page;
  
  try {
    console.log(await axios.get('', options));

  } catch (error) {
    Notify.info('Remote data unavailable. Parsing local data');
  }
}
