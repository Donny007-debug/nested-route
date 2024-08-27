import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({isAuthenticated, children}) => {
  return isAuthenticated? children : <Navigate to = '/login' /> 
}
