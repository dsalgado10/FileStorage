import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewDocument from './pages/NewDocument';
import Documents from './pages/Documents';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registro' element={<Register />} />
            <Route path='/nuevo-documento' element={<PrivateRoute />}>
              <Route path='/nuevo-documento' element={<NewDocument />} />
            </Route>
            <Route path='/documents' element={<PrivateRoute />}>
              <Route path='/documents' element={<Documents />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
