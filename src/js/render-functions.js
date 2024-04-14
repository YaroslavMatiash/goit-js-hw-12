import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const instance = new SimpleLightbox('.card-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function renderCards(cardsList, data) {
  if (!data.hits.length) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }
  const markup = getMarkup(data.hits);
  cardsList.insertAdjacentHTML('beforeend', markup);
  instance.refresh();
}

export function getMarkup(data) {
  return data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="card-item">
  <a href=${largeImageURL}
    ><img src=${webformatURL} alt="${tags}" height="300"/>
    <ul class="card-info">
      <li>
        Likes
        <p>${likes}</p>
      </li>
      <li>
        Views
        <p>${views}</p>
      </li>
      <li>
        Comments
        <p>${comments}</p>
      </li>
      <li>
        Downloads
        <p>${downloads}</p>
      </li>
    </ul></a
  >
</li>`
    )
    .join('');
}
