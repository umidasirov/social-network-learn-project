import { NavLink } from "react-router-dom";
import "../Components/style/nav.css";

export default function Nav() {
  return (
    <nav>
      <div>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/messages" className={({ isActive }) => (isActive ? "active" : "")}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" className={({ isActive }) => (isActive ? "active" : "")}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" className={({ isActive }) => (isActive ? "active" : "")}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/setting" className={({ isActive }) => (isActive ? "active" : "")}>
          Setting
        </NavLink>
      </div>
    </nav>
  );
}
