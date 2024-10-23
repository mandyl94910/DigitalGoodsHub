import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function ResetPassword() {
  // State hooks to store input values for new password and password confirmation
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // 验证两次密码输入是否一致
  const formValidation = () => {
    if (!newPassword || !confirmPassword) {
      setError('Please fill in both password fields.');
      return false;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    return true;
  };

  // 提交表单，更新密码
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');  // 清除之前的错误消息

    // 验证表单
    if (!formValidation()) {
      return;
    }

    setIsLoading(true);

    // 获取 URL 中的 token
    const { token } = router.query;

    // 调用 API 更新密码
    axios.post('http://localhost:3001/api/reset-password', {
      token, // 传递token用于身份验证
      newPassword,
    })
    .then((res) => {
      console.log('Password updated successfully:', res.data);
      router.push('/login');  // 成功后重定向到登录页面
    })
    .catch((err) => {
      console.error('Error updating password:', err.response?.data || err.message);
      setError('Failed to reset password. Please try again.');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="flex h-screen slide-in">
      <div className="w-full h-full flex flex-col justify-center items-center bg-white p-8">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-16 my-3 cursor-pointer" />
        </Link>
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Reset Password</h1>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="newPassword">
              New Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="newPassword"
              type="password"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="confirmPassword">
              Confirm New Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Please wait...' : 'Reset Password'}
          </button>
          {error && (
            <p className="text-red-500 text-center mt-4">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}