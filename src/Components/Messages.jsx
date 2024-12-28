import { NavLink, Routes, Route } from "react-router-dom";
import "./style/Messages.css";

export default function Messages() {
  return (
    <div className="dialogs">
      <div className="dialogs-item">
        <div>
          <NavLink
            to="/messages/1"
            className={({ isActive }) => (isActive ? "user-list active" : "user-list")}
          >
            Umid
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/messages/2"
            className={({ isActive }) => (isActive ? "user-list active" : "user-list")}
          >
            Murod
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/messages/3"
            className={({ isActive }) => (isActive ? "user-list active" : "user-list")}
          >
            Ozodbek
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/messages/4"
            className={({ isActive }) => (isActive ? "user-list active" : "user-list")}
          >
            Raul
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/messages/5"
            className={({ isActive }) => (isActive ? "user-list active" : "user-list")}
          >
            Tixon
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/messages/6"
            className={({ isActive }) => (isActive ? "user-list active" : "user-list")}
          >
            Vladislav
          </NavLink>
        </div>
      </div>
      <div className="dialogs-messages">
        <Routes>
          <Route path="/messages/1" element={<div>good</div>} />
          <Route path="/messages/2" element={<div>bad</div>} />
          <Route path="/messages/3" element={<div>neutral</div>} />
          <Route path="/messages/4" element={<div>excellent</div>} />
          <Route path="/messages/5" element={<div>average</div>} />
          <Route path="/messages/6" element={<div>poor</div>} />
        </Routes>
      </div>
    </div>
  );
}
