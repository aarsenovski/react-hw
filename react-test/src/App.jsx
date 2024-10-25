import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CharacterDetails from "./components/characterDetailsPage";
import CharactersPage from "./components/charactersPage";
import FavoritesPage from "./components/favouritesPage";
import Navbar from "./components/navBar";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Provider>
  );
};

export default App;
