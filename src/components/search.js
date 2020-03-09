import React, {useState} from 'react';
import {get} from './functions';



const Search = () => {
    const [searchString, setSearchString] = useState('');
    const whois = e => {
        // you can change API key and handle-core-url from .env file
        get(process.env.REACT_APP_HANDLE_CORS_URL+'https://jsonwhois.com/api/v1/whois?domain='+searchString, 'results',
                {headers:{
                    'Accept':'application/json',
                    'Authorization':'Token token='+process.env.REACT_APP_API_KEY
                }}
            );
    }

    return (
        <div>
            <input type="text" placeholder="example.com" onChange={e => setSearchString(e.target.value)} />
            <button className="btn-search" onClick={whois}>Search</button>
        </div>
    )
    
}

export default Search;
