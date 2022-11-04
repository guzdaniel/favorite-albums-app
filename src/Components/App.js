import React from 'react';
import '../App.css';
import Home from './Home';
import AlbumList from './AlbumList';
import AlbumForm from './AlbumForm';
import AlbumDetails from './AlbumDetails';
import Navigation from './Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/albums/new">
            <AlbumForm />
          </Route>
          <Route path="/albums/:id">
            <AlbumDetails />
          </Route>
          <Route path="/albums">
            <AlbumList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h1>404 Page Not Found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
