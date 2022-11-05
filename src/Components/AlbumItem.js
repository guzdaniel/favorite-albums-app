import React from "react";
import '../AlbumItem.css';

function AlbumItem({ album }) {

    return (
        <li className="card">
            <div className="content">
                <img className="image" src={album.image} alt={album.title} />
                <h2>{album.title}</h2>
                <p>{album.artist}</p>
                <p>{album.rating}</p>
            </div>
        </li>

    )
}

export default AlbumItem