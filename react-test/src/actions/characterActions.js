export const FETCH_CHARACTERS_REQUEST = "FETCH_CHARACTERS_REQUEST";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

const apiBaseUrl = "https://rickandmortyapi.com/api/character";

export const fetchCharactersRequest = () => ({
  type: FETCH_CHARACTERS_REQUEST,
});

export const fetchCharactersSuccess = (characters) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: characters,
});

export const fetchCharactersFailure = (error) => ({
  type: FETCH_CHARACTERS_FAILURE,
  payload: error,
});

export const fetchCharacters =
  (searchTerm = "") =>
  (dispatch) => {
    dispatch(fetchCharactersRequest());

    fetch(`${apiBaseUrl}${searchTerm ? `?name=${searchTerm}` : ""}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch characters");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchCharactersSuccess(data.results));
      })
      .catch((error) => {
        dispatch(fetchCharactersFailure(error.message));
      });
  };

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const addToFavorites = (character) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const updatedFavorites = [...favorites, character];
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

  return {
    type: ADD_TO_FAVORITES,
    payload: character,
  };
};

export const removeFromFavorites = (characterId) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const updatedFavorites = favorites.filter((char) => char.id !== characterId);
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

  return {
    type: REMOVE_FROM_FAVORITES,
    payload: characterId,
  };
};
