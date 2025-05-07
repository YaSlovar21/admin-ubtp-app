import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from '../Home/Home';
import Login from '../Login/Login';
import { ROUTES } from '../../utils/constants';
import Header from '../Header/Header';
import Test from '../_pages/Test';
import ProtectedRouteFromAuth from '../HOC/ProtectedRouteFromAuth';
import ProtectedRouteWithAuth from '../HOC/ProtectedRouteWithAuth';
import { getUserData } from '../../services/actions/user';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AdminSchemes from '../_pages/AdminSchemes/AdminSchemes';
import AdminSpecificationsPage from '../../pages/AdminSpecificationsPage';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());  
  }, [] );

  return (
    <div className="max-w-[1900px] mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<ProtectedRouteWithAuth element={<Home />} />} />
        <Route path="/login" element={<ProtectedRouteFromAuth element={<Login/>}/> } />
        <Route path="/admin/schemes" element={<ProtectedRouteWithAuth element={<AdminSchemes />}/> } />
        <Route path="/admin/schemes/:idScheme" element={<ProtectedRouteWithAuth element={<AdminSpecificationsPage />}/> } />
      </Routes>
    </div>
  )
}

export default App
