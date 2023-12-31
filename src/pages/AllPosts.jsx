import React, { useEffect, useState } from 'react'
import Db_op from '../appwrite/Database_service'
import {Card, Container} from '../components'
const AllPosts = () => {
    const [posts,setposts]=useState([]);
    useEffect(()=>{
        Db_op.GetAllDocuments()
        .then((ele)=>{
            if(ele){
                setposts(ele.documents);
            }
        })
    },[])
  return (
    <div>
        <Container>
        <div className='flex flex-wrap'>
      {posts.map((ele)=>(
        <div key={ele.$id} className='p-2 w-1/4'>
        <Card {...ele} />
    </div>
      ))}
      </div>
      </Container>
    </div>
  )
}

export default AllPosts
