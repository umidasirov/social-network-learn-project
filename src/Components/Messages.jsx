import { NavLink, Routes, Route } from "react-router-dom";
import "./style/Messages.css";

const users = [
  { id: 1, name: "Umid", message: "good" },
  { id: 2, name: "Murod", message: "bad" },
  { id: 3, name: "Ozodbek", message: "neutral" },
  { id: 4, name: "Raul", message: "excellent" },
  { id: 5, name: "Tixon", message: "average" },
  { id: 6, name: "Vladislav", message: "poor" },
];

export default function Messages() {
  return (
    <div className="dialogs">
      <div className="dialogs-item">
        {users.map((user) => (
          <div key={user.id}>
            <NavLink
              to={`/message/${user.id}`}
              className={({ isActive }) => (isActive ? "user-list active" : "user-list")}
            >
              {user.name}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="dialogs-messages">
        <Routes>
          {users.map((user) => (
            <Route key={user.id} path={`/${user.id}`} element={<div>{user.message}</div>} />
          ))}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </div>
    </div>
  );
}
