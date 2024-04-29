import { useState } from "react";
import { Header } from "../../shared/ui/Header/Header";
import { Watch } from "../../shared/ui/Watch/Watch";
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";
import { continueWatching } from "../../database/continueWatching";
import { ContinueWatching } from "../../shared/ui/ContinueWaching/ContinueWaching";

export const Home = () => {
  const [filmsData, setFilmsData] = useState(films);

  const handleToggleFavorite = (filmId) => {
    const updatedFilms = filmsData.map((film) =>
      film.id === filmId ? { ...film, isFavorited: !film.isFavorited } : film
    );
    setFilmsData(updatedFilms);
  };

  const listItems = filmsData.map((film) => (
    <Film
      key={film.id}
      film={film}
      handleToggleFavorite={handleToggleFavorite}
    />
  ));

  const continueWatchingItems = continueWatching.map((film) => (
    <ContinueWatching key={film.id} film={film} />
  ));

  return (
    <>
      <div className="home">
        <Header />
        <div className="home-content">
          <h2 className="home-title">Insider</h2>
          <p className="home-info">2022 | Comedy horror | 1 Season</p>
          <Watch />
        </div>
      </div>
      <div className="home__main">
        <h4 className="title main-title">Trending</h4>
        <div className="trending-list">{listItems}</div>
        <h4 className="title main-title">Continue watching</h4>
        <div className="continue-watching">{continueWatchingItems}</div>
      </div>
    </>
  );
};
