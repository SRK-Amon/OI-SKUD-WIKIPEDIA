import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__box">
          <h2 className="nav__title">Wikipedia of SKUD</h2>
          <ul className="nav__list">
            <li>
              <NavLink to="/" className="nav__link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/setUp" className="nav__link">
                Setup
              </NavLink>
            </li>
            <li>
              <NavLink to="/guestCards" className="nav__link">
                Guest Card
              </NavLink>
            </li>
            <li>
              <NavLink to="/functionCards" className="nav__link">
                Function Cards
              </NavLink>
            </li>
            <li>
              <NavLink to="/readCards" className="nav__link">
                Read Cards
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
