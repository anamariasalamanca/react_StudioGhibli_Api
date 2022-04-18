const GHIBLIURL = "https://ghibliapi.herokuapp.com/films/";

export const getFilms = () => {
  return fetch(GHIBLIURL).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return [];
    }
  });
};

export const getFilmById = (id) => {
  return fetch(`${GHIBLIURL}${id}`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return [];
    }
  });
};
