import React from 'react'
import Link from 'next/link'


export default function Post({ post }) {
    return (
        <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/posts/${encodeURIComponent(post.id)}`}>
                <a>Comments</a>
            </Link>
        </div>
    )
}
