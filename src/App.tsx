import React, { useEffect, useState } from 'react';
import './App.css';
import { Box } from '@mui/material';
import { Route, Routes, HashRouter, } from 'react-router-dom';
import MainLoader from './common/loaders/MainLoader';
import SignIn from './pages/SignIn';
import SignUpMain from './pages/SignupMain';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    window.addEventListener('load', handleLoading);
    return () => window.removeEventListener('load', handleLoading);
  }, []);

  return !isLoading ? (
    <div className="App">
      <HashRouter basename="/TimeTac.Client/">
        <Routes>
        <Route path={"register"} element={<SignUpMain />} />
        <Route path={"login"} element={<SignIn />} />
        </Routes>
      </HashRouter>
    </div>
  ) : 
   (
    <Box sx={{ display: 'flex' }}>
      <MainLoader isLoading={isLoading} />
    </Box>
   )
}

export default App;
