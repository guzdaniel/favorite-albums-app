import React from "react";
import { useState } from "react";

function AlbumForm() {

    const [title, setTitle] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        console.log("submitted")
    }

    function handleChange(e) {
        setTitle(e.target.value)
    }

    console.log("the title " + title)

    return (
        <div>
            <section>
                <form className="container" onSubmit={handleSubmit}>
                    <label htmlFor="title">Album Title: </label>
                    <input type="text" id="title" name="title" placeholder="Enter Title"
                        value={title} onChange={handleChange} /> <br/>
{/* 
                    <label htmlFor="title">Artist: </label>
                    <input type="text" id="artist" name="artist" placeholder="Enter Artist"
                        value="" onChange={handleChange} /> <br/>

                    <label htmlFor="title">Image URL: </label>
                    <input type="text" id="image" name="image" placeholder="Enter URL"
                        value="" onChange={handleChange} /> <br/>

                    <label htmlFor="title">Rating: </label>
                    <input type="text" id="rating" name="rating" placeholder="Enter Rating 1-4"
                        value="" onChange={handleChange} /> <br/> */}

                    <input type="submit" value="Submit"/>
                </form>
            </section>
        </div>
    )
}

export default AlbumForm