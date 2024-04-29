import { Link, NavLink } from "react-router-dom";
import { LogoIcon } from "../../icons/Logo/LogoIcon";
import { FilmIcon } from "../../icons/Sidebar/FilmIcon";
import { HeartIcon } from "../../icons/Sidebar/HeartIcon";
import { TrendingUpIcon } from "../../icons/Sidebar/TrendingUpIcon";
import { CelendarIcon } from "../../icons/Sidebar/CelendarIcon";
import { UsersIcon } from "../../icons/Sidebar/UsersIcon";
import { SlidersIcon } from "../../icons/Sidebar/SlidersIcon";
import { MessageCircleIcon } from "../../icons/Sidebar/MessageCircleIcon";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <LogoIcon className="icon logo" />
      </Link>
      <div className="sidebar-pages">
        <NavLink to="/" className="sidebar-link" activeclassname="is-active">
          <FilmIcon className="sidebar-icon" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/favourites"
          className="sidebar-link"
          activeclassname="is-active"
        >
          <HeartIcon className="sidebar-icon" />
          <span>Favourites</span>
        </NavLink>
        <NavLink
          to="/trending"
          className="sidebar-link"
          activeclassname="is-active"
        >
          <TrendingUpIcon className="sidebar-icon" />
          <span>Trending</span>
        </NavLink>
        <NavLink
          to="/comingsoon"
          className="sidebar-link mb-small"
          activeclassname="is-active mb-small"
        >
          <CelendarIcon className="sidebar-icon" />
          <span>Coming soon</span>
        </NavLink>
        <NavLink
          to="/community"
          className="sidebar-link"
          activeclassname="is-active"
        >
          <UsersIcon className="sidebar-icon" />
          <span>Community</span>
        </NavLink>
        <NavLink
          to="/social"
          className="sidebar-link mb"
          activeclassname="is-active mb"
        >
          <MessageCircleIcon className="sidebar-icon" />
          <span>Social</span>
        </NavLink>
        <NavLink
          to="/setting"
          className="sidebar-link"
          activeclassname="is-active"
        >
          <SlidersIcon className="sidebar-icon" />
          <span>Settings</span>
        </NavLink>
        <NavLink
          to="/logout"
          className="sidebar-link"
          activeclassname="is-active"
        >
          <CelendarIcon className="sidebar-icon" />

          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
};
