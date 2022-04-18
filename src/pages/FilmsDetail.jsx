
import React, { useState, useEffect } from "react";
import { getFilmById } from "../api/fetchToApi";
import { useParams } from "react-router-dom";
import FilmCardDetail from "../components/FilmCardDetail";
import NotFound from "../components/NotFound";
const FilmsDetail = () => {
  const [film, setFilm] = useState([]);
  let { id } = useParams("id");

  useEffect(() => {
    if (id)
      getFilmById(id).then((data) => {
        setFilm(data);
      });
  }, );

  return (
    <div>
      {film.length !== 0 ? <FilmCardDetail film={film} /> : <NotFound />}
    </div>
  );
};

export default FilmsDetail;