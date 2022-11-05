import React from "react";
import AlbumItem from "./AlbumItem";

function AlbumList( {albums} ){
    const albumListItems = albums.map(albumObj => <AlbumItem key={albumObj.id} album={albumObj} />)

    console.log(albums)

    return (
        <div>
            <h2>This the list of your favorite albums</h2>
            {albumListItems}
        </div>
    )
}

export default AlbumList