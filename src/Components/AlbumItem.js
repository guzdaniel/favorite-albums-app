import React from "react";
import '../AlbumItem.css';
import { useState } from "react";
import Emoji from "./Emoji";

function AlbumItem({ album }) {

    const ratingNum = parseInt(album.rating)

    const renderStars = (amount) => {
        return (
            [...Array(amount)].map((item, index) => <Emoji key={item} symbol="⭐" />)
            )
    }

    return (
        <li className="card">
            <div className="content">
                <img className="image" src={album.image} alt={album.title} />
                <h2>{album.title}</h2>
                <p>{album.artist}</p>
                {renderStars(ratingNum)}
            </div>
        </li>

    )
}

export default AlbumItem