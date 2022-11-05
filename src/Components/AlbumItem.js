import React from "react";


function AlbumItem({ album }) {

    return (
        <li className="card">
            <div className="content">
                <img style={{maxBlockSize: "200px"}} className="image" src={album.image} alt={album.title} />
                <h2>{album.title}</h2>
                <p>{album.artist}</p>
                <p>{album.rating}</p>
            </div>
        </li>

    )
}

export default AlbumItem