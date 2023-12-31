import React, { useEffect, useState } from 'react'
import Db_op from '../appwrite/Database_service'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, PostForm } from '../components'
const EditPost = () => {
    const id=useParams();
    const [post,setpost]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        if(id){
        Db_op.GetDocument(id)
        .then((ele)=>{
            if(ele){
                setpost(ele);
            }
        })
    }else{
        navigate('/')
    }
    },[id,navigate])
  return post?(
    <div>
      <div className='py-8'>
       <Container>
        <PostForm post={post}/>
       </Container>
    </div>
    </div>
  ):null;
}

export default EditPost
