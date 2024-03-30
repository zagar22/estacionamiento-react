import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/common/navbar/NavBar';
import SignUp from './components/authentication/SignUp/SignUp';
import Main from './components/common/main/main';
import Login from './components/authentication/login/Login';

function App() {
  return (
    <div className="">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/inicio' element={<Main />} />
          <Route path='/registro' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
