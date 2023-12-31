import React from 'react'
import { Link } from 'react-router-dom'
import file_op from '../appwrite/File_service'
const Card = ({$id,title,image}) => {
  return (
    <Link to={`/post/${$id}`}>
    <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
            <img src={file_op.getFilePreview(image)} alt={title}
            className='rounded-xl' />

        </div>
        <h2
        className='text-xl font-bold'
        >{title}</h2>
    </div>
</Link>
  )
}

export default Card
