import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [message, setMessage]= useState("")

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
//  console.log(formData); 


  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if(formData.password !== formData.confirmPassword){
        setError("Mật khẩu không trùng khớp");
        return;
    }

    try {
        const response = await fetch("http://localhost:8000/api/user/register",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        });

        const data = response.json();

        if(response.ok){
            setSuccess("Đăng ký thành công");
            setTimeout(() => {
                navigate('/login');
              }, 2000);
        }else {
            setError(data.message || "Đăng ký thất bại")
        }

    } catch (error) {
        setError("Có lỗi xảy ra khi kết nối server.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-blue-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Đăng ký
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-4">{success}</p>}

        <div className="mb-4">
          <label className="block font-medium mb-1">Họ</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Nhập họ"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Tên</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Nhập tên"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Nhập email"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Số điện thoại</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Nhập số điện thoại"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Nhập mật khẩu"
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-1">Xác nhận mật khẩu</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Nhập lại mật khẩu"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg transition duration-200"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};
