import { FavouriteIcon } from "../../icons/Favourites/FavouriteIcon";
import { HeartIcon } from "../../icons/Sidebar/HeartIcon";

export const FavoriteButton = ({ isFavorited, handleToggleFavorite }) => {
  const handleFavoriteToggle = () => {
    handleToggleFavorite();
  };

  return (
    <button className="btn" onClick={handleFavoriteToggle}>
      {isFavorited ? (
        <HeartIcon className="film-icon" />
      ) : (
        <FavouriteIcon className="film-icon" />
      )}
    </button>
  );
};
