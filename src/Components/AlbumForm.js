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
                setAlbumForm({
                    title: "",
                    artist: "",
                    image: "",
                    rating: ""
                })

            })
    }

    function handleChange(e) {
        // console.log(e.target.value)
        setAlbumForm(previousAlbumForm => ({ ...previousAlbumForm, [e.target.name]: e.target.value }))
    }

    // function handleRating(rateNum) {
    //     const rating = parseInt(rateNum)
    //     if (rating < 5 && rating > 0) {
    //         setAlbumForm(previousAlbumForm => ({ ...previousAlbumForm, [albumForm.rating]: rating}))
    //     }
    //     else {
    //         window.alert("Only a number between 1 and 5")
    //         setAlbumForm(previousAlbumForm => ({ ...previousAlbumForm, [albumForm.rating]: ""}))
    //         handleSubmit()
    //     }

    // }


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
                <input type="number" id="rating" name="rating" min="1" max="4"
                    value={albumForm.rating} onChange ={handleChange} /> <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AlbumForm