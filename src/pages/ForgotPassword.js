import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [error,setError]= useState(false);
    const navigate=useNavigate();

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/user/forgot-password', {email});
            setMessage(response.data.message);
            setError(false);
            setTimeout(() =>{
                navigate('/verify-otp', { state: { email } });
            },1500);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Gửi email thất bại.');
            setError(true)
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Quên mật khẩu?</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Nhập email của bạn để nhận mã OTP đặt lại mật khẩu.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"

          >
            Gửi mã OTP
          </button>
        </form>
        {message && (
          <p style={{ color: error ? 'red' : 'green', marginTop: '10px' }}>{message}</p>
        )}
      </div>
    </div>
  )
}
