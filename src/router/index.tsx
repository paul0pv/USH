// router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignUpPage, LogInPage, HomePage, DashboardPage } from '../pages';
import Profile from '../pages/Profile';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<LogInPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
