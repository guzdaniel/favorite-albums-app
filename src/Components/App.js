import React from 'react';
import '../App.css';
import Home from './Home';
import AlbumList from './AlbumList';
import AlbumForm from './AlbumForm';
import Navigation from './Navigation';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import Search from './Search';


function App() {
  const [albums, setAlbums] = useState([])


  useEffect(() => {
    fetch("http://localhost:3001/albums")
      .then(res => res.json())
      .then(data => {
        setAlbums(data)
      })
  }, [])

  function addAlbum(addedAlbum) {
    setAlbums(previousAlbums => [...previousAlbums, addedAlbum])
  }


  return (
    <Router>
      <div className="App">
        <Header className="header" />
        <Navigation />
        <Search />
        <Switch>
          <Route exact path="/albums/new">
            <AlbumForm addAlbum={addAlbum} />
          </Route>
          <Route exact path="/albums">
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
