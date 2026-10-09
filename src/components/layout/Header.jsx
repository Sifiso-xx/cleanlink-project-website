import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import BrandMark from "../ui/BrandMark";

export default function Header({ menuOpen, setMenuOpen }) {
  const nav = [
    ["/", "Home"], 
    ["/story", "Our story"], 
    ["/system", "The system"], 
    ["/team", "The team"]
  ];

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="CleanLink home">
        <BrandMark />
        <span>CleanLink</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === "/"}>
            {label}
          </NavLink>
        ))}
      </nav>
      <span className="header-note">Team 10 · 2026</span>
      <button 
        className="menu-button" 
        type="button" 
        aria-expanded={menuOpen} 
        aria-label={menuOpen ? "Close menu" : "Open menu"} 
        onClick={() => setMenuOpen(v => !v)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
