import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// Pages
import Home from './pages/Home/home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
