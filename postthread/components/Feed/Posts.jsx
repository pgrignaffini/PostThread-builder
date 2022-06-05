import React, { useState, useEffect } from 'react'
import Post from './Post'

export default function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            {
                posts?.map((post) =>
                    <Post key={post.id} post={post} />
                )
            }
        </div>
    )
}
