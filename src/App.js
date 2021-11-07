import { useState } from "react";
import { Route,Switch } from "react-router-dom";
import MainNavigation from "./components/layouts/MainNavigation";
import AllMoviesPage from "./pages/AllMovies";
import FavouritesPage from "./pages/Favourites";
import AddNewMoviePage from "./pages/NewMovie";

function App() {

  const [favCount, setFavCount] = useState([])

  const removeFromFav=(movieId)=>{
      console.log("removeFromFav movieId: "+movieId)
      let favourites=[...favCount];
      favourites.pop(movieId);
      setFavCount(favourites);
  }
  const addToFav=(movieId)=>{
      console.log("addToFav movieId: "+movieId)
      let favourites=[...favCount];
      favourites.push(movieId);
      setFavCount(favourites);
  }
  return (
    <div className="App defaultBg">
      <MainNavigation favCount={favCount.length}/>
      <Switch>
      <Route path="/" exact>
        <AllMoviesPage removeFromFav={removeFromFav} addToFav={addToFav}/>
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
        <AllMoviesPage removeFromFav={removeFromFav} addToFav={addToFav}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
