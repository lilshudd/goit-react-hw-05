import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies" component={MoviesPage} />
            <Route path="/movies/:movieId" exact component={MovieDetailsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
