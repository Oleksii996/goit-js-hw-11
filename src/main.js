//У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі. Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.

// main.js
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form ? form.querySelector('input[name="search-text"]') : null;

if (!form || !input) {
  console.warn(
    "main.js: не знайдено форми або поля вводу. Переконайся у наявності .form та input[name='search-text']."
  );
}

form?.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();

  const query = input.value.trim();

  // Перевірка на порожній рядок (всі нотифікації та перевірки робимо тут)
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  // Починаємо запит
  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    // data — об'єкт відповіді від Pixabay, hits — масив зображень
    const hits = Array.isArray(data?.hits) ? data.hits : [];

    if (hits.length === 0) {
      iziToast.info({
        title: 'No results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      hideLoader();
      return;
    }

    // При результаті - рендер
    createGallery(hits);

    iziToast.success({
      title: 'Found',
      message: `Found ${data.totalHits ?? hits.length} images.`,
      position: 'topRight',
      timeout: 1500,
    });
  } catch (error) {
    console.error('Fetch error:', error);
    iziToast.error({
      title: 'Request failed',
      message:
        'Something went wrong while fetching images. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
