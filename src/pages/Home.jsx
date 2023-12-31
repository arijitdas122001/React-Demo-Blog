import React, { useEffect, useState } from 'react'
import Db_op from '../appwrite/Database_service';
import { Container,Card } from '../components';
const Home = () => {
    const [allpost,setallpost]=useState([]);
    useEffect(()=>{
        Db_op.GetAllDocuments().then((post)=>{
            if(post){
                setallpost(post.documents);
            }
        })
    },[])
    if(allpost.length==0){
        return(
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }else{
  return (
    <div>
      <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {allpost.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <Card {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    </div>
  )
    }
}

export default Home
