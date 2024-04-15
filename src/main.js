import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchCards } from './js/pixabay-api';
import { renderCards } from './js/render-functions';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const cardsList = document.querySelector('.card-list');
const loadMoreBtn = document.querySelector('.load-more-btn');
const loader = document.querySelector('.loader');

let currentPage = 1;
let searchQuery = '';

searchForm.addEventListener('submit', onSearchFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearchFormSubmit(e) {
  e.preventDefault();
  searchQuery = searchInput.value.trim();
  if (!searchQuery) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  currentPage = 1;
  cardsList.innerHTML = '';
  toggleLoader();
  try {
    const data = await fetchCards(searchQuery, currentPage);
    renderCards(cardsList, data);
    showLoadMoreBtn(data.hits.length);
    searchInput.value = '';
  } catch (error) {
    handleError(error);
  } finally {
    toggleLoader();
  }
}

async function onLoadMore(e) {
  e.preventDefault();
  currentPage++;
  toggleLoader();
  try {
    const data = await fetchCards(searchQuery, currentPage);
    renderCards(cardsList, data);
    showLoadMoreBtn(data.hits.length);
    handleLoadMore(data);
    smoothScrollToNextGroup();
  } catch (error) {
    handleError(error);
  } finally {
    toggleLoader();
  }
}

function smoothScrollToNextGroup() {
  const cardHeight = cardsList
    .querySelector('.card-item')
    .getBoundingClientRect().height;
  window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
}

function toggleLoader() {
  loader.classList.toggle('is-hidden');
}

function showLoadMoreBtn(numOfResults) {
  if (numOfResults > 0) {
    loadMoreBtn.classList.remove('is-hidden');
  } else {
    loadMoreBtn.classList.add('is-hidden');
  }
}

function handleError(error) {
  iziToast.error({
    title: 'Error',
    message: 'Failed to fetch images. Please try again later.',
    position: 'topRight',
  });
  console.error('Fetch error:', error);
}

function handleLoadMore(data) {
  const totalHits = data.totalHits || 0;
  const currentImagesCount = cardsList.querySelectorAll('.card-item').length;

  if (totalHits <= currentImagesCount) {
    loadMoreBtn.classList.add('is-hidden');
    iziToast.info({
      title: 'End of Results',
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  }
}
