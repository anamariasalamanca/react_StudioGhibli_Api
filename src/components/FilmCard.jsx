import React from "react";
import { Link, generatePath } from "react-router-dom";
import "./FilmCard.css";
const FilmCard = ({ film }) => {
  return (
    <Link to={generatePath("/films/:id", { id: film.id })}>
      <div className="film-card">
        <h4 className="japanese">{film.original_title}</h4>
        <h4>{film.title}</h4>
        <img src={film.image} alt={film.title} />
      </div>
    </Link>
  );
};

export default FilmCard;
