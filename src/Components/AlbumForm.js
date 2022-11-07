import React from "react";
import { useState } from "react";

function AlbumForm({ addAlbum }) {

    const [albumForm, setAlbumForm] = useState({
        title: "",
        artist: "",
        image: "",
        rating: ""
    })


    function handleSubmit(e) {
        e.preventDefault()
        console.log("submitted")
        fetch('http://localhost:3001/albums', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(albumForm)
        })
            .then(res => res.json())
            .then(data => {
                addAlbum(data)
            })


    }

    function handleChange(e) {
        setAlbumForm(previousAlbumForm => ({ ...previousAlbumForm, [e.target.name]: e.target.value }))
    }


    return (
        <div>
            <form className="container" onSubmit={handleSubmit}>
                <label htmlFor="title">Album Title: </label>
                <input type="text" id="title" name="title" placeholder="Enter Title"
                    value={albumForm.title} onChange={handleChange} /> <br />

                <label htmlFor="title">Artist: </label>
                <input type="text" id="artist" name="artist" placeholder="Enter Artist"
                    value={albumForm.artist} onChange={handleChange} /> <br />

                <label htmlFor="title">Image URL: </label>
                <input type="text" id="image" name="image" placeholder="Enter URL"
                    value={albumForm.image} onChange={handleChange} /> <br />

                <label htmlFor="title">Rating: </label>
                <input type="text" id="rating" name="rating" placeholder="Enter Rating 1-4"
                    value={albumForm.rating} onChange={handleChange} /> <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AlbumForm