import React, { useState, useEffect } from 'react'
import Comment from './Comment'

export default function Comments({ postId }) {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(data => setComments(data))
        console.log(comments)
    }, [postId])

    return (
        <div>
            {
                comments?.map((comment) =>
                    <Comment key={comment.id} comment={comment} />
                )
            }
        </div>
    )
}
