import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import charactersReducer from "./reducers/charactersReducer";
import favoritesReducer from "./reducers/favouritesReducer";

const rootReducer = combineReducers({
  characters: charactersReducer,
  favorites: favoritesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
