import "./Navbar.css";

import brand from "assets/img/brand.svg";
import { useState } from "react";

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="container navbar">
            <div className="navbar__brand">
                <img src={brand} alt="" />
            </div>
            <ul className={isOpen ? "navbar__menu open" : "navbar__menu close"}>
                <div className="navbar__close" onClick={() => setIsOpen(false)} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-right" width="35" height="35" viewBox="0 0 35 35" strokeWidth="1" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="7 7 12 12 7 17" />
                        <polyline points="13 7 18 12 13 17" />
                    </svg>
                </div>
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
                <li>
                    <a href="/#" target="_blank" rel="noopener noreferrer">
                        <button className="navbar__whitepaper">WHITE PAPER</button>
                    </a>
                </li>
            </ul>

            <div className="navbar__open" onClick={() => setIsOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-align-right" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="10" y1="12" x2="20" y2="12" />
                    <line x1="6" y1="18" x2="20" y2="18" />
                </svg>
            </div>
        </nav>
    );
};
