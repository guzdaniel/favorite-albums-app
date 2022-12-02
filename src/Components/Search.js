import React from "react";

function Search(){


    function handleChange(e) {
        console.log(e.target.value)
    }

    

    return(
        <div>
            Search for an album title:
            <form>
                <input type="text" name="search" defaultValue="" onChange={handleChange} />
            </form>
        </div>
    )
}

export default Search
