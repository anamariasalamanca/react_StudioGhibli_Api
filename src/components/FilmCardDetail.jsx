import React from "react";
import { Link } from "react-router-dom";
import "./FilmCardDetail.css";
const FilmCardDetail = ({ film }) => {
  return (
    <div className="film-card-detail">
      <Link to="/films">← Go back to films</Link>
      <h4 className="japenese">{film.original_title}</h4>
      <h4>{film.original_title_romanised}</h4>
      <h4>{film.title}</h4>

      <img src={film.movie_banner} alt={`${film.title} banner`} />
      <h5>
        <span>Director - </span>
        {film.director}
      </h5>
      <h5>
        <span>Producer - </span>
        {film.producer}
      </h5>
      <h5>
        <span>Release Date - </span>
        {film.release_date}
      </h5>
      <h5>
        <span>Running Time - </span>
        {film.running_time}
      </h5>
      <img src={film.image} alt={`${film.title} poster`} />
      <h5>Plot: </h5>
      <p>{film.description}</p>
      <Link to="/films">← Go back to films</Link>
    </div>
  );
};

export default FilmCardDetail;