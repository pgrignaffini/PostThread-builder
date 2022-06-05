import React from 'react'

export default function Comment({ comment }) {

    return (
        <div key={comment.id}>
            <h1>{comment.name}</h1>
            <p>{comment.body}</p>
        </div>
    )
}
