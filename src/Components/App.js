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

  const [search, setSearch] = useState("")


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

  const albumsCopy = [...albums]
  const filteredAlbums = albumsCopy.filter(album => {
    return (
      album.title.toUpperCase().includes(search.toUpperCase())
    )
  })



  return (
    <Router>
      <div className="App">
        <Header className="header" />
        <Navigation />
        <Search setSearch={setSearch} />
        <Switch>
          <Route exact path="/albums/new">
            <AlbumForm addAlbum={addAlbum} />
          </Route>
          <Route exact path="/albums">
            <AlbumList filteredAlbums={filteredAlbums} />
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
