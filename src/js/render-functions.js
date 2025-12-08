/* 
У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:

//createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
//clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
//showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
//hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає. 
// */

// render-functions.js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loaderElement = document.querySelector('.loader'); // очікується елемент для лоадера
if (!galleryContainer) {
  console.warn(
    'render-functions.js: не знайдено елемент з класом .gallery — створіть його в HTML'
  );
}

// Ініціалізація SimpleLightbox для селектора посилань у галереї
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

/**
 * Створює HTML-розмітку та додає у контейнер.
 * Викликає lightbox.refresh().
 * @param {Array} images - масив об'єктів з API (hits)
 */
export function createGallery(images) {
  if (!Array.isArray(images) || images.length === 0) return;

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              loading="lazy"
            />
          </a>
          <ul class="info">
            <li><b>Likes</b> ${likes}</li>
            <li><b>Views</b> ${views}</li>
            <li><b>Comments</b> ${comments}</li>
            <li><b>Downloads</b> ${downloads}</li>
          </ul>
        </li>
      `;
      }
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

/** Очищає вміст контейнера галереї */
export function clearGallery() {
  if (!galleryContainer) return;
  galleryContainer.innerHTML = '';
}

/** Показати лоадер — додаємо клас is-loading (стилі лоадера повинен реалізувати ти) */
export function showLoader() {
  if (!loaderElement) return;
  loaderElement.classList.add('is-loading');
}

/** Сховати лоадер */
export function hideLoader() {
  if (!loaderElement) return;
  loaderElement.classList.remove('is-loading');
}
