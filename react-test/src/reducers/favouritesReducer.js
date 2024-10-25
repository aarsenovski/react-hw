import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../actions/characterActions";

const initialState = {
  list: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return { ...state, list: [...state.list, action.payload] };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        list: state.list.filter((char) => char.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
