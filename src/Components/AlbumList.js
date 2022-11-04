import React from "react";
import { useState, useEffect } from "react";

function AlbumList(){
    const [albums, setAlbums] = useState([])
    
    
    useEffect(() => {
        fetch("http://localhost:3001/albums")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAlbums(data)
        })
    }, [])


    return (
        <div>
            <h2>This the list of your favorite albums</h2>
        </div>
    )
}

export default AlbumList