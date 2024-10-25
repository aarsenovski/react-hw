import {
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  SET_SEARCH_QUERY,
} from "../actions/characterActions";

const initialState = {
  loading: false,
  list: [],
  error: "",
  searchQuery: "",
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_CHARACTERS_SUCCESS:
      return { ...state, loading: false, list: action.payload, error: "" };
    case FETCH_CHARACTERS_FAILURE:
      return { ...state, loading: false, list: [], error: action.payload };
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

export default charactersReducer;
