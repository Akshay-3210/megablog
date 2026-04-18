import React from 'react'
import service from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard(props) {
  const data = props.post ? props.post : props
  const { $id, title, featuredimage } = data
  return (
    <Link to={`/post/${$id}`}>
        <div className="w-full bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm">
            <div className="w-full justify-center mb-4">
                <img src={service.getFilePreview(featuredimage)} 
                alt={title}
                className='rounded-xl' 
                />
            </div>
            <h2
            className='text-xl font-bold text-blue-950'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard
