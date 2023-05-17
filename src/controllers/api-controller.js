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
  },
};

export default async function getPictures({page, query:q}) {
  options.params = { ...options.params, page, q };
  try {
    const { data } = await axios.get('', options);
    return data;
  } catch (error) {
    Notify.info('Remote data unavailable. Please try again later.');
  }
}
