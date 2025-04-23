import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function VerifyOtp() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {}; // Lấy email từ state
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      setMessage('Vui lòng nhập mã OTP.');
      setError(true);
      return;
    }

    setLoading(true);
    try {
      // Giả lập gọi API xác thực OTP
      const response = await axios.post('http://localhost:8000/api/user/verify-otp',{email,otp});
      
      // Giả sử OTP đúng, chuyển hướng đến trang thay đổi mật khẩu
      setMessage(response.data.message || 'Xác thực thành công!');
      setError(false);

      // Sau khi xác thực thành công, chuyển hướng đến trang thay đổi mật khẩu
      setTimeout(() => {
    navigate('/reset-password', {state:{email,otp}}); // Chuyển hướng đến trang reset-password
      }, 1500);

    } catch (error) {
      setMessage( error.response?.data?.message || 'Mã OTP không hợp lệ!');
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Xác thực OTP</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Mã OTP đã được gửi đến email: <span className="font-semibold">{email}</span>
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nhập mã OTP"
            value={otp}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength="6"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? 'Đang xác thực...' : 'Xác thực OTP'}
          </button>
        </form>
        {message && (
          <p style={{ color: error ? 'red' : 'green', marginTop: '10px' }}>{message}</p>
        )}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Chưa nhận được mã?{' '}
            <button
              className="text-blue-600 hover:underline"
              onClick={() => alert('Gửi lại mã OTP!')} // Giả lập gửi lại OTP
            >
              Gửi lại
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
