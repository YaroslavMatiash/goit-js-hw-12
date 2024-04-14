import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchCards } from './js/pixabay-api';
import { renderCards } from './js/render-functions';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const cardsList = document.querySelector('.card-list');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(e) {
  e.preventDefault();

  const searchQuery = searchInput.value.trim();
  if (!searchQuery) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  cardsList.innerHTML = '';
  toggleLoader();

  fetchCards(searchQuery)
    .then(data => {
      renderCards(cardsList, data);
      searchInput.value = '';
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
        position: 'topRight',
      });
      console.error('Fetch error:', error);
    })
    .finally(() => {
      toggleLoader();
    });
}

function toggleLoader() {
  loader.classList.toggle('is-hidden');
}
