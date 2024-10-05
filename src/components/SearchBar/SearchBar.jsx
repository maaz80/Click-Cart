import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate(`/search?category=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    const suggestions = ['Mobiles', 'HeadSets', 'Watches', 'Vr Box'];

    return (
        <div className='m-auto flex justify-center items-center poppins-regular '>
            <input
                className=" poppins-regular text-sm rounded-md px-2 relative bg-transparent border border-black w-[90%] h-8 my-3"
                type="text"
                placeholder="Search Items"
                list="suggestions"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
            />
            <datalist id="suggestions">
                {suggestions
                    .filter((suggestion) => suggestion.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((suggestion, index) => (
                        <option key={index} value={suggestion}></option>
                    ))}
            </datalist>
        </div>
    );
};

export default SearchBar;
