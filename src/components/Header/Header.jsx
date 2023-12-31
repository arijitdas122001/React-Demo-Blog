import React from 'react'
import { useSelector } from 'react-redux'
import LogoutBtn from './LogoutBtn';
import { Link } from 'react-router-dom';
import Container from '../container/container';
import { useNavigate } from 'react-router-dom';
import {Logo} from '../index'
const Header = () => {
  const authStatus=useSelector((state)=>state.auth.status);
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  const navigate=useNavigate();
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
      <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
        </div>
        <ul className='flex ml-auto'>
          {navItems.map((ele)=>(
            ele.active?(
              <li key={ele.name} className='ml-5'>
              <button children={ele.name} onClick={()=>navigate(ele.slug)}>{ele.name}</button>
            </li>
            ):null
          ))}
          {authStatus && (
            <li>
            <LogoutBtn className='ml-5' />
          </li>
          )}
        </ul>
      </nav>
        </Container>
  </header>
  )
}

export default Header
