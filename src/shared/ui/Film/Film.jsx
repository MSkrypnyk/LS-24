import React from "react";
import PropTypes from "prop-types";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

export const Film = ({ film, handleToggleFavorite }) => {
  const handleFavoriteToggle = () => {
    handleToggleFavorite(film.id);
  };

  return (
    <div className="film">
      <img className="film-image" src={film.image} alt={film.title} />
      <div className="film-title">{film.title}</div>
      <div className="film-details">
        {film.year} | {film.genre}
      </div>
      <FavoriteButton
        isFavorited={film.isFavorited}
        handleToggleFavorite={handleFavoriteToggle}
      />
    </div>
  );
};

Film.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    isFavorited: PropTypes.bool.isRequired,
  }).isRequired,
  handleToggleFavorite: PropTypes.func.isRequired,
};
