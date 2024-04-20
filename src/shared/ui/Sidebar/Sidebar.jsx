import { NavLink } from "react-router-dom";
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
      <LogoIcon className="icon" />
      <div className="sidebar-pages">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "sidebar-link is-active" : "sidebar-link"
          }
        >
          <FilmIcon />
          Home
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "sidebar-link is-active" : "sidebar-link"
          }
        >
          <HeartIcon />
          Favourites
        </NavLink>
        <NavLink
          to="/trending"
          className={({ isActive }) =>
            isActive ? "sidebar-link is-active" : "sidebar-link"
          }
        >
          <TrendingUpIcon />
          Trending
        </NavLink>
        <NavLink
          to="/comingsoon"
          className={({ isActive }) =>
            isActive ? "sidebar-link  is-active" : "sidebar-link "
          }
        >
          <CelendarIcon />
          Coming soon
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive ? "sidebar-link is-active" : "sidebar-link"
          }
        >
          <UsersIcon />
          Community
        </NavLink>
        <NavLink
          to="/social"
          className={({ isActive }) =>
            isActive ? "sidebar-link is-active" : "sidebar-link"
          }
        >
          <MessageCircleIcon />
          Social
        </NavLink>
        <NavLink
          to="/setting"
          className={({ isActive }) =>
            isActive ? "sidebar-link is-active" : "sidebar-link"
          }
        >
          <SlidersIcon />
          Settings
        </NavLink>
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            isActive ? "sidebar-link is-active" : "sidebar-link"
          }
        >
          <CelendarIcon />
          Logout
        </NavLink>
      </div>
    </div>
  );
};
