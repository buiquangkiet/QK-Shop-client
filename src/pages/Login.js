import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const trimmedFormData = {
      email: formData.email.trim(),
      password: formData.password.trim(), // trim password trước khi gửi
    };

    console.log("Dữ liệu gửi lên:", trimmedFormData);

    try {
      const response = await fetch("http://localhost:8000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trimmedFormData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Đăng nhập thành công");
        console.log("Thông tin user:", data);
        localStorage.setItem("token", data.token);
        // navigate('/dashboard');
      } else {
        setError(data.message || "Đăng nhập thất bại");
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      setError("Đã xảy ra lỗi khi kết nối đến server.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-indigo-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Đăng nhập
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-4">{success}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Nhập email"
            value={formData.email}
            onChange={handleLogin}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-1">
            Mật khẩu
          </label>
          <input
            type="password"
            name="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Nhập mật khẩu"
            value={formData.password}
            onChange={handleLogin}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg transition duration-200"
        >
          Đăng nhập
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          <a
            href="/forgot-password"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Quên mật khẩu?
          </a>
        </p>

        <p className="text-center text-sm text-gray-600 mt-4">
          Bạn chưa có tài khoản?{" "}
          <a
            href="/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Đăng ký
          </a>
        </p>
      </form>
    </div>
  );
}
