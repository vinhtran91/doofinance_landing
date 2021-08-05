import "./Navbar.css";

import brand from "assets/img/brand.svg";

export const Navbar = () => {
  return (
    <nav className="container navbar">
      <div className="navbar__brand">
        <img src={brand} alt="" />
      </div>
      <ul className="navbar__menu">
        <li>
          <a href="#ecosystem">Ecosystem</a>
        </li>
        <li>
          <a href="#launchpad">Launchpad</a>
        </li>
        <li>
          <a href="#tokenomics">Tokenomics</a>
        </li>
        <li>
          <a href="#protocol">Protocol</a>
        </li>
        <li>
          <a href="#roadmap">Roadmap</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
      </ul>
      <a href="/#" target="_blank" rel="noopener noreferrer">
        <button className="navbar__whitepaper">WHITE PAPER</button>
      </a>
    </nav>
  );
};
