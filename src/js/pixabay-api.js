const API_KEY = '43258004-167cb59a45a78bad01bc517c7';
const BASE_URL = 'https://pixabay.com/api/?';

export function fetchCards(searchQuery) {
  const SEARCH_PARAMS = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}${SEARCH_PARAMS}`).then(res => {
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  });
}
