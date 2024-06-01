import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
      if (e.key === 'Enter') {
          navigate(`/search?query=${searchQuery}`);
      }
  };
  return (
    <div className='m-auto flex justify-center items-center'>
           <input className="text-sm rounded-md px-2 relative bg-transparent border border-black w-[90%]  h-8 my-3  "  type="text"
                placeholder="Search Items"
                list="suggestions"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
            />
            <datalist id="suggestions">
                <option value='Jeans'></option>
                <option value='Shirts'></option>
                <option value='Watches'></option>
                <option value='Caps'></option>
            </datalist>
    </div>
  )
}

export default SearchBar
