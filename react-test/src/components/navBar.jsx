import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchQuery } from "../actions/characterActions";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <nav>
      <Link to="/characters">Characters</Link>
      <Link to="/favorites">Favorites</Link>
      <input
        type="text"
        placeholder="Search characters..."
        onChange={handleSearch}
      />
    </nav>
  );
};

export default Navbar;
