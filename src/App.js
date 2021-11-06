import { Route,Switch } from "react-router-dom";
import MainNavigation from "./components/layouts/MainNavigation";
import AllMoviesPage from "./pages/AllMovies";
import FavouritesPage from "./pages/Favourites";
import AddNewMoviePage from "./pages/NewMovie";
import defaultBg from "./images/defaultBg.jpg";

function App() {
  return (
    <div className="App defaultBg">
      <MainNavigation/>
      <Switch>
      <Route path="/" exact>
        <AllMoviesPage/>
      </Route>
      <Route path="/myreactapp" exact>
        <AllMoviesPage/>
      </Route>
      <Route path="/NewMovie">
        <AddNewMoviePage/>
      </Route>
      <Route path="/Favourites">
        <FavouritesPage/>
      </Route>
      <Route path="/AllMovies">
        <AllMoviesPage/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
