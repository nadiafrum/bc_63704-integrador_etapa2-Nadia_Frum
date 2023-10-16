import { Link } from "react-router-dom";
import "./Header.scss";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <header className="main-header">
      <input type="checkbox" id="menu" />

      <Navbar />
      <Searchbar />

    </header>
  );
};

export default Header;
