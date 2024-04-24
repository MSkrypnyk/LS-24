import React, { useState } from "react";
import { Button } from "../Button/Button";
import { HeartIcon } from "../../icons/Sidebar/HeartIcon";
import { FavouriteIcon } from "../../icons/Favourites/FavouriteIcon";
import "./Watch.scss";

export const Watch = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <div className="watch">
      <Button type="button" variant="primary">
        Watch now
      </Button>
      <button className="btn watch-icon" onClick={handleFavoriteToggle}>
        {isFavorited ? <HeartIcon /> : <FavouriteIcon />}
      </button>
    </div>
  );
};
