import { Route,Switch } from "react-router-dom";
import MainNavigation from "./components/layouts/MainNavigation";
import AllMeetUpsPage from "./pages/AllMeetUps";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div className="App">
      <MainNavigation/>
      <Switch>
      <Route path="/" exact>
        <AllMeetUpsPage/>
      </Route>
      <Route path="/NewMeetup">
        <NewMeetupPage/>
      </Route>
      <Route path="/Favourites">
        <FavouritesPage/>
      </Route>
      <Route path="/AllMeetUps">
        <AllMeetUpsPage/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
