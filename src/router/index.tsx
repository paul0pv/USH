// router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignUpPage, LogInPage, HomePage } from '../pages';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<LogInPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
