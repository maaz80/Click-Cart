import React, { useState } from 'react';

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChangePassword = () => {
        // Assuming the current password is stored in localStorage for simplicity
        const storedPassword = localStorage.getItem('password');

        if (currentPassword !== storedPassword) {
            setError('Current password is incorrect.');
            setSuccess('');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('New password and confirmation do not match.');
            setSuccess('');
            return;
        }

        // Update the password in localStorage
        localStorage.setItem('password', newPassword);
        setError('');
        setSuccess('Password changed successfully.');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="w-full  mx-auto p-4">
             <div className='text-2xl text-gray-500 font-semibold marker:l-0 md:ml-2'>
             Change Password
                        </div>
                        <div className='h-1 w-[100%] bg-gray-500 mt-3 mb-12'></div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <div className="mb-4">
                <label className="block text-gray-700">Current Password:</label>
                <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="border rounded-md w-full px-2 py-1"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">New Password:</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border rounded-md w-full px-2 py-1"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Confirm New Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border rounded-md w-full px-2 py-1"
                />
            </div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleChangePassword}
            >
                Change Password
            </button>
        </div>
    );
};

export default ChangePassword;
