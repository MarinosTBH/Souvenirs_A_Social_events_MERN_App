import React, { useState, useEffect } from 'react';
import  { useDispatch, useSelector } from 'react-redux';
import  { getUsers } from '../../actions/users';
import  UserCard from './UserCard';


import './style.css'

import axios from 'axios';
const Admin = () => {
 
    const user = JSON.parse(localStorage.getItem('profile'));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    },[]) 

    const users = useSelector((state) => state.users)
        
  return ( 
    user.result.role === "admin" ?
        <div className="scrollmenu">
                {users.map((user) => (
                    <UserCard key={user._id} user={user}/>
                ))}
        </div> : 
        <div>No content</div>
  )
}

export default Admin