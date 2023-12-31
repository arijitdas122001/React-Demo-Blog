import React, { useEffect, useState } from 'react'
import Db_op from '../appwrite/Database_service';
import file_op from '../appwrite/File_service';
import { useNavigate, useParams } from 'react-router-dom';
import { parse } from 'html-parser';
import { Button,Container, } from '../components';
const Post = () => {
    const [post,setpost]=useState(null);
    const id=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        if(id){
        Db_op.GetDocument(id)
        .then((ele)=>{
            if(ele){
                setpost(ele);
            }else{
                navigate('/')
            }
        })
        }
    },[id,navigate])
    const deletePost=()=>{
        Db_op.DeleteDocument(post.$id).then((status)=>{
            if(status){
                file_op.DeleteFile(post.img);
                navigate('/');
            }
        });
    }
  return post? (
    <div className="py-8">
    <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
            <img
                src={file_op.getFilePreview(post.img)}
                alt={post.title}
                className="rounded-xl"
            />

            {isAuthor && (
                <div className="absolute right-6 top-6">
                    <Link to={`/edit-post/${post.$id}`}>
                        <Button bgColor="bg-green-500" className="mr-3">
                            Edit
                        </Button>
                    </Link>
                    <Button bgColor="bg-red-500" onClick={deletePost}>
                        Delete
                    </Button>
                </div>
            )}
        </div>
        <div className="w-full mb-6">
            <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">
            {parse(post.content)}
            </div>
    </Container>
</div>
) : null;
}

export default Post
