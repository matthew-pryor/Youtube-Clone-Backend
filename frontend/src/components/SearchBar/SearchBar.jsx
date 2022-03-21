import React, {useState} from "react";

const SearchBar = (props) => {

const [searchRequest, setSearchRequest] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchRequest);
    props.getSearchResults(searchRequest);
}
    
    return (
        <form>
            <div>
                <input type="text" placeholder="Search YouTube" value={searchRequest} onChange={(event) => setSearchRequest(event.target.value)} ></input>
            </div>
            <button onClick={handleSubmit} type="submit">Search</button>
        </form>
    );
}

export default SearchBar