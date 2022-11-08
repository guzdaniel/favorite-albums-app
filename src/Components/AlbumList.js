import React from "react";
import AlbumItem from "./AlbumItem";

function AlbumList({ albums }) {
    const albumListItems = albums.map(albumObj => <AlbumItem key={albumObj.id} album={albumObj} />)

    // console.log(albums)

    return (
        <div className="container">
            {albumListItems}
        </div>
    )
}

export default AlbumList