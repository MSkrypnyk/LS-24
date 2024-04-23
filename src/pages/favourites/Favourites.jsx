import React, { useState } from "react";
import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";
import { Footer } from "../../shared/ui/Footer/Footer";

export const Favourites = () => {
  const [filmsData, setFilmsData] = useState(films);

  const handleToggleFavorite = (filmId) => {
    const updatedFilms = filmsData.map((film) =>
      film.id === filmId ? { ...film, isFavorited: !film.isFavorited } : film
    );
    setFilmsData(updatedFilms);
  };
  const filteredFilms = filmsData.filter(film => film.id === 3 || film.id === 4).slice(0, 2);

  const listItems = filteredFilms.map((film)  => (
    <Film
      key={film.id}
      film={film}
      handleToggleFavorite={handleToggleFavorite}
    />
  ));

  return (
    <>
      <Header />
      <div className="favourites">
        <div className="title">Favourites</div>
        <div className="favourites-list">{listItems}</div>
      </div>

    </>
  );
};
