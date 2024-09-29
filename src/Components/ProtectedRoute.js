import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({userIsLoggedIn, children}) => {
  return userIsLoggedIn? (children) : (alert('You need to login first :D'), <Navigate to = '/login' />) 
}
export default ProtectedRoute;