export default function fetchPixabay(searchValue) {
  const API_KEY = '31407944-a77d666384d67064142e5c37e';

  return fetch(`https://pixabay.com/api/?q=${searchValue}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(
        new Error(`Немає зображення за запитом ${searchValue}`),
      );
    })
}