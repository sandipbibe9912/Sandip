import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import BrowserRouter and other necessary components
import Appbar from './component/Appbar';
import Login from './component/Login';
import ForgotPassword from './component/ForgotPassword';
import ResetPassword from './component/ResetPassword';
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';
import "./App.css"
import StoreList from './component/StoreList';


function CustomAppBar() {
  const location = useLocation();

 
  const shouldShowAppBar = () => {
    const publicRoutes = ['/', '/forgot-password', '/reset-password', '/signup'];
    return !publicRoutes.includes(location.pathname);
  };

  return shouldShowAppBar() ? <Appbar /> : null;
}


function App() {
    


  return (
    <Router> 
      <div>
      <CustomAppBar />
      <div className='components'>
        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:userId/:token" element={<ResetPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/store-list" element={<StoreList />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
