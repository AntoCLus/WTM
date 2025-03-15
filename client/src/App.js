import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import './components/Pages.css';
import CalendarWTM from './components/Calendar';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';
import LandingPage from './components/LandingPage';
import { Navbar } from './ui/NavBar';
import Login from './components/Login';
import Register from './components/register';
import ExpenseManager from './components/ExpenseManager';

function App() {
 

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ExpenseManager" element={<ExpenseManager />} />
          
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
