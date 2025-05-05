
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import { Register } from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import VerifyOTP from './pages/VerifyOTP';
import ResetPassword from './pages/ResetPassword';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';



function App() {
  return (

    
   <BrowserRouter>
    <Routes>

    <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          {/* Bạn có thể thêm nhiều trang tại đây như: Shop, Contact, Profile... */}
        </Route>


      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/forgot-password' element={<ForgotPassword/>} />
      <Route path='/verify-otp' element={<VerifyOTP/>} />
      <Route path='/reset-password' element={<ResetPassword/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
