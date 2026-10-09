import { Link } from "react-router-dom";
import BrandMark from "../ui/BrandMark";

export default function Footer() {
  return (
    <footer className="footer">
      <Link className="brand" to="/">
        <BrandMark />
        <span>CleanLink</span>
      </Link>
      <p>Project showcase. Separate from the CleanLink product.</p>
      <span>Team 10 · three members · 2026</span>
    </footer>
  );
}
