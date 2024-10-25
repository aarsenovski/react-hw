import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorites, fetchCharacters } from "../actions/characterActions";

const CharactersPage = () => {
  const dispatch = useDispatch();
  const {
    list: characters,
    searchQuery,
    loading,
    error,
  } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters(searchQuery));
  }, [searchQuery, dispatch]);

  return (
    <div className="characters-container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {characters.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
          <p>Status: {character.status}</p>
          <button onClick={() => dispatch(addToFavorites(character))}>
            Add to Favorites
          </button>
          <Link to={`/character/${character.id}`}>More Details</Link>
        </div>
      ))}
    </div>
  );
};

export default CharactersPage;
