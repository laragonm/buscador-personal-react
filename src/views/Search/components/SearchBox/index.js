import { useState } from "react";

import "./style.css"

export default function SearchBox({onSearch, onClose, isSearching}) {
    const [searchText, setSearchText] = useState("");

    const handleSearchClick = () => {
        setSearchText("");
        onClose();
    }

    return (
        <div className="search-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-person-badge-fill" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
            </svg>
            <h2 className="search-box-title text-info"><strong>Buscador de Personal</strong></h2>
            <div className="search-box-buttons">
                <label>
                    <input 
                        value={searchText} 
                        onChange={({ target: { value }}) => setSearchText(value)}
                        className="search-box-input form-control"
                    />
                </label>
                <button className="btn btn-primary" onClick={() => onSearch(searchText)} disabled={!searchText.length}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                          Buscar
                </button>
                {isSearching && <button className="btn btn-danger" onClick={handleSearchClick} disabled={!searchText.length}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>Cerrar
                </button>}
            </div>
        </div>
    );
}