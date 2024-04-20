import React from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon } from '../../icons/Header/SearchIcon';
import { BellIcon } from '../../icons/Header/BellIcon';

export const Header = () => {
  return (
    <div className="header">
      <Link className="header-link" to="/">
        Movies
      </Link>
      <Link className="header-link" to="/">
        Series
      </Link>
      <Link className="header-link" to="/">
        Documentaries
      </Link>
      <div className="ml-auto header-group">
        <SearchIcon className="icon" />
        <BellIcon className="icon" />
        <div className="user">
          <img className="user-img" src="/src/assets/img/user.avif" alt="" />
          <p className="user-name">Tetiana</p>
        </div>
      </div>
    </div>
  );
};
