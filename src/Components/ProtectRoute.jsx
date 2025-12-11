import React from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom';
const ProtectRoute = ({children}) => {
  const loggedIn = localStorage.getItem("token")
  return loggedIn ? children : <Navigate to="/login" replace/>
};

export default ProtectRoute;