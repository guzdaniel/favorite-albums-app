import React from "react";
import { useState } from "react";

function Search({ setSearch }){

    const [searchForm, setSearchForm] = useState("")


    function handleChange(e) {
        setSearchForm(e.target.value)
        
    }

    function handleSubmit(e){
        e.preventDefault()
        setSearch(searchForm)
        setSearchForm("")
        console.log(searchForm)
        
    }
    

    return(
        <div>
            Search for an album title:
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" value={searchForm} onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Search
