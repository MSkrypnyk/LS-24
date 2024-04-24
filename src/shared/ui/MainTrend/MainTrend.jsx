import React, { useState } from "react";
import { mainTrend } from "/src/database/mainTrend.js";
import { Button } from "../Button/Button";
import { HeartIcon } from "../../icons/Sidebar/HeartIcon";
import { FavouriteIcon } from "../../icons/Favourites/FavouriteIcon";
import { StarIcon } from "../../icons/Trending/StarIcon";
import { Watch } from "../Watch/Watch";

export const MainTrend = ({ filmId }) => {
  const trendItem = mainTrend.find((item) => item.id === parseInt(filmId, 10));

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
        <Watch />
        <div className="trend-rating">
          <StarIcon />
          {trendItem.rating}
        </div>
      </div>
    </div>
  );
};
