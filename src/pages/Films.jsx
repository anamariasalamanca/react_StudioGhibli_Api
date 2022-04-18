import React, { useState, useEffect } from "react";
import { getFilms } from "../api/fetchToApi";
import FilmCard from "../components/FilmCard";
import "./Films.css";
const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms().then((data) => {
      setFilms(data);
    });
  }, []);

  console.log("Films:", films);

  return (
    <div>
      <h2>Films</h2>
      <hr />
      <div className="films-container">
      {films.map((film) => (
        <FilmCard key={film.id} film={film}/>
      ))}
      </div>
    </div>
  );
};

export default Films;