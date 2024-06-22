import React, { useEffect, useRef, useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { BsBox } from 'react-icons/bs';
import { BiLogInCircle, BiSupport } from 'react-icons/bi';
import { MdDetails } from 'react-icons/md';
import { FaShippingFast } from 'react-icons/fa';

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdown, setDropdown] = useState(false);
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const dropdownRef = useRef(null);

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    const handleProfile = () => {
        setDropdown(!dropdown);
    };

    useEffect(() => {
        setDropdown(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="flex items-center justify-between p-2 rounded-b-xl md:rounded-none bg-transparent">
            <div className="flex items-center">
                <span className="trade-winds-regular text-red-600 text-2xl">Click Cart</span>
            </div>
            <input
                className="text-sm rounded-md px-2 bg-transparent border border-black w-[60%] h-8 hidden md:block"
                type="text"
                placeholder="Search Items"
                list="suggestions"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
            />
            <datalist id="suggestions">
                <option value="Jeans"></option>
                <option value="Shirts"></option>
                <option value="Watches"></option>
                <option value="Caps"></option>
            </datalist>
            <div className="text-2xl flex gap-10 pr-1 relative" ref={dropdownRef}>
                <div className="hover:text-red-600">
                    <BiLogInCircle />
                </div>
                <div className="hover:text-red-600">
                    <NavLink to="/favorites"><FaCartShopping /></NavLink>
                </div>
                <div onClick={handleProfile} className="hover:text-red-600 cursor-pointer">
                    <CgProfile />
                </div>
                {dropdown &&
                    <ul className='absolute top-[42px] right-0 bg-white text-[15px] md:text-lg z-10 text-end gap-3 flex flex-col rounded-md shadow-md'>
                        <li className="list flex gap-3 items-center justify-start hover:bg-gray-300 w-[100%] px-3 py-0 md:py-1 pr-8 rounded-t-md">
                            <NavLink className="flex gap-3 items-center w-[100%] hover:text-red-400" to="/profile">
                                <CgProfile /> Profile
                            </NavLink>
                        </li>
                        <li className="list flex gap-3 items-center justify-start hover:bg-gray-300 w-[100%] px-3 py-0 md:py-1 pr-8">
                            <BsBox />My Orders
                        </li>
                        <li className="list flex gap-3 items-center justify-start hover:bg-gray-300 w-[100%] px-3 py-0 md:py-1 pr-8">
                            <BiSupport /> 24*7 Support
                        </li>
                        <li className="list flex gap-3 items-center justify-start hover:bg-gray-300 w-[100%] px-3 py-0 md:py-1 pr-8">
                            <MdDetails /> About Us
                        </li>
                        <li className="list flex gap-3 items-center justify-start hover:bg-gray-300 w-[100%] px-3 py-0 md:py-1 pr-8">
                            <FaShippingFast />Shipping 
                        </li>
                        <li className="list flex gap-3 items-center justify-start hover:bg-gray-300 w-[100%] px-3 py-0 md:py-1 pr-8 rounded-b-md">
                            <BiLogInCircle /> {!login ? "SignUp/Login" : "Logout"}
                        </li>
                    </ul>
                }
            </div>
        </div>
    );
}
