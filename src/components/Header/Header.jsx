import "./Header.css";

import { Link } from "react-router-dom";
function HeaderNav() {
  return (
    <div className="navbar">
      <h2 className="logo">MUTC</h2>
      <nav>
        <ol className="navigation-list">
          <li className="navigation-list-items">
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/leadership">
              leadership
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/tracks">
              tracks
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="#">
              events
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

function Header() {
  return (
    <header>
      <HeaderNav />
    </header>
  );
}
export default Header;
