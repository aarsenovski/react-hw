import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../actions/characterActions";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map((character) => (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <button onClick={() => dispatch(removeFromFavorites(character.id))}>
              Remove from Favorites
            </button>
          </div>
        ))
      ) : (
        <p>No favorites added.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
