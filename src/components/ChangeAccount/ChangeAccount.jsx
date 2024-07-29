import React, { useState, useEffect } from 'react';

const ChangeAccount = () => {
    const [accounts, setAccounts] = useState([]);
    const [currentAccount, setCurrentAccount] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAddingNewAccount, setIsAddingNewAccount] = useState(false);
    const [loginID, setLoginID] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    useEffect(() => {
        const savedAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
        setAccounts(savedAccounts);
    }, []);

    const handleAddAccount = () => {
        const newAccount = { id: Date.now(), username, email, password };
        const updatedAccounts = [...accounts, newAccount];
        setAccounts(updatedAccounts);
        localStorage.setItem('accounts', JSON.stringify(updatedAccounts));
        setUsername('');
        setEmail('');
        setPassword('');
        setIsAddingNewAccount(false);
    };

    const handleLogin = () => {
        const account = accounts.find(acc => acc.id.toString() === loginID && acc.password === loginPassword);
        if (account) {
            setCurrentAccount(account);
            setLoginID('');
            setLoginPassword('');
        } else {
            alert('Invalid ID or Password');
        }
    };

    return (
        <div className="w-full  mx-auto p-2">
            <div className='w-[100%]'>
                <div className='text-2xl text-gray-500 font-semibold marker:l-0 md:ml-2'>
                    Change Account
                </div>
                <div className='h-1 w-[100%] bg-gray-500 mt-3'></div>
            </div>
            {currentAccount ? (
                <div className='max-w-md mt-10'>
                    <h2 className="text-xl font-bold mb-4">Current Account</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username:</label>
                        <p>{currentAccount.username}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <p>{currentAccount.email}</p>
                    </div>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => setCurrentAccount(null)}
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className='mt-10'>
                    <h2 className="text-xl font-bold mb-4">Login to Existing Account</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700">Account ID:</label>
                        <input
                            type="text"
                            value={loginID}
                            onChange={(e) => setLoginID(e.target.value)}
                            className="border rounded-md w-full px-2 py-1"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password:</label>
                        <input
                            type="password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className="border rounded-md w-full px-2 py-1"
                        />
                    </div>
                    <button
                        className="bg-blue-500 text-white w-[100%] py-1 rounded"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            )}

            {currentAccount ? null : (
                <div className="mt-8">
                    {isAddingNewAccount ? (
                        <div>
                            <h2 className="text-xl font-bold mb-4">Add New Account</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700">Username:</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="border rounded-md w-full px-2 py-1"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border rounded-md w-full px-2 py-1"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Password:</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="border rounded-md w-full px-2 py-1"
                                />
                            </div>
                            <button
                                className="bg-blue-500 text-white w-[68.5%] lg:w-[89.5%] py-2 rounded"
                                onClick={handleAddAccount}
                            >
                                Save Account
                            </button>
                            <button
                                className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
                                onClick={() => setIsAddingNewAccount(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <button
                            className="bg-green-500 text-white w-[100%] py-2 rounded"
                            onClick={() => setIsAddingNewAccount(true)}
                        >
                            Add New Account
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChangeAccount;
