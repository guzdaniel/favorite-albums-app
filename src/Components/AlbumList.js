import React from "react";

function AlbumList( {albums} ){
    // const albumListItems = albums.map(albumObj => <AlbumItem key={albumObj.id} album={albumObj} />)

    console.log(albums)
    return (
        <div>
            <h2>This the list of your favorite albums</h2>
        </div>
    )
}

export default AlbumList