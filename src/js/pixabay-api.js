//У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:
// getImagesByQuery(query). Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.

// pixabay-api.js
import axios from 'axios';

const PIXABAY_API_KEY = '15998854-73128a3946d29211178091fd8';
const BASE_URL = 'https://pixabay.com/api/';

/**
 * Виконує запит до Pixabay і повертає response.data
 * @param {string} query - пошуковий рядок
 * @returns {Promise<object>} - об'єкт response.data від Pixabay
 */
export async function getImagesByQuery(query) {
  if (typeof query !== 'string') {
    throw new TypeError('query must be a string');
  }

  const params = {
    key: PIXABAY_API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40, // за бажанням можна змінити
  };

  const response = await axios.get(BASE_URL, { params });
  // Згідно з завданням — повертаємо властивість data
  return response.data;
}
