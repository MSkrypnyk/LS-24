import React, { useState } from "react";
import { mainTrend } from "/src/database/mainTrend.js";
import { Button } from "../Button/Button";
import { HeartIcon } from "../../icons/Sidebar/HeartIcon";
import { FavouriteIcon } from "../../icons/Favourites/FavouriteIcon";
import { StarIcon } from "../../icons/Trending/StarIcon";

export const MainTrend = ({ filmId }) => {
  const trendItem = mainTrend.find((item) => item.id === parseInt(filmId, 10));
  const [isFavorited, setIsFavorited] = useState(false);

  if (!trendItem) {
    return <div>Not found</div>;
  }

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="trend">
      <div
        className="trend-img"
        style={{ backgroundImage: `url(${trendItem.bgImage})` }}
      ></div>
      <div className="trend-info">
        <h2 className="trend-title">{trendItem.title}</h2>
        <div className="trend-group">
          <p> {trendItem.year}</p>
          <p>{trendItem.genre}</p>
          <p>{trendItem.time}</p>
        </div>
        <p className="trend-description">{trendItem.description}</p>
        <div className="trend-watch">
          <Button type="button" variant="primary">
            Watch now
          </Button>
          <button className="btn trend-icon" onClick={handleFavoriteToggle}>
            {isFavorited ? <HeartIcon /> : <FavouriteIcon />}
          </button>
        </div>
        <div className="trend-rating">
         <StarIcon/>
          {trendItem.rating}</div>
      </div>
    </div>
  );
};
