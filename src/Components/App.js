import React from 'react';
import '../App.css';
import Home from './Home';
import AlbumList from './AlbumList';
import AlbumForm from './AlbumForm';
import AlbumItem from './AlbumItem';
import Navigation from './Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from "react";


function App() {
  const [albums, setAlbums] = useState([])
    
    
    useEffect(() => {
        fetch("http://localhost:3001/albums")
        .then(res => res.json())
        .then(data => {
            setAlbums(data)
        })
    }, [])



  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/albums/new">
            <AlbumForm />
          </Route>
          <Route path="/albums/:id">
            <AlbumItem />
          </Route>
          <Route path="/albums">
            <AlbumList albums={albums} />
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
