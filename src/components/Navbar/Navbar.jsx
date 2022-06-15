import "./Navbar.css"

import { Link } from "react-router-dom";

import { routes } from "../../routes";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to={routes.HOME}>
        <h1 className="navbar__header">Egzamin Na Prawo Jazdy</h1>
      </Link>
    </nav>
  );
}
