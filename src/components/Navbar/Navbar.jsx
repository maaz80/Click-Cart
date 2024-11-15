import React, { useEffect, useRef, useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { BiHome, BiLogInCircle, BiMenuAltRight, BiSupport } from 'react-icons/bi';
import { MdDetails } from 'react-icons/md';

export default function Navbar({ cartCount}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdown, setDropdown] = useState(false);
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const dropdownRef = useRef(null);

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate(`/search?category=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    const handleProfile = () => {
        setDropdown(prev => !prev);
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
    }, []);

    return (
        <div className="flex items-center justify-between p-2 rounded-b-xl bg-black/5 backdrop-blur-sm poppins-regular ">
            <div className="flex items-center">
                <span className="trade-winds-regular text-red-600 text-lg md:text-xl">C</span>
                <span className="trade-winds-regular text-orange-600 text-lg md:text-xl">L</span>
                <span className="trade-winds-regular text-yellow-600 text-lg md:text-xl">I</span>
                <span className="trade-winds-regular text-green-600 text-lg md:text-xl">C</span>
                <span className="trade-winds-regular text-blue-600 text-lg md:text-xl">K</span>
                <span className="trade-winds-regular text-purple-600 text-lg md:text-xl">-</span>
                <span className="trade-winds-regular text-pink-600 text-lg md:text-xl">C</span>
                <span className="trade-winds-regular text-amber-600 text-lg md:text-xl">A</span>
                <span className="trade-winds-regular text-cyan-600 text-lg md:text-xl">R</span>
                <span className="trade-winds-regular text-teal-600 text-lg md:text-xl">T</span>
            </div>
            <input
                className="poppins-regular text-sm rounded-md px-2 bg-transparent border border-black w-[60%] h-8 hidden md:block"
                type="text"
                placeholder="Search Items"
                list="suggestions"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
            />
            <datalist id="suggestions">
                <option value="Mobiles"></option>
                <option value="VR"></option>
                <option value="Watches"></option>
                <option value="Speakers"></option>
                <option value="Laptops"></option>
            </datalist>
            <div className="text-2xl flex gap-6 md:gap-10 pr-1 relative" ref={dropdownRef}>
                <NavLink className="hover:text-red-600" to='/login'>
                    <BiLogInCircle />
                </NavLink>
                <div className="hover:text-red-600 relative">
                    <NavLink to="/favorites"><FaCartShopping />   <div className="absolute bottom-0 right-0 w-3 h-3 bg-red-600 rounded-sm text-[10px] text-white  flex justify-center items-center">{cartCount}</div></NavLink>
                 
                </div>
                <div onClick={handleProfile} className="hover:text-red-600 cursor-pointer">
                    <BiMenuAltRight />
                </div>
                {dropdown &&
                    <ul className='absolute top-[42px] right-0 bg-white text-[15px] md:text-lg z-auto text-end gap-3 flex flex-col rounded-md shadow-md'>
                        <li className="list flex gap-3 items-center justify-start hover:bg-gray-300 w-[100%] px-3 py-0 md:py-1 pr-8 rounded-t-md">
                            <NavLink className="flex gap-3 items-center w-[100%] hover:text-red-400" to="/">
                                <BiHome /> Home
                            </NavLink>
                        </li>
                        <li className="list flex gap-3 items-center justify-start hover:bg-gray-300 w-[100%] px-3 py-0 md:py-1 pr-8">
                            <NavLink className="flex gap-3 items-center w-[100%] hover:text-red-400" to="/profile">
                                <CgProfile /> Profile
                            </NavLink>
                        </li>
                        <li className="list flex gap-3 items-center justify-start hover:bg-gray-300 w-[100%] px-3 py-0 md:py-1 pr-8">
                            <NavLink className="flex gap-3 items-center w-[100%] hover:text-red-400" to="/support">
                                <BiSupport /> 24*7 Support
                            </NavLink>
                        </li>
                        <li className="list flex gap-3 items-center justify-start hover:bg-gray-300 w-[100%] px-3 py-0 md:py-1 pr-8">
                            <NavLink className="flex gap-3 items-center w-[100%] hover:text-red-400" to="/aboutus">
                                <MdDetails /> About Us
                            </NavLink>
                        </li>
                        <li className="list flex gap-3 items-center justify-start hover:bg-gray-300 w-[100%] px-3 py-0 md:py-1 pr-8 rounded-b-md">
                            <NavLink className="flex gap-3 items-center w-[100%] hover:text-red-400" to="/login">
                                <BiLogInCircle /> {!login ? "SignUp/Login" : "Logout"}
                            </NavLink>
                        </li>
                    </ul>
                }
            </div>
        </div>
    );
}
