import React from 'react'
import UserAuthobj from '../../appwrite/User_service';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
const LogoutBtn = () => {
  const dispatch=useDispatch();
  const userlogout=async()=>{
    UserAuthobj.UserLogOut().then(()=>dispatch(logout()))
  }
  return (
   <button children={"logout"} onClick={userlogout}>Logout</button>
  )
}

export default LogoutBtn
