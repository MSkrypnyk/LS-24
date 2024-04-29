import { useState, useEffect } from "react";
import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";
import { MainTrend } from "../../shared/ui/MainTrend/MainTrend";

export const Trending = () => {
  const [selectedFilmId, setSelectedFilmId] = useState(null);

  useEffect(() => {
    setSelectedFilmId(1);
  }, []);

  const handleFilmSelect = (filmId) => {
    if (selectedFilmId === filmId) {
      setSelectedFilmId(null);
    } else {
      setSelectedFilmId(filmId);
    }
  };

  return (
    <div>
      <Header />
      <div className="trending">
        <div className="title">Trending at this moment</div>
        <div className="trending-list">
          {films.map((film) => (
            <div
              key={film.id}
              className={`trending-item ${
                selectedFilmId === film.id ? "active" : "inactive"
              }`}
              onClick={() => handleFilmSelect(film.id)}
            >
              <Film film={film} handleToggleFavorite={() => {}} />
            </div>
          ))}
        </div>
        {selectedFilmId && (
          <div className="main-trend">
            <MainTrend filmId={selectedFilmId} />
          </div>
        )}
      </div>
    </div>
  );
};
