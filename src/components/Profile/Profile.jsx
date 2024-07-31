import React, { useState, useEffect, useRef } from 'react';
import Logo from "../../images/Logo.png";
import Right from "../../images/Right.png";
import Left from "../../images/Left.png";
import { PiPencil } from 'react-icons/pi';
import { NavLink, useLocation } from 'react-router-dom';
import { CgPassword } from 'react-icons/cg';
import { BsBox } from 'react-icons/bs';
import { MdAccountBox } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';
import { FaShippingFast } from 'react-icons/fa';
import MyOrders from '../MyOrders/MyOrders';
import ShipAddress from '../Address/ShipAddress';
import ChangeAccount from '../ChangeAccount/ChangeAccount';
import ChangePassword from '../ChangePassword/ChangePassword';

const Profile = () => {
    const [profilePhoto, setProfilePhoto] = useState(Logo);
    const [username, setUsername] = useState("Maaz Shakeel");
    const [userDOB, setUserDOB] = useState("04/11/2001");
    const [userNumber, setUserNumber] = useState(9616584237);
    const [userEmail, setUserEmail] = useState("maazforlap@gmail.com");
    const [gender, setGender] = useState("male");
    const [isEditing, setIsEditing] = useState(false);
    const [isProfile, setIsProfile] = useState(true);
    const [isOrder, setIsOrder] = useState(false);
    const [isAddress, setIsAddress] = useState(false);
    const [isChangeAccount, setIsChangeAccount] = useState(false);
    const [isChangePassword, setIsChangePassword] = useState(false);
    const [isSidebar, setIsSidebar] = useState(false);
    const location = useLocation();
    const sideBarRef = useRef(null);


    useEffect(() => {
        const savedProfile = localStorage.getItem('profile');
        if (savedProfile) {
            const profile = JSON.parse(savedProfile);
            setProfilePhoto(profile.profilePhoto || Logo);
            setUsername(profile.username || "Maaz Shakeel");
            setUserDOB(profile.userDOB || "04/11/2001");
            setUserNumber(profile.userNumber || 9616584237);
            setUserEmail(profile.userEmail || "maazforlap@gmail.com");
            setGender(profile.gender || "male");
        }
    }, []);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfilePhoto(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleEditing = () => {
        if (isEditing) {
            const profile = {
                profilePhoto,
                username,
                userDOB,
                userNumber,
                userEmail,
                gender
            };
            localStorage.setItem('profile', JSON.stringify(profile));
        }
        setIsEditing(!isEditing);
    };

    const handleProfile = () => {
        setIsProfile(true);
        setIsOrder(false);
        setIsAddress(false);
        setIsSidebar(false);
        setIsChangeAccount(false);
        setIsChangePassword(false)
    }

    const handleOrder = () => {
        setIsOrder(true);
        setIsProfile(false);
        setIsAddress(false);
        setIsSidebar(false);
        setIsChangeAccount(false);
        setIsChangePassword(false)
    }
    const handleAddress = () => {
        setIsOrder(false);
        setIsProfile(false);
        setIsAddress(true);
        setIsSidebar(false);
        setIsChangeAccount(false);
        setIsChangePassword(false)
    }
    const handleChangeAccount = () => {
        setIsOrder(false);
        setIsProfile(false);
        setIsAddress(false);
        setIsSidebar(false);
        setIsChangeAccount(true);
        setIsChangePassword(false)
    }
    const handleChangePassword = () => {
        setIsOrder(false);
        setIsProfile(false);
        setIsAddress(false);
        setIsSidebar(false);
        setIsChangeAccount(false);
        setIsChangePassword(true)
    }


    const handleSidebar = () => {
        setIsSidebar(!isSidebar);
    };


    return (
        <div>
            <div className='w-[100%] md:w-[92%] rounded-md m-auto p-5 flex gap-5 poppins-regular'>
                <button
                    className='fixed top-10 md:top-16 bg-gray-600 border rounded-md p-1 md:p-3 left-[-5px] flex md:hidden'
                    onClick={handleSidebar}
                >
                    <img src={`${isSidebar ? Left : Right} `} alt="Right" width={19} className='invert'/>
                </button>
                <div
                    className={`absolute md:relative md:flex flex-col w-[39%] md:w-[18%] gap-4 transition-transform duration-300 top-[68px] md:top-0 z-10 ${isSidebar ? 'translate-x-[-21px]' : 'translate-x-[-216px]'} md:translate-x-0`}
                >
                    <div className='bg-white rounded-md flex justify-start items-center gap-4 h-[3rem] md:h-20 border border-gray-200 text-[10px] md:text-lg'>
                        <div className='w-[40%] flex justify-center items-center h-[100%] ml-[-13px]'>
                            <img className='rounded-[50%] ml-3 w-[52%] h-[64%] md:w-[52%] object-cover' width={50} height={50} src={profilePhoto} alt="Profile" />
                        </div>
                        <div className='ml-[-22px]'>
                            <div>Hello!</div>
                            <div className='font-bold'>{username}</div>
                        </div>
                    </div>
                    <div className='bg-white rounded-md'>
                        <ul className='bg-white text-[10px] md:text-lg z-10 text-end  flex flex-col rounded-md border border-gray-200 '>
                            <li
                                className="list flex gap-3 items-center justify-start hover:bg-gray-300 w-[100%] pl-3  px-0 md:px-3 py-2 md:py-3 pr-0 md:pr-8 rounded-t-md"
                                onClick={handleProfile}
                            >
                                <NavLink className="flex gap-3 items-center w-[100%] hover:text-red-700" to="/profile">
                                    <ImProfile />My Profile
                                </NavLink>
                            </li>
                            <li
                                className="list flex gap-3 items-center justify-start hover:bg-gray-300  hover:text-red-700 w-[100%] pl-3  px-0 md:px-3 py-2 md:py-3 pr-0 md:pr-8 cursor-pointer"
                                onClick={handleOrder}
                            >
                                <BsBox />My Orders
                            </li>
                            <li className="list flex gap-3 items-center justify-start hover:bg-gray-300 hover:text-red-700 w-[100%] pl-3  px-0 md:px-3 py-2 md:py-3 pr-0 md:pr-8 cursor-pointer" onClick={handleAddress}>
                                <FaShippingFast />Shipping Address
                            </li>
                            <li className="list flex gap-3 items-center justify-start hover:bg-gray-300 hover:text-red-700 w-[100%] pl-3  px-0 md:px-3 py-2 md:py-3 pr-0 md:pr-8 cursor-pointer" onClick={handleChangeAccount}>
                                <MdAccountBox />Change Account
                            </li>
                            <li className="list flex gap-3 items-center justify-start hover:bg-gray-300 hover:text-red-700 w-[100%] pl-3  px-0 md:px-3 py-2 md:py-3 pr-0 md:pr-8 cursor-pointer rounded-b-md" onClick={handleChangePassword}>
                                <CgPassword />Change Password
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-white rounded-md w-[100%] md:w-[78%] border  border-gray-200 shadow-sm text-[15px] md:text-lg p-[9px] md:p-5">
                    {isProfile &&
                        <div>
                            <div className='text-2xl text-gray-500 font-semibold marker:l-0 md:ml-2'>
                                Personal Information
                            </div>
                            <div className='h-1 w-[100%] bg-gray-500 mt-3'></div>
                            <div className='flex items-center justify-end'>
                                <button
                                    className='text-blue-500 flex items-center justify-end gap-1 md:gap-3 text-[13px] md:text-[18px]'
                                    onClick={toggleEditing}
                                >
                                    <PiPencil />{!isEditing ? "Change Information" : "Save"}
                                </button>
                            </div>
                            <div className="profile flex justify-between">
                                <div className='flex flex-col items-center mt-5'>
                                    <div className="flex justify-center items-center gap-5">
                                        <div className="relative">
                                            <img className='rounded-full w-16 md:w-32 h-16 md:h-32 object-cover' src={profilePhoto} alt="Profile" />
                                            <input
                                                type="file"
                                                id="photoUpload"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handlePhotoChange}
                                                disabled={!isEditing}
                                            />
                                            <button
                                                onClick={() => document.getElementById('photoUpload').click()}
                                                className={`absolute right-0 bottom-0 mt-3 px-1 py-1 bg-white border border-blue-500 text-black rounded-md ${isEditing ? 'hover:bg-blue-600' : 'hover:none'}  `}
                                            >
                                                <PiPencil />
                                            </button>
                                        </div>
                                        <div>
                                            <div>Hello!</div>
                                            <div className='font-bold text-[24px]'>{username}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <div className='mb-4'>
                                    <label className='block'>Name</label>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className='border rounded-md w-full px-2 py-1'
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className='block'>Date of Birth</label>
                                    <input
                                        type="text"
                                        value={userDOB}
                                        onChange={(e) => setUserDOB(e.target.value)}
                                        className='border rounded-md w-full px-2 py-1'
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className='block'>Gender</label>
                                    <div className="flex gap-4">
                                        <label className='flex items-center'>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                checked={gender === "male"}
                                                onChange={(e) => setGender(e.target.value)}
                                                className='mr-2'
                                                disabled={!isEditing}
                                            />
                                            Male
                                        </label>
                                        <label className='flex items-center'>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                checked={gender === "female"}
                                                onChange={(e) => setGender(e.target.value)}
                                                className='mr-2'
                                                disabled={!isEditing}
                                            />
                                            Female
                                        </label>
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='block'>Phone Number</label>
                                    <input
                                        type="number"
                                        value={userNumber}
                                        onChange={(e) => setUserNumber(e.target.value)}
                                        className='border rounded-md w-full px-2 py-1'
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className='block'>Email</label>
                                    <input
                                        type="email"
                                        value={userEmail}
                                        onChange={(e) => setUserEmail(e.target.value)}
                                        className='border rounded-md w-full px-2 py-1'
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>
                        </div>
                    }

                    {isOrder && <MyOrders />}
                    {isAddress && <ShipAddress />}
                    {isChangeAccount && <ChangeAccount />}
                    {isChangePassword && <ChangePassword />}
                </div>
            </div>
        </div>
    );
}

export default Profile;