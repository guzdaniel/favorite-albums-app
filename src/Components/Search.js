import React from "react";
import { useState } from "react";

function Search(){

    const [searchForm, setSearchForm] = useState("")


    function handleChange(e) {
        setSearchForm(e.target.value)
        console.log(searchForm)
    }

   
    

    return(
        <div>
            Search for an album title:
            <form>
                <input type="text" name="search" value={searchForm} onChange={handleChange} />
            </form>
        </div>
    )
}

export default Search
