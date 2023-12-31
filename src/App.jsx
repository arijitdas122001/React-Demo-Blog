import { useEffect, useState } from 'react'
import './App.css'
import UserAuthobj from './appwrite/User_service'
import { useDispatch } from 'react-redux';
import { login,logout } from './redux/authSlice';
import Header from './components/Header/Header';
import Footer from './components/footer';
import Loading from './components/loading';
import { Outlet } from 'react-router-dom';
function App() {
  const [loading,setloading]=useState(true);
  const [user,setuser]=useState('');
  const dispatch=useDispatch();
  useEffect(()=>{
    let currentUser=UserAuthobj.GetCurrentUser();
    currentUser
    .then((curruser)=>{
      if(curruser){
      setuser(curruser);
      dispatch(login(user));
      }else{
        dispatch(logout());
      }
    })
    .catch((err)=>console.log(err))
    .finally(()=>setloading(false))
  },[])
  return !loading? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
     <div className='w-full block'>
  <Header/>
  <main>
  <Outlet/>
  </main>
  <Footer/>
  </div>
  </div>
  )
  :(
    <div className='h-screen flex items-center justify-center'>
    <Loading type="spin" color={"#9A031E"}/>
    </div>
  )
}

export default App
