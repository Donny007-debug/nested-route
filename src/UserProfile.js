import React from 'react'
import { useParams } from 'react-router-dom'

export const UserProfile = () => {
    const {id} = useParams(); 
  return (
    <div>
        <h2>UserProfile</h2>
        <p>Profile ID : {id} </p>
    </div>
  )
}
export default UserProfile;