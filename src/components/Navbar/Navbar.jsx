import React, { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    return (
        <div className="flex items-center justify-between p-2 rounded-b-xl md:rounded-none bg-transparent">
            <div className="flex items-center">
                <span className="trade-winds-regular text-red-600 text-2xl">Click Cart</span>
            </div>
            <input
                className="text-sm rounded-md px-2 relative bg-transparent border border-black w-[60%] h-8 hidden md:block"
                type="text"
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
            <div className="text-2xl flex gap-10 md:pr-6 pr-1">
                <div className="hover:text-red-600">
                    <NavLink to={'/favorites'}><FaCartShopping /></NavLink>
                </div>
                <div className="hover:text-red-600">
                    <CgProfile />
                </div>
            </div>
        </div>
    );
}
