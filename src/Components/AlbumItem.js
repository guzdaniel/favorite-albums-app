import React from "react";
import '../AlbumItem.css';
import { useState } from "react";
import Emoji from "./Emoji";

function AlbumItem({ album }) {

    const { title, artist, 
        image = "https://upload.wikimedia.org/wikipedia/commons/3/3c/No-album-art.png", rating } = album



    const ratingNum = parseInt(rating)


    function renderStars(){
        let count = 0
        return(
            Array.from({length: ratingNum}, () => <Emoji key={count++} symbol="⭐" />)
           )
}


    return (
        <li className="card">
            <div className="content">
                <img className="image" src={image.includes("http") ? image : "https://upload.wikimedia.org/wikipedia/commons/3/3c/No-album-art.png"} alt={title} />
                <h2>{title}</h2>
                <p>{artist}</p>
                {renderStars()}
            </div>
        </li>

    )
}

export default AlbumItem